import { doc, updateDoc, increment } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-firestore.js";

document.addEventListener('DOMContentLoaded', () => {
    const downloadBtn = document.getElementById('downloadBtn');

    if (downloadBtn) {
        downloadBtn.addEventListener('click', async () => {
            try {
                // Reference the document specified in your security rules: /stats/main
                const counterRef = doc(db, "stats", "main");

                await updateDoc(counterRef, {
                    downloads: increment(1) // <-- THIS IS THE ATOMIC FIX
                });
                
            } catch (error) {
                console.error("Error incrementing download counter:", error);
            }
        });
    }
});

