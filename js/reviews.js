import { db } from "./firebase-init.js";
import {
    collection,
    addDoc,
    getDocs,
    Timestamp
} from "https://www.gstatic.com/firebasejs/10.4.0/firebase-firestore.js";

const reviewsContainer = document.getElementById("reviewsContainer");
const form = document.getElementById("reviewForm");

async function loadReviews() {
    reviewsContainer.innerHTML = "";

    const snapshot = await getDocs(collection(db, "reviews"));
    snapshot.forEach(docSnap => {
        const r = docSnap.data();
        const div = document.createElement("div");
        div.className = "review";
        div.innerHTML = `<strong>${r.name}</strong> (${r.rating}★)<br>${r.comment}`;
        reviewsContainer.prepend(div);
    });
}

loadReviews();

form.addEventListener("submit", async e => {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const rating = document.getElementById("rating").value;
    const comment = document.getElementById("comment").value.trim();

    await addDoc(collection(db, "reviews"), {
        name, rating, comment, timestamp: Timestamp.now()
    });

    form.reset();
    loadReviews();
});
