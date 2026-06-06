// This is the default page (home page) to be generated
import "./styles.css";
import { renderMenu } from "./menu.js";

// THIS IS HOME RENDER
// TODO: Change to a different Bg img
import homeBg from "./img/swords.jpg";

const headerHomeBtn = document.querySelector(".toHome");
headerHomeBtn.addEventListener('click', (event) => {
  window.location.reload();
})



const homeBtn = document.querySelector(".home-btn");
homeBtn.addEventListener('click', (event) => {
  event.preventDefault();

  console.log("home btn clicked. Rendering home now!");
  renderCredits();
});

function clearGenerated() {
  const contents = document.getElementById('contents');
  Array.from(contents.children).forEach(child => {
    if (!child.matches('nav')) child.remove();
  });
}

function renderCredits() {
  clearGenerated();
  document.body.style.backgroundImage = `url(${homeBg})`;
  document.body.style.backgroundSize = 'cover';
  document.querySelector(".home-btn").style.visibility = 'hidden';
  document.querySelector(".menu-btn").style.visibility = 'hidden';


  const creditBox = document.createElement('div');
  creditBox.classList.add('credit-box');


  const para = document.createElement('p');
  para.classList.add("creditsPara");
  para.textContent = "ME and images from the internet";

  creditBox.appendChild(para);

  const contents = document.getElementById('contents');
  contents.appendChild(creditBox);

}


// THIS IS MENU RENDER

let curImg = 1;

const menuBtn = document.querySelector('.menu-btn');
menuBtn.addEventListener('click', (event) => {
  event.preventDefault();

  renderMenu(curImg++);

  // add a img counter
  if (curImg === 4) {
    curImg = 1;
  };

});



