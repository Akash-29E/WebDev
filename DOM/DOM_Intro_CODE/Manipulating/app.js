const allLinks = document.querySelectorAll('a');

// for (let link of allLinks) {
//     link.innerText = 'I AM A LINK!!!!'
// }


for (let link of allLinks) {
    link.style.color = 'rgb(0, 108, 134)';
    link.style.textDecorationColor = 'magenta';
    link.style.textDecorationStyle = 'wavy'
}


const allImages = document.getElementsByTagName('img');

// for ( let Image of allImages){
//     Image.src = 'https://www.agriculture.com/thmb/zRALtRv5jEJu9dxSsN44vVTwOzo=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/MagenMariePhotography-1663597141-59ad5c5060d342c0a9edce8066024a43.jpg';
//     console.log(Image.src);
// }

const para = document.querySelector('p');


const aallLinks = document.querySelectorAll ('a');

for (let link of aallLinks){
    link.style.color = 'gray';
}


 let i = 0;

while (i < 7){
   
    const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
 document.querySelector(`h1 span:nth-of-type(${i+1})`).style.color = colors[i++];

}


let div = document.querySelector('#container');
let myBtn = document.createElement('button');
myBtn.innerText = 'BUTTON'
div.appendChild(myBtn);

for (let i=0; i<100;i++){
    
}