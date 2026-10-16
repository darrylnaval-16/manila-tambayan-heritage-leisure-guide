
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
   5. RATING LABEL DECISION
======================================== */

// Sample rating for the National Museum.
// Change this number to test the other labels.
const placeRating = 4.5;

let ratingLabel;

if (placeRating >= 4) {
    ratingLabel = "Highly recommended";
} else if (placeRating >= 2.5) {
    ratingLabel = "Worth a visit";
} else {
    ratingLabel = "Only if you're nearby";
}

const ratingValueElement = document.getElementById("ratingValue");
const ratingLabelElement = document.getElementById("ratingLabel");

if (ratingValueElement) {
    ratingValueElement.textContent = `${placeRating} out of 5`;
}

if (ratingLabelElement) {
    ratingLabelElement.textContent = ratingLabel;
}


/* ========================================
   6. BUDGET CHECK DECISION
======================================== */

// Sample guide settings for this activity.
// Price level 0 means free; 1 means budget-friendly.
// isPlaceOpen is a sample value, not live opening-hour data.
const priceLevel = 0;
const isPlaceOpen = true;

const isBudgetFriendly = priceLevel <= 1;

const budgetMessage =
    isBudgetFriendly && isPlaceOpen === true
        ? "Good option right now"
        : "Maybe another time";

const budgetValueElement = document.getElementById("budgetValue");

if (budgetValueElement) {
    budgetValueElement.textContent = budgetMessage;
}


/* ========================================
   7. DISTANCE NOTE DECISION
======================================== */

// Sample value for this activity.
const isWithinWalkingDistance = true;

const distanceMessage =
    isWithinWalkingDistance === true
        ? "Walking distance"
        : "Better to commute";

const distanceValueElement = document.getElementById("distanceValue");

if (distanceValueElement) {
    distanceValueElement.textContent = distanceMessage;
}


/* ========================================
   8. CONTACT FORM
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
   9. SUGGEST A PLACE FORM
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
   10. CONSOLE MESSAGES
======================================== */

console.log("Guide Name:", guideName);
console.log("Current Year:", currentYear);
console.log("Places Reviewed:", runningCount);
console.log("Place Rating:", placeRating);
console.log("Rating Decision:", ratingLabel);
console.log("Budget Decision:", budgetMessage);
console.log("Distance Decision:", distanceMessage);
