document.querySelector(".hollien").addEventListener("click", function() {
    let content = document.querySelector(".des2");
    if (content.style.display === "none" || content.style.display === "") {
        content.style.display = "block";
        
    } else {
        content.style.display = "none";
        
    }
});
