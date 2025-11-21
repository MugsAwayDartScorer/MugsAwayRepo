// downloads.js
import { getFirestore, doc, updateDoc, increment } from "firebase/firestore";
import { getApp } from "firebase/app";

const app = getApp();
const db = getFirestore(app);

const downloadBtn = document.getElementById("downloadBtn");

downloadBtn.addEventListener("click", async () => {
    try {
        const docRef = doc(db, "stats", "main", "downloads");

        await updateDoc(docRef, {
            count: increment(1)
        });

        console.log("Download recorded.");
    } catch (err) {
        console.error("Error recording download:", err);
    }
});
