import { useUserStore } from "@/store/user-store";
import { theme } from "@/theme";
import Entypo from "@expo/vector-icons/Entypo";
import Feather from "@expo/vector-icons/Feather";
import * as QuickActions from "expo-quick-actions";
import { useQuickActionRouting } from "expo-quick-actions/router";
import { Redirect, SplashScreen, Tabs } from "expo-router";
import { useEffect } from "react";
import { Platform } from "react-native";

export default function Layout() {
  SplashScreen.hideAsync();
  useQuickActionRouting();
  useEffect(() => {
    QuickActions.setItems([
      {
        title: "Add a plant",
        icon: Platform.OS === "ios" ? "symbol:leaf" : "leaf",
        id: "0",
        params: { href: "/new" },
      },
    ]);
  }, []);
  const hasFinishedOnboarding = useUserStore(
    (state) => state.hasFinishedOnboarding
  );

  if (!hasFinishedOnboarding) {
    return <Redirect href="/onboarding" />;
  }
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: theme.colors.green }}>
      <Tabs.Screen
        name="(home)"
        options={{
          headerShown: false,
          title: "Home",
          tabBarShowLabel: false,
          tabBarIcon({ size, color }) {
            return <Entypo name="leaf" size={size} color={color} />;
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
