const footerItem = document.querySelectorAll('.footer__items-item')

const accordion = (item) => {
    for (let i = 0; i < item.length; i++) {

        item[i].addEventListener('click', (event) => {
           const sub = item[i].querySelector('.footer__items-sub')
           if(sub.style.display === 'none'){
            sub.style.display = 'block'
           }else{
            sub.style.display = 'none'
           }
        })

    }
}

accordion(footerItem)