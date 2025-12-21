
import { analytics } from "./firebase-init.js";
import { logEvent } from "firebase/analytics";

const downloadBtn = document.getElementById("downloadBtn");

if (downloadBtn) {
    downloadBtn.addEventListener("click", () => {

        logEvent(analytics, "download", {
            file_name: "Mugs Away Windows.zip",
            platform: "windows"
        });

        // Give Firebase time, THEN download
        setTimeout(() => {
            window.location.href = "assets/Mugs Away Windows.zip";
        }, 300);
    });
}
