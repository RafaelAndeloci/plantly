import { Image, useWindowDimensions } from "react-native";

interface LogoProps {
  size?: number;
  imageUri?: string;
}
export function Logo({ size: sizeProp, imageUri }: LogoProps) {
  const { width } = useWindowDimensions();

  const size = sizeProp ?? Math.min(width / 1.5, 400);

  return (
    <Image
      source={imageUri ?? require("@/assets/plantly.png")}
      style={{ width: size, height: size, borderRadius: 6 }}
    />
  );
}
