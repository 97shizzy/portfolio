document.querySelector(".cartin").addEventListener("click", function() {
    let content = document.querySelector(".cartis");
    if (content.style.display === "none" || content.style.display === "") {
        content.style.display = "block";
        
    } else {
        content.style.display = "none";
        
    }
});
