import { theme } from "@/theme";
import * as Haptics from "expo-haptics";
import {
  Platform,
  Pressable,
  StyleProp,
  StyleSheet,
  Text,
  ViewStyle,
} from "react-native";

interface Props extends React.ComponentPropsWithoutRef<typeof Pressable> {
  title: string;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
}

export function Button({ title, onPress, style, ...props }: Props) {
  function handlePress() {
    if (Platform.OS !== "web") {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    }
    onPress();
  }
  return (
    <Pressable
      onPress={handlePress}
      style={(aa) => {
        return aa.pressed
          ? [styles.button, styles.buttonPressed, style]
          : [styles.button, style];
      }}
      {...props}
    >
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  text: {
    textAlign: "center",
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  button: {
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 6,
    backgroundColor: theme.colors.green,
  },
  buttonPressed: {
    backgroundColor: theme.colors.leafyGreen,
  },
});
