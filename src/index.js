import './styles.css';
import loadHome from "./home.js";
import loadMenu from "./menu.js";

function createHeader(content) {
    const header = document.createElement("header");

    const hero = document.createElement("div");
    hero.classList.add("hero");
    hero.textContent = "Bob's Burgers";

    header.appendChild(hero);
    header.appendChild(createNav(content));

    return header;
}

function createNav() {
    const nav = document.createElement("div");
    nav.classList.add('nav-items');

    const navOne = document.createElement("div");
    navOne.textContent = 'Home';
    navOne.classList.add('nav-item');
    navOne.addEventListener("click", (e) => {
        if (e.target.classList.contains("active")) return;
        navOne.classList.add('active');
        navTwo.classList.remove('active');
        content.removeChild(content.lastElementChild);
        content.appendChild(loadHome());
    });

    const navTwo = document.createElement("div");
    navTwo.textContent = 'Our Burgers';
    navTwo.classList.add('nav-item');
    navTwo.addEventListener("click", (e) => {
        if (e.target.classList.contains("active")) return;
        navTwo.classList.add('active');
        navOne.classList.remove('active');
        content.removeChild(content.lastElementChild);
        content.appendChild(loadMenu());
    });

    nav.appendChild(navOne);
    nav.appendChild(navTwo);
    return nav;
}

function createWebsite() {
    const content = document.getElementById("content");

    content.appendChild(createHeader(content));
    content.appendChild(loadHome());
}

createWebsite();