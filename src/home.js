import './styles.css';
import Bob from '../src/images/Bob.webp';
import Burger from '../src/images/burger-gif.gif';

export default function loadHome() {
    const body = document.createElement("div");
    body.classList.add("welcome-container");

    const intro = document.createElement("div");
    intro.classList.add("intro");
    intro.textContent = "We sell burgers, come on in!";

    const bob = document.createElement("img");
    bob.classList.add("bob");
    bob.setAttribute('src', Bob);

    const featured = document.createElement("h4");
    featured.textContent = 'As featured in the Super Bowl commercial';

    body.appendChild(welcome());
    body.appendChild(intro);
    body.appendChild(bob);
    body.appendChild(featured);

    return body;
}

function welcome() {
    const welcome = document.createElement("welcome");
    welcome.classList.add("welcome");

    const burger = document.createElement("img");
    burger.classList.add("burger-gif");
    burger.setAttribute('src', Burger);

    const intro = document.createElement("h1");
    intro.textContent = "Welcome";

    welcome.appendChild(burger);
    welcome.appendChild(intro);
    welcome.appendChild(burger);

    return welcome;
}