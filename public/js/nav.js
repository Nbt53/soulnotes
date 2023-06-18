const navBar = document.querySelector('.nav')
const burger = document.querySelector('.nav__hamburger')


let expanded = 0

burger.addEventListener('click', (e) => {
    if (expanded === 0) {
        navBar.style.left = "0"
        expanded = 1
    } else {
        navBar.style.left = "-70%"
        expanded = 0
    }

})