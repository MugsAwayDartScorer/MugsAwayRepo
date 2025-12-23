// js/subscribe.js
import { db } from "./firebase-init.js";
import {
    collection,
    addDoc,
    Timestamp
} from "https://www.gstatic.com/firebasejs/10.4.0/firebase-firestore.js";

const subscribeForm = document.getElementById("subscribeForm");

if (subscribeForm) {
    subscribeForm.addEventListener("submit", async (e) => {
        e.preventDefault();

        const email = document.getElementById("email").value.trim();

        await addDoc(collection(db, "subscribers"), {
            email,
            timestamp: Timestamp.now()
        });
        if (confirm("Do you really want to unsubscribe?")) {
    unsubscribe(email);
} else {
    document.getElementById("status").innerText = "Unsubscribe cancelled.";
}


        subscribeForm.reset();
        alert("Subscribed!");
    });
}

