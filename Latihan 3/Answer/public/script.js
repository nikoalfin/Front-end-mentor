const nomor=document.querySelector('.nomor');
const nama=document.querySelector('.nama');
const date=document.querySelector('.tgl');
const bln=document.querySelector('.bln');
const thn=document.querySelector('.thn');
const nama_input=document.getElementById("name");
const number_input=document.getElementById("number");
const date_input=document.getElementById("date");
const bulan_input=document.getElementById("bln");
const tahun_input=document.getElementById("thn");
const confir=document.querySelector('.confirm');
const kart=document.querySelector('.kartu');
const thank=document.querySelector('.thank');

// nama.innertex=nama_input.textContent;
const formatCC = (number) => {
    return number.match(/.{1,4}/g).join(' ');
}

function set_name(){
    nama.innerHTML=nama_input.value.toUpperCase();
    if(!nama_input.value==''){
        nama_input.style.border='1px solid hsl(249, 99%, 64%)';
    }
}

function set_number(){
    nomor.innerHTML=formatCC(number_input.value);
    if(number_input.value.length==16){
        number_input.style.border='1px solid hsl(249, 99%, 64%)';
        document.querySelector('.danger').style.display='none';
    }
    else{
        number_input.style.border='1px solid hsl(0, 100%, 66%)';
        document.querySelector('.danger').style.display='block';
    }
}

function set_date(){
    date.innerHTML=date_input.value;
    if(date_input.value.length==2 && date_input.value<32 ){
        date_input.style.border='1px solid hsl(249, 99%, 64%)';
        document.querySelector('.danger2').style.display='none';
    }
    else{
        date_input.style.border='1px solid hsl(0, 100%, 66%)';
        document.querySelector('.danger2').style.display='block';
    } 
}

function set_bln(){
    bln.innerHTML=bulan_input.value;
    if(bulan_input.value.length==2 && bulan_input.value<13){
        bulan_input.style.border='1px solid hsl(249, 99%, 64%)';
        document.querySelector('.danger3').style.display='none';
    }
    else{
        bulan_input.style.border='1px solid hsl(0, 100%, 66%)';
        document.querySelector('.danger3').style.display='block';
    }

}

function set_thn(){
    thn.innerHTML=tahun_input.value;
    if(tahun_input.value.length==3){
        tahun_input.style.border='1px solid hsl(249, 99%, 64%)';
    }
    else{
        tahun_input.style.border='1px solid hsl(0, 100%, 66%)';
        document.querySelector('.danger3').style.visibility='visible';
    }

}






function set_rules(){

    if(nama_input.value.length>0){
        nama_input.style.border='1px solid hsl(249, 99%, 64%)';
    }
    else{
        nama_input.style.border='1px solid hsl(0, 100%, 66%)';
    }
    
    if(number_input.value.length==16){
        number_input.style.border='1px solid hsl(249, 99%, 64%)';
    }
    else{
        number_input.style.border='1px solid hsl(0, 100%, 66%)';
        document.querySelector('.danger').style.display='block';
    }
    if(date_input.value.length==2 && date_input.value<32 ){
        date_input.style.border='1px solid hsl(249, 99%, 64%)';
    }
    else{
        date_input.style.border='1px solid hsl(0, 100%, 66%)';
        document.querySelector('.danger2').style.display='block';
    } 
    
    if(bulan_input.value.length==2 && bulan_input.value<13){
        bulan_input.style.border='1px solid hsl(249, 99%, 64%)';
    }
    else{
        bulan_input.style.border='1px solid hsl(0, 100%, 66%)';
        document.querySelector('.danger3').style.display='block';
    }
    if(tahun_input.value.length==3){
        tahun_input.style.border='1px solid hsl(249, 99%, 64%)';
    }
    else{
        tahun_input.style.border='1px solid hsl(0, 100%, 66%)';
    }
}




confir.addEventListener('click',(a)=>{
    a.preventDefault();

  if(nama_input.value.length>0 && number_input.value.length==16 && date_input.value.length==2 && date_input.value<32  && bulan_input.value.length==2 && bulan_input.value<13 && tahun_input.value.length==3){
    kart.style.display="none";
    thank.style.display="block";
  }
  else {
    set_rules();
  }

});