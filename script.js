// Select HTML element
let container = document.querySelector(".container");
let btn = document.querySelector(".start__btn");
let scoreContainer = document.querySelector(".score");
let timeContainer = document.querySelector(".time");

// Interval variables
let Targetinterval;
let PowerUpinterval;

// Event listener for clicking the start button
btn.addEventListener("click", () => {
  let score = 0;
  let time = 11;
  btn.innerHTML = "Restart";
  container.innerHTML = "";

  // Power-up interval every 1 seconds
  Targetinterval = setInterval(() => {
    // Create target
    let target = document.createElement("img");
    target.id = "target";
    target.src = "Images/zombie.png";
    container.appendChild(target);

    // Condition to include target into the size of the container
    if (window.innerWidth >= 768) {
      target.style.top = Math.random() * (500 - target.offsetHeight) + "px";
      target.style.left = Math.random() * (600 - target.offsetWidth) + "px";
    } else {
      target.style.top = Math.random() * (300 - target.offsetHeight) + "px";
      target.style.left = Math.random() * (300 - target.offsetWidth) + "px";
    }

    // Delete target after 2 sec
    setTimeout(() => {
      target.remove(); // Remove target after being clicked
    }, 2000);

    // Event listeners for clicking the target
    target.addEventListener("click", (e) => {
      if (e.target.id === "target") {
        score += 1;
        e.target.src = "Images/tombstone.png";
      }
    });

    time -= 1;

    // Display score and time
    scoreContainer.innerHTML = `Score: ${score}`;
    timeContainer.innerHTML = `Time: ${time}`;

    // End game when time is over
    if (time === 0) {
      clearInterval(Targetinterval);
      clearInterval(PowerUpinterval); // Arrêtez également l'intervalle PowerUpinterval
      container.innerHTML = `Game over. </br> Your score is ${score}. `;
    }
  }, 1000);

  // Power-up interval every 5 seconds
  PowerUpinterval = setInterval(() => {
    let powerUp = document.createElement("img");
    powerUp.id = "target";
    powerUp.src = "Images/clock.png";
    container.appendChild(powerUp);

    // Condition to include power up into the size of the container
    if (container.innerWidth > 768) {
      powerUp.style.top = Math.random() * (500 - powerUp.offsetHeight) + "px";
      powerUp.style.left = Math.random() * (600 - powerUp.offsetWidth) + "px";
    } else {
      powerUp.style.top = Math.random() * (300 - powerUp.offsetHeight) + "px";
      powerUp.style.left = Math.random() * (300 - powerUp.offsetWidth) + "px";
    }

    // Delete power up after 1.5 sec
    setTimeout(() => {
      powerUp.remove();
    }, 2000);

    powerUp.addEventListener("click", (e) => {
      if (e.target.id === "target") {
        time += 3; // Increase time by 3 seconds when power-up is clicked
        e.target.src = "Images/3seconds.png";
        e.target.style.opacity = "0";
        setTimeout(() => {
          e.target.style.transition = "opacity 0.5s";
          e.target.style.opacity = "1";
        }, 200);
      }
    });

    // End game when time is over
    if (time === 0) {
      clearInterval(PowerUpinterval);
    }
  }, 5000);
});
