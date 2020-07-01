(function(){
    "use strict"

    const canvas = document.querySelector('#canvas');
    const ctx = canvas.getContext('2d');
    
    ctx.beginPath();
    ctx.moveTo(131, 119);
    ctx.bezierCurveTo(131, 126, 126, 131, 119, 131);
    ctx.lineTo(30, 131);
    ctx.bezierCurveTo(23, 131, 18, 126, 18, 119);
    ctx.lineTo(18, 30);
    ctx.bezierCurveTo(18, 23, 23, 18, 30, 18);
    ctx.lineTo(119, 18);
    ctx.bezierCurveTo(126, 18, 131, 23,131 , 30);
    ctx.lineTo(131, 119);
    ctx.closePath();
    ctx.fillStyle = "yellow";
    ctx.fill();
    
    ctx.font = "68px Calibri, Geneva,Arial";
    ctx.fillStyle = "black";
    ctx.fillText("Js", 45, 115);

}());
    




