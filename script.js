var test = $('.ok');
var canvas = $('#myCanvas');
var ctx = canvas[0].getContext("2d");
var background = new Image();
var topColor = "black"
var bottomColor = "orange"
var textBottom = ""
var textTop = ""
var fontSize = 30;
var font = "Comic Sans MS"
var x = canvas.width()/2;
var y = canvas.height();
var lineheight = 25;


$('#valid-upload').click((e)=>{
    background.src= $('#upload-link').val()
})
background.src = "https://media.discordapp.net/attachments/946724370338943017/968449899928616960/Snapchat-71237284.jpg?width=447&height=596";
background.onload = function(){
    canvas[0].width=background.width
    canvas[0].height=background.height
    ctx.drawImage(background,0,0, canvas.width(), canvas.height());  
    console.log(canvas.height()-(canvas.height()-10)) 
    
    ctx.font = fontSize+'px '+font;
    ctx.textAlign="center"
     x = canvas.width()/2;
     y = canvas.height();
     lineheight = 25;

        var txt = "OKKKK\nKOKKKKKKKKKKKKKK\nKKKKKK"
        var lines = txt.split('\n');
        
        for (var i = 0; i<lines.length; i++){
            ctx.fillText(lines[i].toUpperCase(),x, y-(y-fontSize)+ (i*lineheight));
        }
}


$('#top').keyup((e)=>{
    ctx.clearRect(0, 0, canvas.width(),canvas.width(), canvas.height()/2);
    drawText(e.target.value,topColor, y-(y-fontSize), 'top');
})
$('#bottom').keyup((e)=>{
    ctx.clearRect(0, canvas.height()/2, canvas.width(), canvas.height()/2);
    drawText(e.target.value,bottomColor, canvas.height()-fontSize, 'bottom');
})

function drawText(text,fill, dir, textDirection){
    if(textDirection == 'top'){
        textTop = text
    }else{
        textBottom=text
    }
    ctx.fillStyle=fill; 
    ctx.lineWidth=4;
    ctx.fillText(text.toUpperCase(),x,dir);
    save()
}

function save(){
        ctx.drawImage(background,0,0, canvas.width(), canvas.height());   
        if(textTop){
            ctx.fillStyle=topColor;
            ctx.fillText(textTop.toUpperCase(),x, y-(y-fontSize));
        }
        if(textBottom){
            ctx.fillStyle=bottomColor;  
            ctx.fillText(textBottom.toUpperCase(),x, y-fontSize);
        }
}

function changeColor(id){
    var data = id.split('-')
    console.log(data[0])
    if(data[0]=='top'){
        topColor=data[1]
        $('.top-color').css('background', data[1])
    }else{
        bottomColor=data[1]
    }
}