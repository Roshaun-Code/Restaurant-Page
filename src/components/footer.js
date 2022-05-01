const footer = function(){
    const content =  document.querySelector("#content")
    const footer = document.createElement("div")
    footer.classList.add("footer")
    footer.innerText = "made by roshaun-code"
    content.appendChild(footer)
}

export default footer;