document.querySelector(".ken").addEventListener("click", function() {
    let content = document.querySelector(".kens");
    if (content.style.display === "none" || content.style.display === "") {
        content.style.display = "block";
        
    } else {
        content.style.display = "none";
        
    }
});
