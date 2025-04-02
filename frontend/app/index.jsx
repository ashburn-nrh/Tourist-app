import { useEffect, useState } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { Link } from "expo-router";

const API_URL = "http://192.168.1.13:5001/api/places"; // Replace with your backend IP

export default function HomeScreen() {
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    const fetchPlaces = async () => {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        console.log("📍 API Response:", data);
        setPlaces(data);
      } catch (error) {
        console.error("❌ Fetch error:", error);
      }
    };

    fetchPlaces();
  }, []);

  return (
    <View className="p-5 bg-white min-h-screen">
      <Text className="text-2xl font-bold">Nearby Places</Text>
      <Text className="text-lg text-red-500">Explore places nearby</Text>

      <FlatList
        data={places}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <TouchableOpacity className="mt-4 p-4 bg-gray-200 rounded-lg">
            <Link href={`/places/${item._id}`}>
              <Text className="text-lg font-semibold">{item.name}</Text>
            </Link>
          </TouchableOpacity>
        )}
      />

      <Link href="/add-place" className="mt-5 text-lg text-blue-500">
        + Add New Place
      </Link>
    </View>
  );
}
