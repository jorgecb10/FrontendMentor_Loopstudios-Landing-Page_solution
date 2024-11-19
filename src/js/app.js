document.addEventListener('DOMContentLoaded', () => {
    console.log('documento listo');

    const menu = document.getElementById('menu')
    const iconoMenu = menu.querySelector('img')
    const navegacion = document.getElementById('fullscreenMenu')
    const body = document.getElementById('body')
    

    menu.addEventListener('click', () => {
        console.log('menu clickado')

        navegacion.classList.toggle('active')
        body.classList.toggle('overflow-hidden')

        if (navegacion.classList.contains('active')) {
            iconoMenu.src = '../src/images/icon-close.svg'
        } else {
            iconoMenu.src = '../src/images/icon-hamburger.svg'
        }
    })
})