import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { View, Text, ActivityIndicator } from "react-native";

const API_URL = "http://192.168.1.13:5001/api/places";

export default function PlaceDetails() {
  const { id } = useLocalSearchParams();
  const [place, setPlace] = useState(null);
  const [loading, setLoading] = useState(true); // ✅ Added loading state

  useEffect(() => {
    fetch(`${API_URL}/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setPlace(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error:", err);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <ActivityIndicator size="large" color="blue" />;

  if (!place) return <Text>No place found!</Text>;

  console.log("📍 Fetching place with ID:", id);

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 24 }}>{place.name}</Text>
      <Text style={{ fontSize: 18, color: "gray" }}>{place.category}</Text>
    </View>
  );
}
