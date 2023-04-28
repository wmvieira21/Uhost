var buttons = document.querySelectorAll('.plan button');
var backdrop = document.querySelector('.backdrop');

var modal = document.querySelector('.modal');
var buttonNoModal = document.querySelector('.modal__action--negative');

var toggleButton = document.querySelector('.toggle-button');
var sideBar = document.querySelector('.mobile-nav');

var ctaButton = document.querySelector('.nav-nav__item--cta');

console.log(buttons);

//add listener to buttons Choose Plan
buttons.forEach(button => {
    button.addEventListener('click', () => {
        openBackdrop();
        openModalWithTransition();
    })
});

/*Sidebar mobile*/
toggleButton.addEventListener('click', () => {
    openBackdrop();
    sideBar.classList.add('open');
});

backdrop.addEventListener('click', () => {
    closeBackdrop();
    closeSideBar();
    closeModal();
});

/*capture the animation event trigger by animation property*/
ctaButton.addEventListener("animationstart", (event) => {
    console.log("animationstrar", event);
});
ctaButton.addEventListener("animationiteration", (event) => {
    console.log("animationiteration", event);
});
ctaButton.addEventListener("animationend", (event) => {
    console.log("animationend", event);
});


//functions
function openModalWithTransition() {
    eventButtonNoModal();
    modal.classList.remove("modal-display__none");
    modal.classList.add("modal-display__block");

    setTimeout(() => {
        modal.classList.add("modal-transition");
    }, 10);
}

function closeBackdrop() {
    backdrop.style.display = "none";
}

function openBackdrop() {
    backdrop.style.display = "block";
}

function closeModal() {
    modal.classList.remove("modal-transition");
    setTimeout(() => {
        modal.classList.remove("modal-display__block");
        modal.classList.add("modal-display__none");
    }, 300);
}

function closeSideBar() {
    sideBar.classList.remove('open');
}

function eventButtonNoModal() {
    buttonNoModal.addEventListener('click', () => {
        closeBackdrop();
        closeModal();
    });
}


