import menuBg from "./img/homebg.jpg";
import css from "./styles.css";

// IMPORT MENU IMGS
import menu1 from "./img/page1.png";
import menu2 from "./img/page2.png";
import menu3 from "./img/page3.png";
  

const contents = document.getElementById('contents');
export function renderMenu(curImg) {
  document.body.style.backgroundImage = `url(${menuBg})`;
  document.body.style.backgroundSize = "cover";

  document.querySelector(".home-btn").style.visibility = "hidden";
  document.querySelector(".menu-btn").style.visibility = "hidden";

  let nextItemBtn = document.querySelector(".nextItemBtn");

  if (!nextItemBtn) {
    nextItemBtn = document.createElement('button');
    nextItemBtn.classList.add("nextItemBtn");
    nextItemBtn.textContent = "Next";
    contents.appendChild(nextItemBtn);
  }

  // ADD MENU 1 here; curImgNum ++?
  renderImg(curImg);

  nextItemBtn.onclick = (event) => {
    event.preventDefault();

    curImg = (curImg % 3) + 1;
    renderImg(curImg);
  };
}

function renderImg(curImgNum) {
  let imgNum = curImgNum;
  let pageRender;
  if(imgNum === 1){
    pageRender = menu1;
  } else if(imgNum === 2){
    pageRender = menu2;
  } else if (imgNum === 3) {
    pageRender = menu3;
  } else {
    imgNum= 1;
    pageRender = menu1;
  }

  const existingImg = document.querySelector(".menu-img");
  if (existingImg) {
    existingImg.src = pageRender;
    return;
  }

  // create flex box
  const page = document.createElement('div');
  const img = document.createElement('img');
  page.classList.add("menu-box");
  img.classList.add("menu-img");
  img.src = pageRender;
  page.appendChild(img);

  // add to the contents
  contents.appendChild(page);


}
