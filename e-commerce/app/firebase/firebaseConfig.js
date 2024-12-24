import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // Auth işlemleri için
import { getFirestore } from "firebase/firestore"; // Firestore işlemleri için

// Firebase config ayarlarınızı buraya ekleyin
const firebaseConfig = {
    apiKey: "AIzaSyBly6jBOfUe7jvIKFTLv18aruYGDPPzAM0",
    authDomain: "helva-f747f.firebaseapp.com",
    projectId: "helva-f747f",
    storageBucket: "helva-f747f.appspot.com",
    messagingSenderId: "745667566912",
    appId: "1:745667566912:web:8cdf07f4bd173ef57b2ea5",
    measurementId: "G-S1CFQNDYN6"
};

// Firebase'i başlatıyoruz. Zaten başlatılmışsa tekrar başlatmıyoruz
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// Firebase Auth ve Firestore servisini başlatıyoruz
export const auth = getAuth(app);
export const db = getFirestore(app);
