import { db } from "./firebase-init.js";
import { doc, updateDoc, increment } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-firestore.js";

const downloadBtn = document.getElementById("downloadBtn");

downloadBtn.addEventListener("click", async () => {
    try {
        const ref = doc(db, "stats", "main", "downloads");
        await updateDoc(ref, { count: increment(1) });
        console.log("Download recorded");
    } catch (err) {
        console.error("Download counter error:", err);
    }
});
