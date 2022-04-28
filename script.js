var test = $('.ok');
var canvas = $('#myCanvas');
var ctx = canvas[0].getContext("2d");
ctx.font = "bold 30px arial";
ctx.textAlign="center"
var top = 0;
var bottom = 0;

var background = new Image();
background.src = "https://media.discordapp.net/attachments/949221180466946078/969195942890864770/Screenshot_2022-04-22-11-17-06-504_com.snapchat.android.jpg?width=269&height=598";
background.onload = function(){
    ctx.drawImage(background,0,0);   
}

canvas[0].style.backgroundImage = "url('https://media.discordapp.net/attachments/949221180466946078/969195942890864770/Screenshot_2022-04-22-11-17-06-504_com.snapchat.android.jpg?width=269&height=598')"

$('#top').keyup((e)=>{
    ctx.clearRect(0, 0, canvas.width(), canvas.height()/2);
    drawText(e.target.value,"white", 40, 'top');
})
$('#bottom').keyup((e)=>{
    ctx.clearRect(0, canvas.height()/2, canvas.width(), canvas.height()/2);
    drawText(e.target.value,"white", 480, 'bottom');
})

function drawText(text,fill, dir, textDirection){
    if(textDirection === 'top'){
        textTop = text
        top=dir
    }else{
        textBottom = text
        bottom=dir
    }

    ctx.fillStyle=fill;
    ctx.lineWidth=4;
    ctx.fillText(text.toUpperCase(),canvas.width()/2,dir);
}


function download(){
        ctx.drawImage(background,0,0);   
        ctx.fillText(textTop.toUpperCase(),canvas.width()/2, 40);
        ctx.fillText(textBottom.toUpperCase(),canvas.width()/2, bottom);
}