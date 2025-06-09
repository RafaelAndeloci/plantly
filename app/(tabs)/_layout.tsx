import { useUserStore } from "@/store/user-store";
import { theme } from "@/theme";
import AntDesign from "@expo/vector-icons/AntDesign";
import Entypo from "@expo/vector-icons/Entypo";
import Feather from "@expo/vector-icons/Feather";
import { Link, Redirect, Tabs } from "expo-router";
import { Pressable } from "react-native";

export default function Layout() {
  const hasFinishedOnboarding = useUserStore(
    (state) => state.hasFinishedOnboarding
  );

  if (!hasFinishedOnboarding) {
    return <Redirect href="/onboarding" />;
  }
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: theme.colors.green }}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarShowLabel: false,
          tabBarIcon({ size, color }) {
            return <Entypo name="leaf" size={size} color={color} />;
          },
          headerRight: () => {
            return (
              <Link href="/new" asChild>
                <Pressable style={{ marginRight: 18 }} hitSlop={20}>
                  <AntDesign
                    name="pluscircleo"
                    size={24}
                    color={theme.colors.green}
                  />
                </Pressable>
              </Link>
            );
          },
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarShowLabel: false,
          tabBarIcon({ size, color }) {
            return <Feather name="user" size={size} color={color} />;
          },
        }}
      />
    </Tabs>
  );
}
