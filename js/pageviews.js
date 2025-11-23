// js/pageviews.js
import { db } from "./firebase-init.js";
import {
    doc,
    updateDoc,
    increment
} from "https://www.gstatic.com/firebasejs/10.4.0/firebase-firestore.js";

async function recordPageView() {
    try {
        const docRef = doc(db, "stats/main/pageViews");

        await updateDoc(docRef, {
            count: increment(1)
        });

        console.log("Page view recorded.");
    } catch (err) {
        console.error("Error recording page view:", err);
    }
}

recordPageView();
