import burgerimg from '../pictures/burger.png'
import pizzaimg from '../pictures/pizza.png'
import saladimg from '../pictures/salad.png'
import cakeimg from '../pictures/cake.png'

const menuLoad = function(){
    const content = document.querySelector("#content")
    const container = document.createElement("div")
    const menu = document.createElement("div")
    const menuContainer = document.createElement("div")
    const burger = document.createElement("div")
    const pizza = document.createElement("div")
    const salad = document.createElement("div")
    const cake = document.createElement("div")
    const burgerImg = document.createElement("img")
    const pizzaImg = document.createElement("img")
    const saladImg = document.createElement("img")
    const cakeImg = document.createElement("img")
    container.classList.add("container")
    menu.classList.add("menu")
    menuContainer.classList.add("menu-container")
    burger.classList.add("burger")
    pizza.classList.add("pizza")
    salad.classList.add("salad")
    cake.classList.add("cake")
    burger.classList.add("menu-item")
    pizza.classList.add("menu-item")
    salad.classList.add("menu-item")
    cake.classList.add("menu-item")
    burgerImg.src = burgerimg
    pizzaImg.src = pizzaimg
    saladImg.src = saladimg
    cakeImg.src = cakeimg
    burger.innerText = "Burger"
    pizza.innerText = "Pizza"
    salad.innerText = "Salad"
    cake.innerText = "Cake"

    const title = document.createElement("h1")
    title.classList.add("menu-title")
    title.innerText = "Menu"
    content.appendChild(container)
    container.appendChild(title)
    container.appendChild(menu)
    menu.appendChild(menuContainer)
    menuContainer.append(burger, pizza, salad, cake)
    burger.append(burgerImg)
    pizza.append(pizzaImg)
    salad.append(saladImg)
    cake.append(cakeImg)
}

export default menuLoad;