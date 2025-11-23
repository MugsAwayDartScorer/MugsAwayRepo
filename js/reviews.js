// js/reviews.js
import { db } from "./firebase-init.js";
import {
    collection,
    addDoc,
    Timestamp,
    getDocs
} from "https://www.gstatic.com/firebasejs/10.4.0/firebase-firestore.js";

/* ----- LOAD REVIEWS ----- */
export async function loadReviews() {
    const container = document.getElementById("reviewsContainer");
    if (!container) return;

    container.innerHTML = "";

    const snapshot = await getDocs(collection(db, "reviews"));

    snapshot.forEach(doc => {
        const r = doc.data();
        const div = document.createElement("div");
        div.className = "review";
        div.innerHTML = `<strong>${r.name}</strong> (${r.rating}★)<br>${r.comment}`;
        container.prepend(div);
    });
}

/* ----- SUBMIT REVIEW ----- */
const form = document.getElementById("reviewForm");

if (form) {
    form.addEventListener("submit", async (e) => {
        e.preventDefault();

        const name = document.getElementById("name").value.trim();
        const rating = document.getElementById("rating").value;
        const comment = document.getElementById("comment").value.trim();

        await addDoc(collection(db, "reviews"), {
            name,
            rating,
            comment,
            timestamp: Timestamp.now()
        });

        form.reset();
        loadReviews();
    });
}

/* auto-load on page start */
loadReviews();
