let circles = document.querySelectorAll(".circle");

circles.forEach(function (circle) {
    circle.addEventListener("click", function () {
        let existingImage = circle.querySelector("img.rendered-image");

        if (existingImage) {
            circle.removeChild(existingImage);
        } else {
            let img = document.createElement("img");
            img.src = "image/tick mark.jpeg";
            img.alt = "Description of the image";
            img.classList.add("rendered-image");
            circle.appendChild(img);
        }
    });
});

let rectangle3 = document.querySelector(".rectangle3");
let taskInputs = document.querySelectorAll(".goal-input");
let statusMessage = document.getElementById("statusMessage"); 


function updateScrollbarProgress() {
    let filledInputs = 0;

   
    taskInputs.forEach(input => {
        if (input.value.trim() !== "") {
            filledInputs++;
        }
    });

  
    const progress = (filledInputs / taskInputs.length) * 100;

  
     rectangle3.style.setProperty("--progress", `${progress}%`)
    
   
  
    if (filledInputs === taskInputs.length) {
        statusMessage.innerHTML = "You have successfully completed all the tasks!";
        statusMessage.style.color = "green"; 
    } else {
        statusMessage.innerHTML = "Please set all the 3 goals!";
        statusMessage.style.color = "#FF5151"; 
    }
}

// Attach event listeners to inputs
taskInputs.forEach(input => {
    input.addEventListener("input", updateScrollbarProgress);
});
