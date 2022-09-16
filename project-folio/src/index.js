const botaoMenu = document.querySelector('.hamburguer');
const botaoMenu2 = document.querySelector('.hamburguer2');
const menu = document.querySelector('.container-nav-ativo');


botaoMenu.addEventListener('click', () =>{
    console.log('teste');
    menu.classList.toggle('container-nav-ativo-click');

    
})
botaoMenu2.addEventListener('click', () =>{
    menu.classList.toggle('container-nav-ativo-click');
    
})

