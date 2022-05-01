const contactLoad = function(){
    const content = document.querySelector("#content")
    const container = document.createElement("div")
    const contactInfo = document.createElement("div")
    const contact = document.createElement("div")
    const title = document.createElement("h1")
    const telephone = document.createElement("p")
    const email = document.createElement("p")
    container.classList.add("container")
    contactInfo.classList.add("contact-info")
    contact.classList.add("contact-section")
    title.classList.add("contact-title")
    title.innerText = "Contact"
    telephone.innerText = "TELEPHONE: (999) 555-1234"
    email.innerText = "EMAIL: divinetaste@gmail.com"

    content.appendChild(container)
    container.appendChild(title)
    container.appendChild(contactInfo)
    contactInfo.appendChild(contact)
    contact.append(telephone, email)
}

export default contactLoad;