// js/pageviews.js (CORRECT Atomic Approach)

import { doc, updateDoc, increment } from 'firebase/firestore'; 
// Assuming you import the `db` object from firebase-init.js

const incrementPageView = async () => {
    try {
        // 1. Define the reference to the document holding the counter
        const counterRef = doc(db, "statistics", "websiteStats");

        // 2. Use FieldValue.increment(1) to atomically increase the count by 1
        await updateDoc(counterRef, {
            pageViews: increment(1) 
        });

    } catch (error) {
        console.error("Error incrementing page view counter:", error);
    }
};

// Run the function immediately when the script loads
incrementPageView();
