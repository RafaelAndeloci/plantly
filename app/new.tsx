import { Button } from "@/components/Button";
import { Logo } from "@/components/logo";
import { usePlantStore } from "@/store/plants-store";
import { theme } from "@/theme";
import * as ImagePicker from "expo-image-picker";
import { useRouter } from "expo-router";
import { useState } from "react";
import {
  Alert,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export default function NewScreen() {
  const [imageUri, setImageUri] = useState<string | undefined>(undefined);
  const [name, setName] = useState("");
  const [days, setDays] = useState("");
  const addPlant = usePlantStore((state) => state.addPlant);
  const router = useRouter();
  const handleSubmit = () => {
    if (!name) {
      return Alert.alert("Validation Error", "Give your plant a name");
    }

    if (!days) {
      return Alert.alert(
        "Validation Error",
        `How often does ${name} need to be watered?`
      );
    }

    if (Number.isNaN(Number(days))) {
      return Alert.alert(
        "Validation Error",
        "Watering frequency must be a be a number"
      );
    }

    addPlant(name, Number(days), imageUri);
    router.navigate("/");
  };

  async function handleChooseImage() {
    if (Platform.OS === "web") return;

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setImageUri(result.assets[0].uri);
    }
  }

  return (
    <KeyboardAwareScrollView
      contentContainerStyle={styles.contentContainer}
      keyboardShouldPersistTaps="handled"
      style={styles.container}
    >
      <TouchableOpacity
        onPress={handleChooseImage}
        activeOpacity={0.8}
        style={{ marginTop: 56, alignItems: "center" }}
      >
        <Logo imageUri={imageUri} />
      </TouchableOpacity>

      <View style={styles.formContainer}>
        <Text style={styles.label}>Name</Text>
        <TextInput
          value={name}
          onChangeText={setName}
          style={styles.input}
          placeholder="E.g Casper the cactus"
        />
      </View>
      <View style={styles.formContainer}>
        <Text style={styles.label}>Watering Frequecy (every x days)</Text>
        <TextInput
          value={days}
          onChangeText={setDays}
          style={styles.input}
          placeholder="E.g 6"
          keyboardType="number-pad"
        />
      </View>
      <Button title="Add Plant" onPress={handleSubmit} />
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white,
  },

  contentContainer: {
    paddingTop: 24,
    gap: 24,
    paddingHorizontal: 24,
    paddingBottom: 100,
  },

  label: {
    fontSize: 18,
    textAlign: "left",
    alignSelf: "flex-start",
    marginBottom: 12,
  },
  input: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    fontSize: 18,
    borderWidth: 1,
    borderRadius: 6,
    borderColor: theme.colors.lightGrey,
    width: "100%",
  },
  formContainer: {
    flexDirection: "column",
    width: "100%",
  },
});
