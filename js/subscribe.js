// js/subscribe.js
import { db } from "./firebase-init.js";
import { collection, addDoc, Timestamp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-firestore.js";

const subscribeForm = document.getElementById("subscribeForm");

if (subscribeForm) {
    subscribeForm.addEventListener("submit", async (e) => {
        e.preventDefault();

        const email = document.getElementById("email").value.trim();

        if (!email) {
            alert("Please enter a valid email.");
            return;
        }

        try {
            await addDoc(collection(db, "subscribers"), {
                email,
                timestamp: Timestamp.now()
            });
            alert("Subscribed! You will only receive emails about Android releases and updates.");
            subscribeForm.reset();
        } catch (error) {
            console.error("Error subscribing:", error);
            alert("There was an error subscribing. Please try again.");
        }
    });
}
