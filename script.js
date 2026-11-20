const pages = document.querySelectorAll(".page"); //list of all pages 

let currentPage = 0;

function nextPage() {
    if (currentPage < pages.length - 1) { //not at the end page yet 
        pages[currentPage].classList.remove("visible"); //remove visibility of this page 
        currentPage++;
        pages[currentPage].classList.add("visible"); //make next page visible 
        updateButtons(); 
    }
}

function previousPage() { //same as before ^^, but decrement instead 
    if (currentPage > 0) {
        pages[currentPage].classList.remove("visible");
        currentPage--; 
        pages[currentPage].classList.add("visible");
        updateButtons();
    }
}

//determine which buttons should be displayed at any given moment
function updateButtons() {
    if (currentPage === 0) {
        document.getElementById("back-button").style.display = "none";
    } else {
        document.getElementById("back-button").style.display = "inline-block";
    }
    if (currentPage === pages.length - 1) {
        document.getElementById("next-button").style.display = "none";
    } else {
        document.getElementById("next-button").style.display = "inline-block";
    }
}

updateButtons();
