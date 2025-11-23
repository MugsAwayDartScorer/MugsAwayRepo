// js/pageviews.js (CORRECT Atomic Transaction for RTDB)

import { ref, runTransaction } from 'firebase/database';
// Assuming you import the `db` (Realtime Database instance) 
// from your firebase-init.js file.

const PAGE_VIEWS_PATH = 'stats/main/pageViews'; // Adjust this path if necessary

const incrementPageView = async () => {
    try {
        // 1. Get a reference to the specific counter path
        const counterRef = ref(db, PAGE_VIEWS_PATH);

        // 2. Run the transaction
        await runTransaction(counterRef, (currentCount) => {
            // This function is executed multiple times until the transaction succeeds.
            
            // Handle the case where the counter might be null/non-existent
            let newValue = (currentCount || 0) + 1;
            
            // Return the new value for the database to write
            return newValue;
        });

    } catch (error) {
        // If the transaction failed, log the error (e.g., due to security rules)
        console.error("Transaction failed for page views:", error);
    }
};

// Execute the function on page load
incrementPageView();
