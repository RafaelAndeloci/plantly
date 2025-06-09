import { useUserStore } from "@/store/user-store";
import { theme } from "@/theme";
import { Button, StyleSheet, View } from "react-native";

export default function ProfileScreen() {
  const toggleHadOnboarded = useUserStore((store) => store.toggleHadOnboarded);
  return (
    <View style={styles.container}>
      <Button title="Back to onboarding" onPress={toggleHadOnboarded} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.colors.white,
  },
});
