const btn = document.querySelector(".form-button");
const burger = document.querySelector(".burger");

function xPositionHandler() {
  return Math.round(Math.random() * window.innerWidth);
}

function yPositionHandler() {
  return Math.round(Math.random() * window.innerHeight);
}

let counter = 0;

function eventHandler() {
  btn.style.position = "absolute";
  btn.style.left = xPositionHandler() - 250 / 2 + "px";
  btn.style.top = yPositionHandler() - 90 / 2 + "px";
  counter++;

  if (counter === 5) {
    btn.removeEventListener("mouseover", eventHandler);
    btn.disabled = true;
    alert("Ooops!");
  }
}

if (btn !== null) {
  btn.addEventListener("mouseover", eventHandler);
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    alert("You did it. Congrats! ;)");
    btn.disabled = true;
    btn.removeEventListener("mouseover", eventHandler);
  });
}

let clicked = false;

burger.addEventListener("click", () => {
  clicked = true;

  if (clicked) {
    document.body.classList.add("stop-scrolling");
  }

  const overlay = document.createElement("div");
  overlay.classList.add("overlay");
  document.body.appendChild(overlay);
  const popUp = document.createElement("div");
  popUp.classname = "pop-up";

  popUp.innerHTML = `
    <ul>
      <li class="pop-up-link">
        <a href="./../index.html">Home</a> 
      </li>
      <li class="pop-up-link">
        <a href="./../pages/about.html">About</a>
      </li>
      <li class="pop-up-link">
        <a href="./../pages/contact.html">Contact</a>
      </li>
      <li class="pop-up-link">
        <a href="./../pages/images.html">Gallery</a>
      </li>
      </ul> 
      
      <a href="https://github.com/drunkalien" class="pop-gh-link"></a> 
  `;

  const closeBtn = document.createElement("div");
  closeBtn.classList.add("close-btn");

  closeBtn.addEventListener("click", () => {
    document.body.removeChild(overlay);
    document.body.classList.remove("stop-scrolling");
  });

  overlay.appendChild(closeBtn);
  overlay.appendChild(popUp);
});
