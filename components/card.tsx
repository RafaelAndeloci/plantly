import { PlantType } from "@/store/plants-store";
import { theme } from "@/theme";
import { Link } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { Logo } from "./logo";

export function PlantCard({ plant }: { plant: PlantType }) {
  return (
    <Link asChild href={`plants/${plant.id}`}>
      <Pressable style={styles.plantCard}>
        <Logo imageUri={plant.imageUri} size={100} />
        <View style={styles.details}>
          <Text numberOfLines={1} style={styles.plantName}>
            {plant.name}
          </Text>
          <Text style={styles.subtitle}>
            Water every {plant.wateringFrequencyDays} days
          </Text>
        </View>
      </Pressable>
    </Link>
  );
}

const styles = StyleSheet.create({
  plantCard: {
    width: "100%",
    flexDirection: "row",
    shadowColor: theme.colors.black,
    backgroundColor: theme.colors.white,
    borderRadius: 6,
    padding: 12,
    marginBottom: 12,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  details: {
    padding: 14,
    justifyContent: "center",
  },
  plantName: {
    fontSize: 18,
    marginBottom: 4,
  },
  subtitle: {
    color: theme.colors.grey,
  },
});
