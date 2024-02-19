let start = document.querySelector('#start');
let stop = document.querySelector('#stop');
let reset = document.querySelector('#reset');



let milisec = document.querySelector('.milisec');
let sec = document.querySelector('.sec');
let min = document.querySelector('.min');
let hour = document.querySelector('.hour');


let ml = 0;
let s = 0;
let m = 0;
let h = 0;



start.addEventListener('click' , function(){
    timer = true;
    stopwatch();
});

stop.addEventListener('click',function(){
    timer=false;
});

reset.addEventListener('click',function(){
    timer=false;

    h=0;
    m=0;
    s=0;
    ml=0;

    hour.innerHTML="00";
    min.innerHTML="00";
    sec.innerHTML="00";
    milisec.innerHTML="00";
});


function stopwatch(){


    if (timer==true){
        ml++;

    

    if(ml==100){
        s++;
        ml=0;
    }

    if(s==60){
        m++;
        s=0;
    }

    if(m==60){
        h++;
        m=0;
        s=0;

    }

    let hrString = h; 
    let minString = m; 
    let secString = s; 
    let countString = ml; 

    if (h < 10) { 
        hrString = "0" + hrString; 
    } 

    if (m < 10) { 
        minString = "0" + minString; 
    } 

    if (s < 10) { 
        secString = "0" + secString; 
    } 

    if (ml < 10) { 
        countString = "0" + countString; 
    } 


    hour.innerHTML = hrString; 
    min.innerHTML= minString; 
    sec.innerHTML= secString; 
    milisec.innerHTML = countString; 

    setTimeout(stopwatch, 10); 


    }
}