const hr=document.getElementById("hr");
const min=document.getElementById("min");
const sec=document.getElementById("sec");
const milse=document.getElementById("milse");
const start=document.getElementById("start");
const stopp=document.getElementById("stop");
const resett=document.getElementById("reset");

let hour=0;
let minut=0;
let second=0;
let milsecond=0;
let flag;

start.addEventListener("click",()=>{
    
flag=true;
    stopwatch();

});

stopp.addEventListener("click",()=>{
    flag=false;
})

resett.addEventListener("click",()=>{
    flag=false;
    hr.innerText="00 :";
min.innerText="00 :";
sec.innerText="00 :";
milse.innerText="00 ";
})

function stopwatch(){
if(flag){
milsecond++;
if(milsecond==100){
    second++;
    milsecond=0;
}

if(second==60){
    minut++;
    second=0;
 
}

if(minut==60){
hour++;
minut=0;
second=0;
}

let hrr=hour;
let minn=minut;
let secc=second;
let milsee=milsecond;

if(hrr<10){
hrr="0"+hrr;
}
if(minn<10){
    minn="0"+minn;
    }
    if(secc<10){
        secc="0"+secc;
        }
        if(milsee<10){
            milsee="0"+milsee;
            }

console.log(hrr+" "+minn+" "+secc+" "+milsee);
setTimeout(stopwatch,10);
hr.innerText=hrr+" :";
min.innerText=minn+" :";
sec.innerText=secc+" :";
milse.innerText=milsee+" ";

}
  

}