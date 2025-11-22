// js/downloads.js

import { getFirestore, doc, updateDoc, increment } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-firestore.js";
import { getApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";

const app = getApp();
const db = getFirestore(app);

const downloadBtn = document.getElementById("downloadBtn");

downloadBtn.addEventListener("click", async () => {
    try {
        const docRef = doc(db, "stats", "main");

        await updateDoc(docRef, {
            downloads: increment(1)
        });

        console.log("Download recorded.");
    } catch (err) {
        console.error("Error recording download:", err);
    }
});
