var test = $('.ok');
var canvas = $('#myCanvas');
var ctx = canvas[0].getContext("2d");
var background = new Image();
var top = 0;
var bottom = 0;

ctx.font = "bold 30px arial";
ctx.textAlign="center"

$('#valid-upload').click((e)=>{
    background.src= $('#upload-link').val()
})
background.src = "https://media.discordapp.net/attachments/946724370338943017/963369945893335050/unknown.png";
background.onload = function(){
    ctx.drawImage(background,0,0, canvas.width(), canvas.height());   
}

$('#top').keyup((e)=>{
    ctx.clearRect(0, 0, canvas.width(), canvas.height()/2);
    drawText(e.target.value,"black", 40, 'top');
})
$('#bottom').keyup((e)=>{
    ctx.clearRect(0, canvas.height()/2, canvas.width(), canvas.height()/2);
    drawText(e.target.value,"black", 480, 'bottom');
})

function drawText(text,fill, dir, textDirection){
    if(textDirection === 'top'){
        textTop = text
        top=dir
    }else{
        textBottom=text
        bottom=dir
    }
    ctx.fillStyle=fill;
    ctx.lineWidth=4;
    ctx.fillText(text.toUpperCase(),canvas.width()/2,dir);
    save()
}


function save(){
        ctx.drawImage(background,0,0, canvas.width(), canvas.height());   
        ctx.fillText(textTop.toUpperCase(),canvas.width()/2, 40);
        ctx.fillText(textBottom.toUpperCase(),canvas.width()/2, bottom);
}