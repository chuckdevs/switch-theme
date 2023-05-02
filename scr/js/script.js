const toogleSwitch = document.querySelector('.switch input[type="checkbox"]');
const switchSlider = document.querySelector(".switch .slider");
const background = document.querySelector("body");

toogleSwitch.addEventListener("click", () => {
    switchSlider.classList.toggle("active");
    if(switchSlider.classList.contains("active")) {
        background.style.backgroundColor = "#292C35";
    }else{
        background.style.backgroundColor = "#ffff";
    }
})