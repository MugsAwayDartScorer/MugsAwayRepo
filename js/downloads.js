// downloads.js
// Firebase imports
import { getFirestore, doc, updateDoc, increment, getDoc } from "firebase/firestore";
import { getApp } from "firebase/app";

const app = getApp();
const db = getFirestore(app);

const downloadBtn = document.getElementById("downloadBtn");

downloadBtn.addEventListener("click", async () => {
    try {
        const docRef = doc(db, "counters", "downloads");
        await updateDoc(docRef, {
            count: increment(1)
        });
        console.log("Download recorded."); // hidden from page
    } catch (err) {
        console.error("Error recording download:", err);
    }
});
