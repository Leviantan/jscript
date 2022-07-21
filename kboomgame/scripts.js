let canvajuego;
let ctx;
let fps = 50;

let imgrex;

function inicializar(){
    canvajuego = document.getElementById("pantalla");
    ctx = canvajuego.getContext("2d");

    //cargando imagen protagonista
    imgrex = new Image();
    imgrex.src = "img/codi1.png"

    setInterval(function(){principal();},1000/fps);

    canvajuego.addEventListener("mousedown",clicraton,false);
    canvajuego.addEventListener("mousemove",mousemueve,false);

    function clicraton(e){
        console.log("se pulso el rato");
    }

    function mousemueve(e){
        let x = e.x;
        let y = e.y;
        //console.log("x = " + x + " y = " + y);
    }
}

let protagonista = function(x,y){
    this.x = x;
    this.y = y;
    this.velocidad = 15;

    this.texto = function(){
        ctx.font = "20px impact";
        ctx.fillStyle = "#555555";
        ctx.fillText("x : " + this.x + " - y : " + this.y,50,50);   
    }

    this.dibuja = function(){
        ctx.drawImage(imgrex,this.x,this.y);
    }

    this.marriba = function(){
        this.y -= this.velocidad;
    }
    this.mabajo = function(){
        this.y += this.velocidad;
    }
    this.mderecha = function(){
        this.x += this.velocidad;
    }
    this.mizquierda = function(){
        this.x -= this.velocidad;
    }
}

let personaje = function(x,y){
    this.x = x;
    this.y = y;
    this.derecha = true;

    this.dibuja = function(){
        ctx.fillStyle = "#FF0000";
        ctx.fillRect(this.x, this.y, 50,50);
    }

    this.muevederecha = function(velocidad){
        if(this.derecha == true){
            if(this.x < 450){
                this.x+= velocidad;
            }else{
                this.derecha = false;
            }
        }else{
            if(this.x <= 0){
                this.derecha = true;
            }else{
                this.x-= velocidad;
            }
        }
    }
}

let persona1 = new personaje(200,100);
let persona2 = new personaje(300,200);
let persona3 = new personaje(40,300);

let prota = new protagonista(10,380);

document.addEventListener("keydown",function(tecla){
    // arriba 38 abajo 40 izquirda 37 derecha 39
    if(tecla.keyCode == 38){
        prota.marriba();
    }
    if(tecla.keyCode == 40){
        prota.mabajo();
    }
    if(tecla.keyCode == 37){
        prota.mizquierda();
    }
    if(tecla.keyCode == 39){
        prota.mderecha();
    }
})

function borrarcanva(){
    canvajuego.width = 500;
    canvajuego.height = 400;
}

function principal(){
    borrarcanva();
    persona1.dibuja();
    persona2.dibuja();
    persona3.dibuja();
    prota.dibuja();
    prota.texto();

    persona1.muevederecha(5);
    persona2.muevederecha(3);
    persona3.muevederecha(4);
    //console.log("funcion");
}

