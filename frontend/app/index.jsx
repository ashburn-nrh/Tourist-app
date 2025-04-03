import { useEffect, useState } from "react";
import { View, Text, FlatList, TouchableOpacity, ActivityIndicator } from "react-native";
import { Link } from "expo-router";

const API_URL = "http://192.168.1.13:5001/api/places"; // Replace with your backend IP

// Vibrant Colors for Cards
const COLORS = [
  "bg-blue-500", "bg-green-500", "bg-purple-500", "bg-red-500", "bg-yellow-500", "bg-pink-500",
];

export default function HomeScreen() {
  const [places, setPlaces] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPlaces = async () => {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        console.log("📍 API Response:", data);
        setPlaces(data);
      } catch (err) {
        console.error("❌ Fetch error:", err);
        setError("Failed to load places. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchPlaces();
  }, []);

  return (
    <View className="flex-1 bg-gray-100 px-5 py-10">
      {/* Header */}
      <Text className="text-3xl font-bold text-gray-800 text-center">📍 Nearby Places</Text>
      <Text className="text-lg text-gray-600 text-center mt-2">Explore places near you</Text>

      {/* Loading Indicator */}
      {loading && <ActivityIndicator size="large" color="#2563eb" className="mt-5" />}

      {/* Error Message */}
      {error && <Text className="text-red-500 text-center mt-3">{error}</Text>}

      {/* Places List */}
      <FlatList
        data={places}
        keyExtractor={(item) => item._id}
        renderItem={({ item, index }) => (
          <TouchableOpacity className={`mt-4 p-6 rounded-xl shadow-lg ${COLORS[index % COLORS.length]}`}>
            <Link href={`/places/${item._id}`} className="flex items-center">
              <Text className="text-2xl font-bold text-white text-center">{item.name}</Text>
              <Text className="text-lg text-gray-100 text-center mt-1">Tap to view details</Text>
            </Link>
          </TouchableOpacity>
        )}
        ListEmptyComponent={!loading && (
          <Text className="text-gray-500 text-center mt-5">No places found.</Text>
        )}
      />

      {/* Add New Place Link */}
      <View className="mt-6 flex items-center">
        <Link href="/add-place">
          <Text className="text-lg text-blue-600 font-semibold">➕ Add New Place</Text>
        </Link>
      </View>
    </View>
  );
}
