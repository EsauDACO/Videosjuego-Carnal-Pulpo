const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const button = document.querySelector("button");
//DECLARO TODAS LAS VARIABLES QUE UTILIZO EN EL JUEGO

const pulpin = [
    "./images/ChefActions/done/0.png",
    "./images/ChefActions/done/1.png",
    "./images/ChefActions/done/2.png",
    "./images/ChefActions/done/3.png",
    "./images/ChefActions/done/4.png",
    "./images/ChefActions/done/5.png",
    "./images/ChefActions/done/6.png",
    "./images/ChefActions/done/7.png",
    "./images/ChefActions/done/8.png",
    "./images/ChefActions/done/9.png"
]

let frames = 0; //CONTADOR DE FRAMES
let requestID;


//RECETAS
let salLimon = ['Vaso','Limon','Sal','Cerveza Clara'];
let vikyChamoy = ['Vaso', 'Limon'];
let cubana = [];
let preparado = [];

//SCORE
let points = 0;
ctx.font = "30px Arial";

//TEMPORIZADOR

//AUDIO

/*const audio = new Audio();
audio.src = "./images/Ingredients/Lyonesse.ogg";
audio.loop = true;
*/
//let tiempo = document.getElementsByID("temp");

//DECLARO TODAS LAS CLASES, CHEF, LIMON, CHELAS, ETC.

//FONDO
class Background{
    constructor(){
        this.x = 0;
        this.y = 0;
        this.width = canvas.width;
        this.height = 574;
        this.image = new Image ();
        this.image.src = "./images/fondodef.jpeg";
    }

    draw(){
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    }
}
class Background1{
    constructor(x,y,w,h){
        this.x = x;
        this.y = y;
        this.width = w;
        this.height = h;
        this.image = new Image ();
        this.image.src = "./images/white-crumpled-paper-texture-background-260nw-1726913749.webp";
    }

    gameOver(){
        ctx.filllText("Game Over", 250, 200)
    }

    win(){
        ctx.filllText("Ya ganaste", 250, 200)
    }

    draw(){
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    }
}

//PERSONAJE
class Chef{

    constructor(x,y,w,h){
        this.x = x;
        this.y = y;
        this.width = w;
        this.height = h;
        this.isTouch = false;
        //Declaro cada uno de los moviminetos del personaje
        this.image = new Image();
        this.image.src = pulpin[0];
        this.image1 = new Image();
        this.image1.src = pulpin[1];
        this.image2 = new Image();
        this.image2.src = pulpin[2];
        this.image3 = new Image();
        this.image3.src = pulpin[3];
        this.image4 = new Image();
        this.image4.src = pulpin[4];
        this.image5 = new Image();
        this.image5.src = pulpin[5];
        this.image6 = new Image();
        this.image6.src = pulpin[6];
        this.image7 = new Image();
        this.image7.src = pulpin[7];
        this.image8 = new Image();
        this.image8.src = pulpin[8];
        this.image9 = new Image();
        this.image9.src = pulpin[9];

        this.image = this.image;
    }

    draw(){
        if(frames % 8 === 0){
            if(this.image === this.image){
                this.image = this.image1
            }if(this.image1 === this.image1){
                this.image1 = this.image2
            }if(this.image2 === this.image2){
                this.image2 = this.image3
            }if(this.image3 === this.image3){
                this.image3 = this.image4
            }if(this.image4 === this.image4){
                this.image4 = this.image5
            }if(this.image5 === this.image5){
                this.image5 = this.image6
            }if(this.image6 === this.image6){
                this.image6 = this.image7
            }if(this.image7 === this.image7){
                this.image7 = this.image8
            }if(this.image8 === this.image8){
                this.image8 = this.image9
            }if(this.image9 === this.image9){
                this.image9 = this.image
            }
        }

        //LIMITES COCINA
        if(this.y <= 100
            ){
            this.y = 115
        }
        if(this.y >= 470){
            this.y = 470
        }
        if(this.x <= 80){
            this.x = 80
        }
        if(this.x >= 823){
            this.x = 823
        }
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    }
    //COLISION CON LOS INGREDIENTES
    collision(limonsito){
        return(
            this.x < limonsito.x + limonsito.width &&
            this.x + this.width > limonsito.x &&
            this.y < limonsito.y + limonsito.height &&
            this.y + this.height > limonsito.y
        )
    }
    collision(corona){
        return(
            this.x < corona.x + corona.width &&
            this.x + this.width > corona.x &&
            this.y < corona.y + corona.height &&
            this.y + this.height > corona.y
        )
    }
    collision(victoria){
        return(
            this.x < victoria.x + victoria.width &&
            this.x + this.width > victoria.x &&
            this.y < victoria.y + victoria.height &&
            this.y + this.height > victoria.y
        )
    }
    collision(vaso){
        return(
            this.x < vaso.x + vaso.width &&
            this.x + this.width > vaso.x &&
            this.y < vaso.y + vaso.height &&
            this.y + this.height > vaso.y
        )
    }
    collision(sal){
        return(
            this.x < sal.x + sal.width &&
            this.x + this.width > sal.x &&
            this.y < sal.y + sal.height &&
            this.y + this.height > sal.y
        )
    }
    collision(maggi){
        return(
            this.x < maggi.x + maggi.width &&
            this.x + this.width > maggi.x &&
            this.y < maggi.y + maggi.height &&
            this.y + this.height > maggi.y
        )
    }
    collision(inglesa){
        return(
            this.x < inglesa.x + inglesa.width &&
            this.x + this.width > inglesa.x &&
            this.y < inglesa.y + inglesa.height &&
            this.y + this.height > inglesa.y
        )
    }
    collision(valentina){
        return(
            this.x < valentina.x + valentina.width &&
            this.x + this.width > valentina.x &&
            this.y < valentina.y + valentina.height &&
            this.y + this.height > valentina.y
        )
    }
    collision(chamoy){
        return(
            this.x < chamoy.x + chamoy.width &&
            this.x + this.width > chamoy.x &&
            this.y < chamoy.y + chamoy.height &&
            this.y + this.height > chamoy.y
        )
    }
    collision(botesito){
        return(
            this.x < botesito.x + botesito.width &&
            this.x + this.width > botesito.x &&
            this.y < botesito.y + botesito.height &&
            this.y + this.height > botesito.y
        )
    }
    collision(flechita){
        return(
            this.x < flechita.x + flechita.width &&
            this.x + this.width > flechita.x &&
            this.y < flechita.y + flechita.height &&
            this.y + this.height > flechita.y
        )
    }
}


//INGREDIENTES
class Lemon{
    constructor(x,y,w,h){
        this.x = x;
        this.y = y;
        this.width = w,
        this.height = h;

        this.image = new Image();
        this.image.src = "./images/Ingredients/lemonice.gif";
    }

    draw(){
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    }
}

class cervezaClara{
    constructor(x,y,w,h){
        this.x = x;
        this.y = y;
        this.width = w;
        this.height = h;
        this.image = new Image();
        this.image.src = "./images/Ingredients/whitebeerdef.png";
    }
    draw(){
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height)
    }
}

class cervezaOscura{
    constructor(x,y,w,h){
        this.x = x;
        this.y = y;
        this.width = w;
        this.height = h;
        this.image = new Image();
        this.image.src = "./images/Ingredients/darkbeerdef.png";
    }
    draw(){
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    }
}

class vasoVacio{
    constructor(x,y,w,h){
        this.x = x;
        this.y = y;
        this.width = w;
        this.height = h;
        this.image = new Image();
        this.image.src = "./images/Ingredients/vasoVacio.png";
    }
    draw(){
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    }
}

class Salt{
    constructor(x,y,w,h){
        this.x = x;
        this.y = y;
        this.width = w;
        this.height = h;
        this.image = new Image();
        this.image.src = "./images/Ingredients/sal.png";
    }
    draw(){
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    }
}

class salsaMaggi{
    constructor(x,y,w,h){
        this.x = x;
        this.y = y;
        this.width = w;
        this.height = h;
        this.image = new Image();
        this.image.src = "./images/Ingredients/Maggi.png";
    }
    draw(){
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    }
}

class salsaInglesa{
    constructor(x,y,w,h){
        this.x = x;
        this.y = y;
        this.width = w;
        this.height = h;
        this.image = new Image();
        this.image.src = "./images/Ingredients/Inglesa.png";
    }
    draw(){
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);  
    }
}

class salsaValetina{
    constructor(x,y,w,h){
        this.x = x;
        this.y = y;
        this.width = w;
        this.height = h;
        this.image = new Image();
        this.image.src = "./images/Ingredients/Velentina.png";
    }
    draw(){
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);   
    }
}

class salsaChamoy{
    constructor(x,y,w,h){
        this.x = x;
        this.y = y;
        this.width = w;
        this.height = h;
        this.image = new Image();
        this.image.src = "./images/Ingredients/Chamoy.png";
    }
    draw(){
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);   
    }
}

class Basura{
    constructor(x,y,w,h){
        this.x = x;
        this.y = y;
        this.width = w;
        this.height = h;
        this.image = new Image();
        this.image.src = "./images/Ingredients/bote.png";
    }
    draw(){
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);   
    }
}

class Entrega{
    constructor(x,y,w,h){
        this.x = x;
        this.y = y;
        this.width = w;
        this.height = h;
        this.image = new Image();
        this.image.src = "./images/Ingredients/arrow.png"
    }
    draw(){
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    }
}
//DECLARAR LAS CLASES

const chefsito = new Chef(500,285,100,100);
const fondito = new Background();
const limonsito = new Lemon(120,35,100,90);
const corona = new cervezaClara(670,1,50,120)
const victoria = new cervezaOscura(300,1,50,120);
const vaso = new vasoVacio(450,17,100,110);
const sal = new Salt(810,20,100,100);
const maggi = new salsaMaggi(33,290,50,120);
const inglesa = new salsaInglesa(910,300,120,120);
const valentina = new salsaValetina(910,430,130,120);
const chamoy = new salsaChamoy(-20,430,130,150);
const botesito = new Basura(270,430,150,200);
const flechita = new Entrega(600,480,150,100);
const fondito1 = new Background1(0,572,1000,267);

//EJECUTAR LAS CLASES

function update(){
    frames ++;
    ctx.clearRect(0,0,canvas.width, canvas.height);
    fondito.draw();
    chefsito.draw();
    limonsito.draw();
    corona.draw();
    victoria.draw();
    vaso.draw();
    sal.draw();
    maggi.draw();
    inglesa.draw();
    valentina.draw();
    chamoy.draw();
    botesito.draw();
    flechita.draw()
    fondito1.draw();

    ctx.fillText("Tus puntos",0,40,80)
    ctx.fillText(points,30,80)
    ctx.fillText("Pedido",10,630,150);
    ctx.fillText(salLimon,10,680,1000);
    ctx.fillText("Esta es tu miche!!!",10,740,1000);
    ctx.fillText(preparado,10,800,1000);

    if(chefsito.collision(limonsito)){
        if(chefsito.isTouch && !preparado.includes("Limon")){
            preparado.push("Limon")
        }
    }if(chefsito.collision(corona)){
        if(chefsito.isTouch && !preparado.includes('Cerveza Clara')){
            preparado.push('Cerveza Clara')
        }
    }if(chefsito.collision(victoria)){
        if(chefsito.isTouch && !preparado.includes("Cerveza Obscura")){
            preparado.push("Cerveza Obscura")
        }
    }if(chefsito.collision(vaso)){
        if(chefsito.isTouch && !preparado.includes('Vaso')){
            preparado.push('Vaso')
        }
    }if(chefsito.collision(sal)){
        if(chefsito.isTouch && !preparado.includes('Sal')){
            preparado.push('Sal')
        }
    }if(chefsito.collision(maggi)){
        if(chefsito.isTouch && !preparado.includes('Salsa Maggi')){
            preparado.push('Salsa Maggi')
        }
    }if(chefsito.collision(inglesa)){
        if(chefsito.isTouch && !preparado.includes('Salsa Inglesa')){
            preparado.push('Salsa Inglesa')
        }
    }if(chefsito.collision(valentina)){
        if(chefsito.isTouch && !preparado.includes('Salsa Valentina')){
            preparado.push('Salsa Valentina')
        }
    }if(chefsito.collision(chamoy)){
        if(chefsito.isTouch && !preparado.includes('Chamoy')){
            preparado.push('Chamoy')
        }
    }if(chefsito.collision(botesito)){
        if(chefsito.isTouch === true){
            preparado.splice(0);
        }
    }if(chefsito.collision(flechita)){
       if(chefsito.isTouch === true){
       }
    }
    requestAnimationFrame(update);
}

//INICIO DEL JUEGO

function start(){
    requestAnimationFrame(update)
    audio.play();
    temporizador.conteoSegundos();
}

function gameOver(){
    audio.pause()
    button.disabled = false;
    //button.onclick = resetGame
    fondito1.gameOver()
    requestId = undefined
    cancelAnimationFrame()
}

function win(){
    audio.pause();
    button.disabled = false;
    fondito1.win();
    cancelAnimationFrame();
    requestID = undefined;
}

function compareArray(){
    // if length is not equal
    if(salLimon.length != preparado.length){
        console.log("Te faltan")
    }else{
    // comapring each element of array
    for(var i = 0; i < salLimon.length; i++){
        if(salLimon[i] = preparado[i]){
            points += 10;
            preparado.splice(0);
        }
    }
}
}

//TEMPORIZADOR EN NAV

function tempo (id, inicio, final){
    this.id = id;
    this.inicio = inicio;
    this.final = final;
    this.contador = this.inicio;

    this.conteoSegundos = function(){
        if(this.contador == this.final){
            this.conteoSegundos=null;
            gameOver();
        }
        document.getElementById("temp").innerHTML = this.contador--;
        setTimeout(this.conteoSegundos.bind(this), 1000);
    }
}

let temporizador = new tempo('temporizador', 60, -1)


//MOVER CHEF
addEventListener("keydown", (event)=>{
    //IZQUIERDA
    if(event.keyCode === 65){
        chefsito.x -= 15;
    }
    //DERECHA
    if(event.keyCode === 68){
        chefsito.x += 15;
    }
    //ARRIBA
    if(event.keyCode === 87){
        chefsito.y -= 15;
    }

    //ABAJO
    if(event.keyCode === 83){
        chefsito.y += 15;
    }
    //PICKELEMET
    if(event.keyCode === 80){
        chefsito.isTouch = true;
    }

    if(event.keyCode === 13){
        start()
    }

    if(event.keyCode === 32){
        compareArray()
    }

    if(event.keyCode === 189){
        gameOver()
    }
})

addEventListener("keyup", (event)=>{
    if(event.keyCode === 80){
        chefsito.isTouch = false;
    }
}),

button.onclick = start