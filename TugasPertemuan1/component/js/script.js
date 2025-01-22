const MenuIcon = document.getElementById("menu-icon")
const MenuList = document.getElementById("menu-list")
const Not = document.getElementById("not")

MenuIcon.addEventListener("click", () => {
    MenuList.classList.toggle("hidden")
})

Not.addEventListener("click", ()=> {
    alert("maaf project ini tidak bisa diakses")
})