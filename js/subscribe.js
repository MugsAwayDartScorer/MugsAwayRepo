import { db } from "./firebase-init.js";
import { collection, addDoc, Timestamp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-firestore.js";

const subscribeForm = document.getElementById("subscribeForm");

subscribeForm.addEventListener("submit", async e => {
    e.preventDefault();

    const email = document.getElementById("email").value.trim();

    await addDoc(collection(db, "subscriptions"), {
        email,
        timestamp: Timestamp.now()
    });

    subscribeForm.reset();
    alert("Subscribed!");
});
