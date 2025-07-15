let bodyBg = document.body.style;

function delayBgcolor (color, delay, doNext) {    
        newbClr(color, delay);
        doNext && doNext();
    };

function newbClr(color, delay){
   setTimeout(() =>{
    bodyBg.backgroundColor = color;
   },delay) 
}

delayBgcolor('teal', 1000, ()=>delayBgcolor('orange', 1000))

// delayBgcolor('teal', 1000, () => delayBgcolor('violet', 1000, () => delayBgcolor('orange', 1000)))