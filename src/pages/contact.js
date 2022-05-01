const contactLoad = function(){
    const content = document.querySelector("#content")
    const container = document.createElement("div")
    container.classList.add("container")
    const contactInfo = document.createElement("div")
    contactInfo.classList.add("contact-info")

    const title = document.createElement("h1")
    title.classList.add("contact-title")
    title.innerText = "Contact"
    content.appendChild(container)
    container.appendChild(title)
    container.appendChild(contactInfo)
}

export default contactLoad;