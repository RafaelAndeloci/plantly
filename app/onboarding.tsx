import { Button } from "@/components/Button";
import { useUserStore } from "@/store/user-store";
import { theme } from "@/theme";
import { useRouter } from "expo-router";
import { StyleSheet, View } from "react-native";

export default function Onboarding() {
  const router = useRouter();
  const toggleHasOnboarded = useUserStore((state) => state.toggleHadOnboarded);
  function handlePress() {
    toggleHasOnboarded();
    router.replace("/");
  }

  return (
    <View style={styles.container}>
      <Button title="Let me in!" onPress={handlePress} />
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
