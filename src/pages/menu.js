const menuLoad = function(){
    const content = document.querySelector("#content")
    const container = document.createElement("div")
    container.classList.add("container")

    const title = document.createElement("h1")
    title.innerText = "Menu"
    content.appendChild(container)
    container.appendChild(title)
}

export default menuLoad;