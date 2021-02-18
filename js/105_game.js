var cvs = document.getElementById("canvas");//доступ к области конвас
var ctx = cvs.getContext("2d"); //задание контекста

var bird = new Image();
var bg = new Image();
var fg = new Image();
var pipeUp = new Image(); 
var pipeBottom = new Image();

bird.src = "img/bird.png";
bg.src = "img/bg.png";
fg.src = "img/fg.png";
pipeUp.src = "img/pipeUp.png";
pipeBottom.src = "img/pipeBottom.png";

var gap = 180;//переменная описывает отступ между препятствиями

//pipes
var pipe = [];
pipe[0] = {
    x: cvs.width,
    y: 0
}

//any button active
document.addEventListener("keydown", moveUp);
function moveUp() {
    yPos -= 20;
}

var score = 0;
//Position of bird
var xPos = 10;
var yPos = cvs.height / 2;
var grav = 1.5;//gravitation


function draw() {
    ctx.drawImage(bg, 0, 0);//задний фон

    for(var i = 0; i < pipe.length; i++) {
        ctx.drawImage(pipeUp, pipe[i].x, pipe[i].y);//верхнее препятствие
        ctx.drawImage(pipeBottom, pipe[i].x, pipe[i].y + pipeUp.height + gap);//нижнее препятствие 
        
        pipe[i].x--;

        if(pipe[i].x == 125) {
            pipe.push({
                x : cvs.width,
                y : Math.floor(Math.random() * pipeUp.height) - pipeUp.height
            });
        }
        // Проверка столкновения с блоками
        if(xPos + bird.width >= pipe[i].x && xPos <= pipe[i].x 
            && xPos <= pipe[i].x + pipeUp.width
            && (yPos <= pipe[i].y + pipeUp.height
            || yPos + bird.height >= pipe[i].y + pipeUp.height + gap) 
            || yPos + bird.height >= cvs.height - fg.height){
                //alert('Game over');
                location.reload();//презапуск игровог поля
            }
        if(pipe[i].x == 5){
            score++;
        }

    }

    ctx.drawImage(fg, 0, cvs.height - fg.height);//передний фон

    ctx.drawImage(bird, xPos, yPos);//птичка   
    yPos += grav; 

    ctx.fillStyle = "#000";
    ctx.font = "20px Verdana";
    ctx.fillText("Счет: " + score, 10, cvs.height - 20);

    requestAnimationFrame(draw);
    
}

pipeBottom.onload = draw;//при загрузке последней картинки вызываем метод draw