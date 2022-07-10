function fill(color){
    ctx.fillStyle = color;
}
function stroke(color){
    ctx.strokeStyle = color;
}
function line(x,y,x2,y2){
    ctx.beginPath();
    ctx.lineWidth = 3;
    ctx.moveTo(x, y);
    ctx.lineTo(x2, y2);
    ctx.stroke();
}
function rect(x,y,w,h,mode){
    ctx.beginPath();
    ctx.rect(x,y,w,h);
    if (mode == "fill"){
        ctx.fill();
    }
    else if (mode == "stroke"){
        ctx.stroke();
    }
}
function circle(x,y,r,mode){
    ctx.beginPath();
    ctx.arc(x, y, r, 0, 2 * Math.PI);
    if (mode == "fill"){
        ctx.fill();
    }
    else if (mode == "stroke"){
        ctx.stroke();
    }
}