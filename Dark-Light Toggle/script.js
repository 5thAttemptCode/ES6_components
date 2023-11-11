const light = document.getElementById("lightSwitch")
const body = document.querySelector("body")

light.addEventListener("click", () => {
    body.classList.toggle("dark")
})