# 🏝️ Tourist App

A **React Native** application built with **Expo** that allows users to discover, add, and review tourist spots. The app supports location-based services, filtering by categories (beaches, restaurants, trekking spots, etc.), and integrates **MongoDB** as the backend database.

## 📌 Features

- 🌍 **Explore Nearby Places** – View locations with details on a map.
- ➕ **Add New Places** – Users can add their favorite tourist spots.
- ⭐ **Rate & Review** – Provide ratings and reviews for places.
- 🔍 **Filter by Category** – Find places like **beaches, restaurants, camping spots, trekking locations, holy places, and gigs**.
- 🗺️ **React Native Maps Integration** – View places with map markers.

---

## 🚀 Tech Stack

### **Frontend**
- ⚛️ **React Native** (Expo)
- 🌍 **React Native Maps**
- 📍 **React Navigation** (Stack & Tab Navigators)

### **Backend**
- 🖥️ **Node.js** (Express.js)
- 🗄️ **MongoDB** (Mongoose ORM)
- 🔄 **REST API**

---

## 🏗️ Project Setup

### **1️⃣ Clone the Repository**
```sh
git clone https://github.com/YOUR_GITHUB_USERNAME/Tourist-App.git
cd Tourist-App
```

### 2️⃣ Install Backend Dependencies
```sh
cd backend
npm install
```

### 3️⃣ Configure Environment Variables
Create a `.env` file inside the `backend/` folder and add:  
```env
MONGO_URI=your_mongodb_connection_string
PORT=5001
```

### 4️⃣ Start the Backend Server
```sh
npm start
```

---

### 5️⃣ Install Frontend Dependencies
```sh
cd ../frontend
npm install
```

### 6️⃣ Start the Expo Development Server
```sh
npx expo start
```
📱 **Scan the QR Code** using Expo Go (Android) or the Camera app (iOS).  

---

## 🔄 Updating the Project & Pushing Changes
1️⃣ **Pull the latest changes before making updates**  
```sh
git pull origin main
```
2️⃣ **Make your changes, then commit & push**  
```sh
git add .
git commit -m "Updated features"
git push origin main
```

---

## 📜 API Routes
- `GET /api/places` → Fetch all places  
- `POST /api/places/add` → Add a new place  

---

## ⚠️ Troubleshooting
- If you see `"Network request failed"`, check if:
  - The **backend server is running (`npm start` in backend)**
  - Your mobile and PC are on the **same Wi-Fi**
  - You are using **your local IP (`ipconfig getifaddr en0`) in API calls**  
- If the app fails to start, try:  
  ```sh
  npx expo start --clear
  ```

---

## 🤝 Contributing
Feel free to fork this repo, create a branch, and submit a PR! 🚀  

---
