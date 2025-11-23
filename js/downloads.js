// js/downloads.js 

// FIX: Use the full CDN path for all Firestore modular imports
import { doc, updateDoc, increment } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-firestore.js";
// Import your initialized database instance
import { db } from "./firebase-init.js";

document.addEventListener('DOMContentLoaded', () => {
    const downloadBtn = document.getElementById('downloadBtn');

    if (downloadBtn) {
        downloadBtn.addEventListener('click', async () => {
            try {
                // Reference the document specified in your security rules: /stats/main
                const counterRef = doc(db, "stats", "main");

                // FIX: Use the ATOMIC increment function to prevent lost updates
                await updateDoc(counterRef, {
                    downloads: increment(1)
                });
                
                console.log("Download counter successfully incremented.");

            } catch (error) {
                // You'll see errors here if the document path is wrong or the network fails
                console.error("Error incrementing download counter:", error);
            }
        });
    }
});
