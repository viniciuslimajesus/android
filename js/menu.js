var burguer = document.querySelector('span#burguer')
var menu = document.querySelector('nav.navegacao')
burguer.addEventListener('click', clickMenu)

function clickMenu() {
    if(menu.style.display == 'block') {
        menu.style.display = 'none'
    } else {
        menu.style.display = 'block'
    }
}

function mudouTamanho() {
    if(window.innerWidth >= 768) {
        menu.style.display = 'block'
    } else {
        menu.style.display = 'none'
    }
}