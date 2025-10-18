// subscribe.js
import { getFirestore, doc, updateDoc, increment } from "firebase/firestore";
import { getApp } from "firebase/app";

const app = getApp();
const db = getFirestore(app);

const subscribeForm = document.getElementById("subscribeForm");

subscribeForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value;

    try {
        // You can optionally store email in a separate collection
        // For now, we just increment subscriber count
        const docRef = doc(db, "counters", "subscribers");
        await updateDoc(docRef, {
            count: increment(1)
        });
        console.log("Subscriber recorded."); // hidden from page
        subscribeForm.reset();
    } catch (err) {
        console.error("Error recording subscriber:", err);
    }
});
