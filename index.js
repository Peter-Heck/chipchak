"use strict"
// VARIABLES----------------------------------------------------------------------
sessionStorage.setItem("count", 1);

// div carousel for portfolio
let carousel = document.getElementById("portfolio-carousel")


// FUNCTIONS-----------------------------------------------------------------------

// function to go back an image when viewing the portfolio
function imageBack(event, count) {
    event.preventDefault();
    if (count == 1) {
        carousel.innerHTML = "<img src='images/MichaelChipchak-CompositionPortfolio/Page-3.jpg' alt='Page 3 of the portfolio for Michael Chipchak'>";
        sessionStorage.setItem("count", 3);

    } else if (count == 2) {
        carousel.innerHTML = '<img src="images/MichaelChipchak-CompositionPortfolio/Page-1.jpg" alt="Page 1 of the portfolio for Michael Chipchak">';
        sessionStorage.setItem("count", 1);

    } else if (count == 3) {
        carousel.innerHTML = '<img src="images/MichaelChipchak-CompositionPortfolio/Page-2.jpg" alt="Page 2 of the portfolio for Michael Chipchak">';
        sessionStorage.setItem("count", 2);

    } else {
        carousel.innerHTML = "<p>ERROR: PLEASE REFRESH PAGE</p>";
        sessionStorage.setItem("count", 1);
    }
}

// function to go forward an image when viewing the portfolio
function imageForward(event, count) {
    event.preventDefault();
    if (count == 1) {
        carousel.innerHTML = '<img src="images/MichaelChipchak-CompositionPortfolio/Page-2.jpg" alt="Page 2 of the portfolio for Michael Chipchak">';
        sessionStorage.setItem("count", 2);

    } else if (count == 2) {
        carousel.innerHTML = '<img src="images/MichaelChipchak-CompositionPortfolio/Page-3.jpg" alt="Page 3 of the portfolio for Michael Chipchak">';
        sessionStorage.setItem("count", 3);

    } else if (count == 3) {
        carousel.innerHTML = '<img src="images/MichaelChipchak-CompositionPortfolio/Page-1.jpg" alt="Page 1 of the portfolio for Michael Chipchak">';
        sessionStorage.setItem("count", 1);

    } else {
        carousel.innerHTML = "<p>ERROR: PLEASE REFRESH PAGE</p>";
        sessionStorage.setItem("count", 1);
    }
}



// EVENT LISTENERS-------------------------------------------------------------------

document.getElementById("backward").addEventListener("click", function () {imageBack(event, sessionStorage.getItem("count"));});
document.getElementById("forward").addEventListener("click", function () {imageForward(event, sessionStorage.getItem("count"));});