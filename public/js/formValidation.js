const myForm = document.querySelector(".contact__form")

const currentURL = window.location.href;
const urlParts = currentURL.split('/');
const thisPage = urlParts[urlParts.length - 1];
sessionStorage.setItem('thisPage', thisPage);

console.log(thisPage)
if (thisPage === 'signup') {

    const privacyCheck = document.querySelector("#privacyCheck")


    myForm.addEventListener('click', (e) => {

        if (!privacyCheck.checked) {

            e.preventDefault();

        }

        privacyCheck.reportValidity();
    })
}
