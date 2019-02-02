let canvas = document.getElementById('myCanvas');
let ctx = canvas.getContext('2d');
canvas.width = window.innerWidth - 1
canvas.height = window.innerHeight - 4

class Circle {
    constructor(x,y,radius){
        this.x = x;
        this.y = y;
        this.vx = 3;
        this.vy = 2;
        this.radius = radius;
    }

    draw() {
        ctx.fillStyle = "#ff0000"; 
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        ctx.closePath();
        ctx.fill();
        this.x += this.vx;
        this.y += this.vy;
        
        //push from the sides of canvas
        if (this.y + this.vy > canvas.height - this.radius||
            this.y + this.vy < this.radius) {
                this.vy =- this.vy;
        }
        if (this.x + this.vx > canvas.width - this.radius ||
            this.x + this.vx < this.radius) {
                this.vx =- this.vx;
        }
    }

    animate() {
        setInterval(() => {
            ctx.clearRect(0,0,canvas.width,canvas.height);
            this.draw();
        }, 10);
    }
}

class Rectangle {
    constructor(x1,y1,x2,y2){
        this.x1 = x1;
        this.y1 = y1;
        this.x2 = x2;
        this.y2 = y2;
        this.gravityX = 3;
        this.gravityY = 1;

    }

    draw() {
        ctx.fillStyle = "#00ff00";
        ctx.beginPath();
        ctx.rect(this.x1, this.y1, this.x2, this.y2);
        ctx.closePath();
        ctx.fill();
        this.x1 += this.gravityX;
        this.y1 += this.gravityY;

        //push from the sides of canvas
        if (this.y1 + this.y2 > canvas.height ||
            this.y1 < 1) {
                this.gravityY = -this.gravityY
        }
        if (this.x1 + this.x2 > canvas.width ||
            this.x1 < 0) {
                this.gravityX = -this.gravityX;
        }
    }

    animate() {
        setInterval(() => {
            ctx.clearRect(0,0,canvas.width,canvas.height);
            this.draw();
        },10);
    }
}


let randomValue = Math.floor(Math.random() * 100);
let c = new Circle(randomValue+1,randomValue+1,randomValue);
// c.animate();

let r = new Rectangle(0,0,Math.floor(Math.random() * 100),Math.floor(Math.random() * 100));
r.animate();

// window.onload = () => {
//     setInterval(()=>{
//         let randomValue = Math.floor(Math.random() * 100);
//         let c = new Circle(randomValue+1,randomValue+1,randomValue);
//         c.animate();
//     }, 1000)
// }