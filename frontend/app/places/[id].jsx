import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { View, Text } from "react-native";

const API_URL = "http://172.20.10.3:5001/api/places"; // Replace with your backend IP

export default function PlaceDetails() {
  const { id } = useLocalSearchParams();
  const [place, setPlace] = useState(null);

  useEffect(() => {
    fetch(`${API_URL}/${id}`)
      .then((res) => res.json())
      .then((data) => setPlace(data))
      .catch((err) => console.error("Error:", err));
  }, [id]);

  if (!place) return <Text>Loading...</Text>;
  console.log("Fetching place with ID:", id);


  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 24 }}>{place.name}</Text>
      <Text style={{ fontSize: 18, color: "gray" }}>{place.category}</Text>
    </View>
  );
}
