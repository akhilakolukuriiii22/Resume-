const link = document.getElementById("myLink");
        link.addEventListener("mouseover", function() {
            link.style.color = "orange";
            link.style.textDecoration="underline";
            link.style.fontSize="28px";
        });
        link.addEventListener("mouseout", function() {
            link.style.color = "lightgreen";
            link.style.textDecoration="none";
            link.style.fontSize="25px";

        });
        link.addEventListener("click", function() {
            alert("welcome to Hackerrank!");
        });