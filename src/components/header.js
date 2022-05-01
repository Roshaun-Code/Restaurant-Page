const header = function(){
    const content = document.querySelector("#content")

    const header = document.createElement("div")
    const pages = document.createElement("div")
    const homeButton = document.createElement("button")
    const contactButton = document.createElement("button")
    const menuButton = document.createElement("button")
    const restaurantName = document.createElement("h1")

    restaurantName.classList.add("name")
    header.classList.add("header")
    pages.classList.add("pages")
    homeButton.classList.add("buttons")
    homeButton.classList.add("active")
    contactButton.classList.add("buttons")
    menuButton.classList.add("buttons")
    homeButton.setAttribute("id","home")
    contactButton.setAttribute("id","contact")
    menuButton.setAttribute("id","menu")

    restaurantName.innerText = "Divine Taste"
    homeButton.innerText = "Home"
    contactButton.innerText = "Contact"
    menuButton.innerText = "Menu"

    content.appendChild(header)
    header.appendChild(pages)
    pages.append(homeButton, contactButton, menuButton)
    header.appendChild(restaurantName)

}

export default header;