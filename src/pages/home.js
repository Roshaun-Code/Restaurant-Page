const home = function(){
    const content = document.querySelector("#content")
    const container = document.createElement("div")
    container.classList.add("container")

    // homeContainer.setAttribute("id","home-container")
    // homeContainer.classList.add("container")
    // homeContainer.classList.add("active")

    //body stuff
    const body = document.createElement("div")
    const img = document.createElement("img")
    const slogan = document.createElement("p")
    const openingHours = document.createElement("div")
    const openingText = document.createElement("h1")
    const openingElement = document.createElement("ul")
    const openingItem1 = document.createElement("li")
    const openingItem2 = document.createElement("li")
    const openingItem3 = document.createElement("li")
    const openingItem4 = document.createElement("li")
    const openingItem5 = document.createElement("li")

    body.classList.add("body")
    img.classList.add("image")
    slogan.classList.add("slogan")
    openingHours.classList.add("opening-hours")
    openingText.classList.add("opening-text")
    openingElement.classList.add("opening-element")
    openingItem1.classList.add("opening-item")
    openingItem2.classList.add("opening-item")
    openingItem3.classList.add("opening-item")
    openingItem4.classList.add("opening-item")
    openingItem5.classList.add("opening-item")

    slogan.innerText = "Come on down to Divine Taste! Try our amazing food!"
    openingText.innerText = "We are open on these days!"
    openingItem1.innerHTML = "Monday: 8am - 4pm" 
    openingItem2.innerHTML = "Tuesday: 8am - 4pm"
    openingItem3.innerHTML = "Wednesday: 8am - 4pm" 
    openingItem4.innerHTML = "Thursday: 8am - 4pm" 
    openingItem5.innerHTML = "Friday: 8am - 4pm" 

    content.appendChild(container)
    container.appendChild(slogan)
    container.appendChild(body)
    body.append(img, openingHours)
    openingHours.appendChild(openingElement)
    openingElement.append(openingItem1, openingItem2, openingItem3, openingItem4, openingItem5)


}

export default home;