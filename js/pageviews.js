// js/pageviews.js 

// FIX: Use the full CDN path for all Firestore modular imports
import { doc, updateDoc, increment } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-firestore.js";
// Import your initialized database instance
import { db } from "./firebase-init.js"; 

const incrementPageView = async () => {
    try {
        // Reference the document specified in your security rules: /stats/main
        const counterRef = doc(db, "stats", "main"); 

        // FIX: Use the ATOMIC increment function to prevent lost updates
        await updateDoc(counterRef, {
            pageViews: increment(1) 
        });
        
        console.log("Page view counter successfully incremented.");

    } catch (error) {
        // You'll see errors here if the document path is wrong or the network fails
        console.error("Error incrementing page view counter:", error);
    }
};

// Run the function immediately when the script loads
incrementPageView();
