
const menu = document.querySelector('.hamburger'); 
const x = document.getElementById('close');
const mobile = document.querySelector('.mobile');

menu.addEventListener("click", ()=>{
    mobile.style.display = 'flex';
    mobile.style.marginRight = '0px';

});

x.addEventListener("click", ()=>{
    mobile.style.display = 'none';
    mobile.style.marginRight = '-21rem';

});