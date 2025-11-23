// js/downloads.js 

// Make sure you import the necessary functions
import { doc, updateDoc, increment } from 'firebase/firestore'; 
// Assuming `db` is your initialized Firestore instance from firebase-init.js

document.addEventListener('DOMContentLoaded', () => {
    const downloadBtn = document.getElementById('downloadBtn');

    if (downloadBtn) {
        downloadBtn.addEventListener('click', async () => {
            try {
                // 1. Reference the document: /stats/main
                const counterRef = doc(db, "stats", "main");

                // 2. Use the atomic increment function on the downloads field
                await updateDoc(counterRef, {
                    downloads: increment(1)
                });
                
                console.log("Download counter successfully incremented.");

            } catch (error) {
                console.error("Error incrementing download counter:", error);
            }
        });
    }
});
