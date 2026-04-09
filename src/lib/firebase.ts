// lib/firebase.ts
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getApp, getApps, initializeApp } from "firebase/app";
import { getReactNativePersistence, initializeAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDHxbmyA_Tffhdoz_0NQbSsHRU5tE2tJ-A",
  authDomain: "expo-rn-firebase-8d81d.firebaseapp.com",
  projectId: "expo-rn-firebase-8d81d",
  storageBucket: "expo-rn-firebase-8d81d.appspot.com",
  messagingSenderId: "129066110230",
  appId: "1:129066110230:web:bd8caaccee3261a9739437",
};

export const app =
  getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);

export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

export const db = getFirestore(app);
