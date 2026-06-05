// This is the default page (home page) to be generated
import "./styles.css";

// TODO: Change to a different Bg img
import homeBg from "./img/homebg.jpg";

const headerHomeBtn = document.querySelector(".toHome");
headerHomeBtn.addEventListener('click', (event) => {
    window.location.reload();
})

const homeBtn = document.querySelector(".home-btn");
homeBtn.addEventListener('click', (event) => {
    console.log("home btn clicked. Rendering home now!");
    renderHome();
});

function renderHome() {

    document.body.style.backgroundImage = `url(${homeBg})`;
    document.body.style.backgroundSize = 'cover';
    document.querySelector(".home-btn").style.visibility = 'hidden';
    document.querySelector(".menu-btn").style.visibility = 'hidden';

    const para = document.createElement('p');
    para.textContent = "There is abosolutely nothing here for now"
}


