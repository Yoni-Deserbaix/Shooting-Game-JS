// Select HTML element
let container = document.querySelector(".container");
let btn = document.querySelector(".start__btn");
let scoreContainer = document.querySelector(".score");
let timeContainer = document.querySelector(".time");

// Event listeners for clicking the button
btn.addEventListener("click", () => {
  let score = 0;
  let time = 16;
  btn.innerHTML = "Restart";
  container.innerHTML = "";

  let interval = setInterval(() => {
    // Create target
    let target = document.createElement("img");
    target.id = "target";
    target.src = "/Images/zombie.png";
    container.appendChild(target);

    // Condition to include target into the size of the container
    if (container.innerWidth > 768) {
      target.style.top = Math.random() * (500 - target.offsetHeight) + "px";
      target.style.left = Math.random() * (600 - target.offsetWidth) + "px";
    } else {
      target.style.top = Math.random() * (300 - target.offsetHeight) + "px";
      target.style.left = Math.random() * (250 - target.offsetWidth) + "px";
    }

    // Delete target after 2 sec
    setTimeout(() => {
      target.remove();
    }, 2000);

    // Event listeners for clicking the target
    target.addEventListener("click", (e) => {
      if (e.target.id === "target") {
        score += 1;
        e.target.src = "/Images/tombstone.png";
      }
    });
    time -= 1;

    // Display score and time
    scoreContainer.innerHTML = `Score: ${score}`;
    timeContainer.innerHTML = `Time: ${time}`;

    // End game when time is over
    if (time === 0) {
      clearInterval(interval);
      container.innerHTML = `Game over. </br> Your score is ${score}. `;
    }
  }, 1000);
});
