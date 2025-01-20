const MenuIcon = document.getElementById("menu-icon")
const MenuList = document.getElementById("menu-list")

MenuIcon.addEventListener("click", () => {
    MenuList.classList.toggle("hidden")
})