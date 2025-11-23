import { doc, updateDoc, increment } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-firestore.js";
import { db } from "./firebase-init.js";

const incrementPageView = async () => {
    try {
        // Reference the document specified in your security rules: /stats/main
        const counterRef = doc(db, "stats", "main"); 

        await updateDoc(counterRef, {
            pageViews: increment(1) // <-- THIS IS THE ATOMIC FIX
        });
        
    } catch (error) {
        console.error("Error incrementing page view counter:", error);
    }
};

incrementPageView();
