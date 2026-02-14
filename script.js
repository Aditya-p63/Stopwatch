let start = document.getElementById('start');
let stop = document.getElementById('stop');
let reset = document.getElementById('reset');

let timer = document.querySelector('.timer')

let ms = 00;
let ss = 00;
let min = 00;

let timerid = null;


start.addEventListener(('click'),function(){
    if(timerid !==null){
        clearInterval(timerid)
    }
    timerid =  setInterval(st,10);
});

stop.addEventListener(('click'),function(){
    clearInterval(timerid)
    
});

reset.addEventListener(('click'),function(){
    clearInterval(timerid)
     
    timer.innerHTML = `00 : 00 : 00`;
    ms = ss = min = 00;
});

function st(){
    ms++;
    if(ms==100) {
        ms=0;
        ss++;
        if(ss==60){
            ss=0;
            min++;
        }
    }

    let mstrt = ms < 10 ? `0${ms}` : ms; 
    let sstrt = ss < 10 ? `0${ss}` : ss; 
    let minstrt = min < 10 ? `0${min}` : min; 

    timer.innerHTML = `${minstrt} : ${sstrt} : ${mstrt}`
}

