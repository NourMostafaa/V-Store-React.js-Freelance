import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, addDoc } from "firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyDZ3ZKeTuX0Elm1U1koC9OnyTpGCqKI_BY",
    authDomain: "v-store-ar.firebaseapp.com",
    projectId: "v-store-ar",
    storageBucket: "v-store-ar.firebasestorage.app",
    messagingSenderId: "944659198558",
    appId: "1:944659198558:web:b80c39c1e0a4cb3813bacf",
    measurementId: "G-L35MBTT2KD"
};

// تهيئة Firebase
const app = initializeApp(firebaseConfig);

// الحصول على مرجع لقاعدة بيانات Firestore
const db = getFirestore(app);

export { db, collection, getDocs , addDoc };
