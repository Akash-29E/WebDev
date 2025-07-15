// // function rgb(r, g, b) {
// //     return `rgb(${r}, ${g}, ${b})`;
// // }

// // function makeColor(r, g, b) {
// //     const color = {};
// //     color.r = r;
// //     color.g = g;
// //     color.b = b;
// //     color.rgb = function () {
// //         const { r, g, b } = this;
// //         return `rgb(${r}, ${g}, ${b})`;
// //     }
// //     color.hex = function () {
// //         const { r, g, b } = this;
// //         return '#' + (1 << 24) + (r << 16) + (g << 8) + b.toString(16).slice(1);
// //     }
// //     return color;

// // }

// function Color(r, g, b) {
//     this.r = r;
//     this.g = g;
//     this.b = b;
//     this.rgb = function () {                      //Function inside the object, not on prototype
//         return `rgb(${r}, ${g}, ${b})`
//     }
//     console.log(this);

// }

// Color.prototype.hex = function () {             //Function defined on prototype
//     const { r, g, b } = this;
//     return '#' + (1 << 24) + (r << 16) + (g << 8) + b.toString(16).slice(1);
// }

// async function colorNameFun(r, g, b) {
//     console.log(r, g, b);
//     const name = await axios.get(`https://www.thecolorapi.com/id?rgb=rgb(${r},${g},${b})`).then(res => { return res.data.name.value });
//     return name
// }

// async function colorNameFun(r, g, b) {
//     console.log(r, g, b);
//     const name = await axios.get(`https://www.thecolorapi.com/id?rgb=rgb(${r},${g},${b})`).then(res => { return res.data.name.value });
//     return name
// }


// class Colors {
//     constructor(r, g, b) {
//         this.r = r;
//         this.g = g;
//         this.b = b;
//         console.log(r, g, b);
//         console.log('INSIDE CONSTRUCTOR!')
//     }
//     innerRGB() {
//         const { r, g, b } = this;
//         return `${r}, ${g}, ${b}`;
//     }
//     rgb() {
//         return `rgb(${this.innerRGB()})`;
//     }
//     colorName() {
//         const { r, g, b } = this;
//         return colorNameFun(r, g, b).then(res => { console.log(res) });
//     }


// }

class Pet {
    constructor(name, age) {
        console.log('IN PAT CONSTRUCTOR')
        this.name = name;
        this.age = age;
    }
    eat() {
        return `${this.name} is eating`;
    }
}

class Cat extends Pet {
    constructor(name, age, livesLeft = 9){
        console.log('IN CAT CONSTRUCTOR')
        super(name,age);
        this.livesLeft = livesLeft;
    }
    meow() {
        return `meowWW!`
    }
}

class Dog extends Pet {
    eat() {
        return `${this.name} is eating quickly`;
    }
    bark() {
        return `WOOF!`
    }
}
