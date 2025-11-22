import { db } from "./firebase-init.js";
import { doc, updateDoc, increment } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-firestore.js";

(async () => {
    try {
        const ref = doc(db, "stats", "main", "pageViews");
        await updateDoc(ref, { count: increment(1) });
        console.log("Page view recorded");
    } catch (err) {
        console.error("Pageview error:", err);
    }
})();
