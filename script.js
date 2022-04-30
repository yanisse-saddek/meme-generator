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
    x = canvas.width()/2;
    y = canvas.height();

    ctx.font = fontSize+'px '+font;
    ctx.textAlign="center"
}


$('#top').keyup((e)=>{
    ctx.clearRect(canvas.width()/2, 0, canvas.width(), canvas.height()/2);
    drawText(e.target.value,topColor, y-(y-fontSize), 'top');
})

$('#bottom').keyup((e)=>{
    ctx.clearRect(0, canvas.height()/2, canvas.width(), canvas.height()/2);
    drawText(e.target.value,bottomColor, canvas.height()-fontSize, 'bottom');
})


var dataTop = []
var dataBottom = []
function drawText(text,fill, dir, textDirection){
    
    var txt = text.split('')
    var count = 0
    for(j=0; j<txt.length; j++){
        if(count<20){
            count++
        }else if (txt[j]==" "){
            txt.splice(j, 0, "°");
            count=0
        }   
    }
    txt = txt.join('')
    lines = txt.split('°');
    for (var i = 0; i<lines.length; i++){
        iLength = lines.length
        ctx.fillStyle=fill; 
        ctx.lineWidth=4;   

        if(textDirection == 'top'){
            dataTop[i] = []
            textTop = text
            var actualX = (i*fontSize)+30
            dataTop[i] = [lines[i], actualX, 'top']
            ctx.fillText(lines[i],x,actualX);
        }else{
            dataBottom[i] = []
            textBottom=text
            iLength-i
            var actualY = y-(iLength*fontSize)+(i*30)
            dataBottom[i] = [lines[i], actualY, 'bottom']
            ctx.fillText(lines[i],x, actualY);
        }
    } 
    save()
}
function save(lines){
    console.log(dataBottom)
    ctx.drawImage(background,0,0, canvas.width(), canvas.height());  
    dataBottom.map(line=>{
            ctx.fillStyle=bottomColor;  
            ctx.fillText(line[0].toUpperCase(),x, line[1]);
    })
    dataTop.map(line=>{
        ctx.fillStyle=topColor;
        ctx.fillText(line[0].toUpperCase(),x, line[1]);

    })

}

function changeColor(id){
    var data = id.split('-')
    console.log(data[0])
    if(data[0]=='top'){
        topColor=data[1]
        $('.top-color').css('background', data[1])
    }else{
        bottomColor=data[1]
        $('.bottom-color').css('background', data[1])
    }
    save()
}
function openColor(id){
    console.log(id)
    console.log('oki')
    $(`#${id}`).fadeToggle()
}