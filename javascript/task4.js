document.addEventListener("DOMContentLoaded", function () {
    function searchFruit() {
        let searchValue = document.getElementById("search").value.toLowerCase();
        let cards = document.querySelectorAll(".subcontainer1 .card1, .subcontainer1 .card2, .subcontainer1 .card3, .subcontainer2 .card4, .subcontainer2 .card5, .subcontainer2 .card6");
        
        cards.forEach(card => {
            let fruitName = card.querySelector("b").textContent.toLowerCase();
            if (fruitName.includes(searchValue)) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    }
    
    document.querySelector(".spacebar button").addEventListener("click", searchFruit);
});
