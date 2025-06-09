import { Button } from "@/components/Button";
import { PlantCard } from "@/components/card";
import { usePlantStore } from "@/store/plants-store";
import { theme } from "@/theme";
import { useRouter } from "expo-router/build/hooks";
import { StatusBar } from "expo-status-bar";
import { FlatList, StyleSheet } from "react-native";

export default function App() {
  const plants = usePlantStore((state) => state.plants);
  const router = useRouter();
  return (
    <FlatList
      data={plants}
      renderItem={({ item: plant }) => {
        return <PlantCard key={plant.id} plant={plant} />;
      }}
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      ListEmptyComponent={
        <Button
          title="Add your first plant"
          onPress={() => {
            router.navigate("/new");
          }}
        />
      }
    >
      <StatusBar style="auto" />
    </FlatList>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white,
  },
  contentContainer: {
    padding: 12,
  },
});
