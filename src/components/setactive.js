const setActive = function(button){
    const buttons = document.querySelectorAll(".buttons");

    buttons.forEach((button) => {
      if (button !== this) {
        button.classList.remove("active");
      }
    });
  
    button.classList.add("active");
}

export default setActive;