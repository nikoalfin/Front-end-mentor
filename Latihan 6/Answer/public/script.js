const ling=document.querySelector('.ling');
const bg=document.querySelector('.contain');
const parent=document.querySelector('.parent');
const child=document.querySelector('.child');
const inp=document.querySelector('.range');
const hasil=document.querySelector('.value');


let yu=inp.value;
bg.addEventListener('click',()=>{
    ling.classList.toggle('klikling');
    bg.classList.toggle('bg');
});

inp.addEventListener('input',()=>{
    hasil.innerHTML=`${inp.value} %`;
    child.style.width=`${inp.value*2}%`;
});