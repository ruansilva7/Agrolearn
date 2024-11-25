let trilho = document.getElementById('trilho')
let body = document.querySelector('body')

trilho.addEventListener('click', ()=>{
    trilho.classList.toggle('dark')
    body.classList.toggle('dark')
})


//menu mobile
let menu = document.getElementById('btn-menu-mob')
let line1 = document.querySelector('.line-menumob1')
let line2 = document.querySelector('.line-menumob2')
let menuMobile = document.getElementById("menu-mobile")

menu.addEventListener('click', ()=>{
    line1.classList.toggle('ativo1')
    line2.classList.toggle('ativo2')
    menuMobile.classList.toggle('abrir')
})

