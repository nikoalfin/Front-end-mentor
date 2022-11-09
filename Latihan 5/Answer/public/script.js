const menu=document.querySelector('.garis3');
const img1=document.querySelector('.img1');
const img2=document.querySelector('.img2');
const hambur=document.querySelector('.hamburger')
const trans=document.querySelector('.transparan')

menu.addEventListener('click',function(){
    img2.classList.toggle('mobile');
    img1.classList.toggle('hamburger');
    hambur.classList.toggle('mobile');
    trans.classList.toggle('mobile');
})
