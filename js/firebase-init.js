import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-firestore.js";

export const firebaseConfig = {
    apiKey: "AIzaSyDVehTUqpkg0nUlf32mcm0cdv6xdeRSl-g",
    authDomain: "mugsawayreviews-aa558.firebaseapp.com",
    projectId: "mugsawayreviews-aa558",
    storageBucket: "mugsawayreviews-aa558.firebasestorage.app",
    messagingSenderId: "287971872109",
    appId: "1:287971872109:web:c93f6333530c1f5304de64",
    measurementId: "G-6B8PY49NNN"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
