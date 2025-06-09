import { Button } from "@/components/Button";
import { Logo } from "@/components/logo";
import { useUserStore } from "@/store/user-store";
import { theme } from "@/theme";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function Onboarding() {
  const router = useRouter();
  const toggleHasOnboarded = useUserStore((state) => state.toggleHadOnboarded);
  function handlePress() {
    toggleHasOnboarded();
    router.replace("/");
  }

  return (
    <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      colors={[
        theme.colors.green,
        theme.colors.appleGreen,
        theme.colors.limeGreen,
      ]}
      style={styles.container}
    >
      <StatusBar style="light" />
      <View>
        <Text style={styles.heading}>Plantly</Text>
        <Text style={styles.tagLine}>
          Keep your plants healthy and hydrated
        </Text>
      </View>
      <Logo />

      <Button title="Let me in!" onPress={handlePress} />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: theme.colors.white,
  },
  heading: {
    fontSize: 42,
    color: theme.colors.white,
    textAlign: "center",
    fontWeight: "bold",
    marginBottom: 12,
  },
  tagLine: {
    fontSize: 24,
    paddingHorizontal: 12,
    color: theme.colors.white,
    textAlign: "center",
  },
});
