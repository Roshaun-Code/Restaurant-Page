const createSection = (text) => {
    const container = document.querySelector("#container")
    const div = document.createElement("div")
    div.innerHTML = text
    container.appendChild(div)
}

function log(){
    console.log("Test")
}

export default createSection;