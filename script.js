
/* ========================================
   1. GUIDE VARIABLES
======================================== */

const guideName = "Manila Tambayan Heritage & Leisure Guide";
const currentYear = new Date().getFullYear();

let runningCount = 0;


/* ========================================
   2. DISPLAY GUIDE NAME
======================================== */

const guideNameElement = document.getElementById("guideName");

if (guideNameElement) {
    guideNameElement.textContent = guideName;
}


/* ========================================
   3. DYNAMIC COPYRIGHT
======================================== */

const copyrightElement = document.getElementById("copyright");

if (copyrightElement) {
    copyrightElement.textContent =
        `© ${currentYear} ${guideName}. Created by Darryl Naval.`;
}


/* ========================================
   4. COUNT PLACES
======================================== */

const placeCards = document.querySelectorAll(".place-card");

placeCards.forEach(function () {
    runningCount++;
});

const placeCountElement = document.getElementById("placeCount");

if (placeCountElement) {
    placeCountElement.textContent = runningCount;
}


/* ========================================
   5. CONTACT FORM
======================================== */

const contactForm = document.getElementById("contact-form");
const successMessage = document.getElementById("success-message");

if (contactForm && successMessage) {
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        successMessage.hidden = false;
        contactForm.reset();

        successMessage.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });
    });
}


/* ========================================
   6. SUGGEST A PLACE FORM
======================================== */

const suggestPlaceForm =
    document.getElementById("suggest-place-form");

const suggestSuccessMessage =
    document.getElementById("suggest-success-message");

if (suggestPlaceForm && suggestSuccessMessage) {
    suggestPlaceForm.addEventListener("submit", function (event) {
        event.preventDefault();

        suggestSuccessMessage.hidden = false;
        suggestPlaceForm.reset();

        suggestSuccessMessage.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });
    });
}


/* ========================================
   7. CONSOLE MESSAGES
======================================== */

console.log("Guide Name:", guideName);
console.log("Current Year:", currentYear);
console.log("Places Reviewed:", runningCount);
