const btnLeft = document.querySelector('.slideshow__btn-left')
const btnRight = document.querySelector('.slideshow__btn-right')
const slideshowContainer = document.querySelector('.slideshow__container')
const screenWidth = window.innerWidth;



const scrollLeft = () => {
    slideshowContainer.scrollLeft -= screenWidth
}
const scrollRight = () => {
    slideshowContainer.scrollLeft += screenWidth
}

btnLeft.addEventListener('click', scrollLeft)
btnRight.addEventListener('click', scrollRight)