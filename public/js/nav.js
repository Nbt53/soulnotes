const navBar = document.querySelector('.nav')
const burger = document.querySelector('.nav__hamburger')
const burgerLine1 = document.querySelector('.nav__hamburger-line-1')
const burgerLine2 = document.querySelector('.nav__hamburger-line-2')
const burgerLine3 = document.querySelector('.nav__hamburger-line-3')

let expanded = 0

burger.addEventListener('click', (e) => {
    if (expanded === 0) {
        navBar.style.left = "0"
        expanded = 1
    } else {
        navBar.style.left = "-70%"
        expanded = 0
    }

    if(expanded === 0){
        burgerLine1.style.top = "1.5rem"
        burgerLine1.style.transform = "rotate(0)"
        burgerLine2.style.display = "inline-block"
        burgerLine3.style.bottom = "1.5rem"
        burgerLine3.style.transform = "rotate(0)"
    }else   if(expanded === 1){
        burgerLine1.style.top = "unset"
        burgerLine1.style.transform = "rotate(45deg)"
        burgerLine2.style.display = "none"
        burgerLine3.style.bottom = "unset"
        burgerLine3.style.transform = "rotate(-45deg)"
    }

})

