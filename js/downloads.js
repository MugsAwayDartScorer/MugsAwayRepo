// js/downloads.js (CORRECT Atomic Approach)

import { doc, updateDoc, increment } from 'firebase/firestore';
// Assuming you import the `db` object from firebase-init.js

document.addEventListener('DOMContentLoaded', () => {
    const downloadBtn = document.getElementById('downloadBtn');

    if (downloadBtn) {
        downloadBtn.addEventListener('click', async () => {
            try {
                // 1. Define the reference to the document holding the counter
                const counterRef = doc(db, "statistics", "websiteStats");

                // 2. Use FieldValue.increment(1) for the atomic update
                await updateDoc(counterRef, {
                    downloads: increment(1)
                });
                
                // Optional: You can add logic here to display the new total count if needed

            } catch (error) {
                console.error("Error incrementing download counter:", error);
            }
        });
    }
});
