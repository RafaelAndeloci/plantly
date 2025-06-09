import { Image, useWindowDimensions } from "react-native";

interface LogoProps {
  size?: number;
}
export function Logo({ size: sizeProp }: LogoProps) {
  const { width } = useWindowDimensions();

  const size = sizeProp ?? Math.min(width / 1.5, 400);

  return (
    <Image
      source={require("@/assets/plantly.png")}
      style={{ width: size, height: size }}
    />
  );
}
