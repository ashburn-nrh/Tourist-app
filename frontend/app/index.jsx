import { useEffect, useState } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { Link } from "expo-router";

const API_URL = "http://172.20.10.3:5001/api/places"; // Replace with your backend IP

export default function HomeScreen() {
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    // fetch(API_URL)
    //   .then((res) => res.json())
    //   .then((data) => setPlaces(data))
    //   .catch((err) => console.error("Error:", err));
    fetch("http://172.20.10.3:5001/api/places")
  .then((response) => response.text())  // Convert to text first
  .then((text) => {
    console.log("🔍 API Response:", text); // Log raw response
    return JSON.parse(text);  // Try parsing as JSON
  })
  .then((data) => console.log("✅ Parsed Data:", data))
  .catch((error) => console.error("❌ Fetch error:", error));
  }, []);

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: "bold" }}>Nearby Places</Text>
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
