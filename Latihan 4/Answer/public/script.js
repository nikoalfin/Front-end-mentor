const klik=document.querySelectorAll('.klik');
const hrs=document.querySelectorAll('.work1');
const hrs2=document.querySelectorAll('.work2');


klik.forEach((r)=>{
    r.addEventListener('click',()=>{
        klik.forEach((l)=>{
            l.style.color='hsl(235 45% 61%';
        })
        r.style.color='white';
        
        let nom=0;
        let nim=0;

        if(r.classList.contains('klik1')){
        console.log('saya klik 2');        
            let work=[5,1,0,1,1,0];
            let last=[7,2,1,1,3,1];
            for(let a in hrs,work){
                let set=setInterval(()=>{
                    hrs[a].innerHTML =`${nom++}hrs`;
                    if(nom>work[a])clearInterval(set);  
                },70);
            };

            for(let y in hrs2,last){
                let yui=setInterval(()=>{
                    hrs2[y].innerHTML=`Last week-${nim++}hrs`;
                    if(nim>last[y])clearInterval(yui);
                },70);
            }
        }

        if(r.classList.contains('klik2')){
            console.log('saya klik 2');        
                let work=[31,10,4,4,5,2];
                let last=[36,8,7,5,10,2];
                for(let a in hrs,work){
                    let set=setInterval(()=>{
                        hrs[a].innerHTML =`${nom++}hrs`;
                        if(nom>work[a])clearInterval(set);  
                    },70);
                };
    
                for(let y in hrs2,last){
                    let yui=setInterval(()=>{
                        hrs2[y].innerHTML=`Last week-${nim++}hrs`;
                        if(nim>last[y])clearInterval(yui);
                    },70);
                }
        }

        if(r.classList.contains('klik3')){
                console.log('saya klik 2');        
                    let work=[45,23,13,11,21,7];
                    let last=[34,29,19,18,23,11];
                    for(let a in hrs,work){
                        let set=setInterval(()=>{
                            hrs[a].innerHTML =`${nom++}hrs`;
                            if(nom>work[a])clearInterval(set);  
                        },70);
                    };
        
                    for(let y in hrs2,last){
                        let yui=setInterval(()=>{
                            hrs2[y].innerHTML=`Last week-${nim++}hrs`;
                            if(nim>last[y])clearInterval(yui);
                        },70);
                    }
        }
    }); 
});



