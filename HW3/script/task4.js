// TODO : 
// Move in diffrenet directions

let canvas = document.getElementById('myCanvas'),
    ctx = canvas.getContext('2d'),
    figures = [],
    n = 0,
    timesRun = 1,
    sup = '²';

//Deafult settings of canvas
canvas.width = window.innerWidth - 1
canvas.height = window.innerHeight - 4
ctx.font = "16px sans-serif";

class Circle {

    constructor(x,y,radius){
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.vx = randomInteger(1,3);
        this.vy = randomInteger(1,3);
        this.area = null;

        // Random colоr(rgb)
        this.r = Math.round(Math.random()*255);
        this.g = Math.round(Math.random()*255);
        this.b = Math.round(Math.random()*255);
    }

    draw() {
        ctx.fillStyle = `rgb(${this.r},${this.g},${this.b})`; 
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        ctx.closePath();
        ctx.fill();
        // ctx.fillStyle = `rgb(0,0,0)`;
        ctx.fillText(`S = ${this.circleArea()}pixels${sup}`, 
            this.x + this.radius - 5, this.y - this.radius + 5);
        //animating the figure
        this.redraw();
    }

    redraw() {
        this.x += this.vx;
        this.y += this.vy;
        
        //push from top and bottom sides of canvas
        if (this.y + this.vy > canvas.height - this.radius||
            this.y + this.vy < this.radius) {
                this.vy =- this.vy;
        }
        //push from right and left sides of canvas
        if (this.x + this.vx > canvas.width - this.radius ||
            this.x + this.vx < this.radius) {
                this.vx =- this.vx;
        }
    }   

    circleArea() {
        this.area = Math.PI * Math.pow(this.radius, 2); // S = pi * r^2
        return this.area.toFixed(2);
    }
}

class Rectangle {

    constructor(x2,y2){
        this.x1 = 0;
        this.y1 = 0;
        this.x2 = x2;
        this.y2 = y2;
        this.gravityX = randomInteger(1,3);
        this.gravityY = randomInteger(1,3);
        this.area = null;

        // Random colur(rgb)
        this.r = Math.round(Math.random()*255);
        this.g = Math.round(Math.random()*255);
        this.b = Math.round(Math.random()*255);
    }

    draw() {
        ctx.fillStyle = `rgb(${this.r},${this.g},${this.b})`;
        ctx.beginPath();
        ctx.fillRect(this.x1, this.y1, this.x2, this.y2);
        ctx.closePath();
        // ctx.fillStyle = `rgb(0,0,0)`;
        ctx.fillText(`S = ${this.rectArea()}pixels${sup}`, 
            this.x1 + this.x2 + 3, this.y1 - 3);
        //animtaing the figure
        this.redraw();
    }

    redraw() {
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

    rectArea() {
        this.area = this.x2 * this.y2; // S = a * b
        return this.area;
    }
}

// Returns random integer value from min to max
function randomInteger(min, max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1)
    rand = Math.round(rand);
    return rand;
}

// drawing background and figures
function animate() {
    ctx.clearRect(0,0,canvas.width, canvas.height);
    ctx.globalCompositeOperation = "color"
    for(i=0; i < figures.length; i++) {
        figures[i].draw();
    }
}

function showMustGoOn() {
    // adding a new figure in an array every 5s
    let interval = setInterval(function(){
        //if we reached 10th iteration => stop 
        if (++timesRun == 10) clearInterval(interval)

        let randomValue = randomInteger(10,75);
        figures.push(new Circle(randomValue+1,randomValue+1,randomValue));
        figures.push(new Rectangle(randomInteger(10,50), randomInteger(10,50)));
    },5000);

    // every 25ms updating scene
    setInterval(animate,15);
}

window.onload = () => {
    // adding two figures to be animated in order not to wait 5s to next figure rendering
    let randomValueStart = randomInteger(10,75);
    figures.push(new Circle(randomValueStart+1,randomValueStart+1,randomValueStart));
    figures.push(new Rectangle(randomInteger(10,50), randomInteger(10,50)));
    showMustGoOn();
}
