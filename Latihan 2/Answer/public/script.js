const ang=document.querySelectorAll('.klik');
const sub=document.querySelector('.submit');
const jwb=document.querySelector('.jwb');
const tanya=document.querySelector('.tanya');
const has=document.querySelector('.pil');
const hasil=document.querySelector('.hasil');

let num=0;

ang.forEach( (t) => {
    t.addEventListener('click',()=>{
        num=t.innerHTML;
        ang.forEach((r)=>{
            r.classList.remove('orange');
        })
        t.classList.add('orange');
    })
});

sub.addEventListener('click',()=>{
    if(num==0){
        has.innerHTML='You must select one';
    }
    else{
        jwb.style.display='block';
        tanya.style.display='none';
        hasil.innerHTML='You selected '+num+' out of 5'
    }
})



