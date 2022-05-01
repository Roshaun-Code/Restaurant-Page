import './styles/home.css'
import home from './pages/home.js'
import contactLoad from './pages/contact'
import menuLoad from './pages/menu'
import header from './components/header'
import footer from './components/footer'
import setActive from './components/setactive'




header()
home()

const content = document.querySelector("#content")
const buttons = document.querySelectorAll(".buttons")
const homeButton = document.querySelector("#home")
const contactButton = document.querySelector("#contact")
const menuButton = document.querySelector("#menu")

function removeContainer(){
    const containers = document.querySelectorAll(".container")
    containers.forEach(container => {
        container.remove()
    })
}

function removeFooter(){
    const footers = document.querySelectorAll(".footer")
    footers.forEach(footer => {
        footer.remove()
    })
}


homeButton.addEventListener("click", () => {
    if (homeButton.classList.contains("active")) return
    setActive(homeButton)
    removeContainer()
    removeFooter()
    home()
    footer()

})

contactButton.addEventListener("click", () => {
    if (contactButton.classList.contains("active")) return
    setActive(contactButton)
    removeContainer()
    removeFooter()
    contactLoad()
    footer()
})

menuButton.addEventListener("click", () => {
    if (menuButton.classList.contains("active")) return
    setActive(menuButton)
    removeContainer()
    removeFooter()
    menuLoad()
    footer()
})



footer()


// homePage.addEventListener("click", (e) => {
//     if (e.target.classList.contains("active")) return
//     else {
//         buttons.forEach(button => {
//             if(button.classList.contains("active")){
//                 button.classList.remove("active")
//                 homeLoad()
//                 homeContainer.classList.add("active")
//             }
//         });
//     }
// })

// contactPage.addEventListener("click", (e) => {
//     if (e.target.classList.contains("active")) return
//     else {
//         buttons.forEach(button => {
//             if(button.classList.contains("active")){
//                 button.classList.remove("active")
//                 containers.forEach(container => {
//                     container.classList.remove("active")
//                 })
//                 contactLoad()
//                 const contactContainer = document.querySelector("#contact-container")
//                 contactContainer.classList.add("active")
//             }
//         });
//     }
// })

// menuPage.addEventListener("click", (e) => {
//     if (e.target.classList.contains("active")) return
//     else {
//         buttons.forEach(button => {
//             if(button.classList.contains("active")){
//                 button.classList.remove("active")
//                 menuLoad()
//                 menuContainer.classList.add("active")
//             }
//         });
//     }
// })


// const buttons = document.querySelectorAll("target")
// buttons.forEach((button) => {
//     button.addEventListener("click", () => {
//         const target = document.querySelector(".target")
//         target.classList.add("active")
//     })
// })
