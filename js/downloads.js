// js/downloads.js
import { db } from "./firebase-init.js";
import {
    doc,
    updateDoc,
    increment
} from "https://www.gstatic.com/firebasejs/10.4.0/firebase-firestore.js";

const downloadBtn = document.getElementById("downloadBtn");

if (downloadBtn) {
    downloadBtn.addEventListener("click", async () => {
        try {
            const docRef = doc(db, "stats,main,downloads");

            await updateDoc(docRef, {
                count: increment(1)
            });

            console.log("Download recorded.");
        } catch (err) {
            console.error("Error recording download:", err);
        }
    });
}



