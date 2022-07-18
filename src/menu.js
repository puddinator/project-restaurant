import './styles.css';
import Burger1 from '../src/images/burger1.jpg';
import Burger2 from '../src/images/burger2.jpg';
import Burger3 from '../src/images/burger.jpg';

export default function loadMenu() {
    const container = document.createElement("div");
    container.classList.add("menu-container");

    const menu = document.createElement("div");
    menu.classList.add("menu");
    menu.appendChild(
      createMenuItem(
        Burger1,
        "Totally Radish Burger",
        "Comes with Radish"
      )
    );
    menu.appendChild(
      createMenuItem(
        Burger2,
        "The Garden of E-dumb Burger",
        "Served with Crapple"
      )
    );
    menu.appendChild(
      createMenuItem(
        Burger3,
        "Flying Burger",
        "Fly!"
      )
    );

    container.appendChild(menu);
    return container;
}

function createMenuItem(image, name, description) {
    const menuItem = document.createElement("div");
    menuItem.classList.add("menu-item");
  
    const foodName = document.createElement("h2");
    foodName.textContent = name;
  
    const foodDescription = document.createElement("p");
    foodDescription.textContent = description;
  
    const foodImage = document.createElement("img");
    foodImage.src = image;
    foodImage.alt = `${name}`;
  
    menuItem.appendChild(foodImage);
    menuItem.appendChild(foodName);
    menuItem.appendChild(foodDescription);
  
    return menuItem;
  }