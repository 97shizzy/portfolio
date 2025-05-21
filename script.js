document.addEventListener("DOMContentLoaded", function () {
    let checkBox = document.getElementById("myCheck");
    let mouseMoveHandler;
    
    checkBox.addEventListener("change", function () {
        if (this.checked) {
            mouseMoveHandler = function (e) {
                let trail = document.createElement("div");
                trail.classList.add("cursor-trail");
                document.body.appendChild(trail);
                
                trail.style.left = `${e.pageX}px`;
                trail.style.top = `${e.pageY}px`;

                setTimeout(() => {
                    trail.remove();
                }, 500);
            };
            document.addEventListener("mousemove", mouseMoveHandler);
        } else {
            
            document.removeEventListener("mousemove", mouseMoveHandler);
        }
    });
});

