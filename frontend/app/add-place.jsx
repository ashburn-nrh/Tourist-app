import { useState } from "react";
import { View, Text, TextInput, Button, Alert } from "react-native";
import { useRouter } from "expo-router";

const API_URL = "http://192.168.1.13:5001/api/places";

export default function AddPlace() {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const router = useRouter();

  const handleAddPlace = () => {
    if (!name || !category || !latitude || !longitude) {
      return Alert.alert("Error", "All fields are required!");
    }

    fetch(`${API_URL}/add`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        category,
        location: { coordinates: [parseFloat(longitude), parseFloat(latitude)] },
      }),
    })
      .then((res) => res.json())
      .then(() => {
        Alert.alert("Success", "Place added!");
        router.push("/");
      })
      .catch((err) => console.error("❌ Error:", err));
  };

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 24 }}>Add a New Place</Text>
      <TextInput placeholder="Place Name" style={{ borderBottomWidth: 1, marginVertical: 10 }} onChangeText={setName} />
      <TextInput placeholder="Category" style={{ borderBottomWidth: 1, marginVertical: 10 }} onChangeText={setCategory} />
      <TextInput placeholder="Latitude" keyboardType="numeric" style={{ borderBottomWidth: 1, marginVertical: 10 }} onChangeText={setLatitude} />
      <TextInput placeholder="Longitude" keyboardType="numeric" style={{ borderBottomWidth: 1, marginVertical: 10 }} onChangeText={setLongitude} />
      <Button title="Add Place" onPress={handleAddPlace} />
    </View>
  );
}
