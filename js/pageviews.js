// js/pageviews.js 

// Make sure you import the necessary functions
import { doc, updateDoc, increment } from 'firebase/firestore'; 
// Assuming `db` is your initialized Firestore instance from firebase-init.js

const incrementPageView = async () => {
    try {
        // 1. Reference the document: /stats/main
        const counterRef = doc(db, "stats", "main"); 

        // 2. Use the atomic increment function on the pageViews field
        await updateDoc(counterRef, {
            pageViews: increment(1) 
        });
        
        console.log("Page view counter successfully incremented.");

    } catch (error) {
        console.error("Error incrementing page view counter:", error);
    }
};

incrementPageView();
