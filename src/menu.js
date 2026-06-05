import menuBg from "./img/homebg.jpg";
import css from "./styles.css";

export function renderMenu() {
  document.body.style.backgroundImage = `url(${menuBg})`;
  document.body.style.backgroundSize = "cover";

  document.querySelector(".home-btn").style.visibility = "hidden";
  document.querySelector(".menu-btn").style.visibility = "hidden";

  const nextItemBtn = document.createElement('button');
  nextItemBtn.classList.add("nextItemBtn");
  nextItemBtn.textContent = "Next";


  const contents = document.getElementById('contents');
  contents.appendChild(nextItemBtn);
}

function renderImg(curImgNum) {
  
}
