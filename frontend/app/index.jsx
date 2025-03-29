import { useEffect, useState } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { Link } from "expo-router";

const API_URL = "http://172.20.10.3:5001/api/places"; // Replace with your backend IP

export default function HomeScreen() {
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json()) // Parse JSON directly
      .then((data) => {
        console.log("📍 API Response:", data); // Log data
        setPlaces(data); // Store in state
      })
      .catch((error) => console.error("❌ Fetch error:", error));
  }, []);
  

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: "bold" }}>Nearby Places</Text>
      <Text className="text-red-500">Explore places nearby </Text>
      <FlatList
        data={places}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <TouchableOpacity style={{ marginVertical: 10, padding: 15, backgroundColor: "#ddd", borderRadius: 10 }}>
            <Link href={`/places/${item._id}`}>
              <Text style={{ fontSize: 18 }}>{item.name}</Text>
            </Link>
          </TouchableOpacity>
        )}
      />
      <Link href="/add-place" style={{ marginTop: 20, fontSize: 18, color: "blue" }}>+ Add New Place</Link>
    </View>
  );
}
