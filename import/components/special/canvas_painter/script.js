function stroke(x, y, radius, color, ctx){
    // create path
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI *2, false);

    // create gradient
    var grd = ctx.createRadialGradient(x, y, 0, x+radius, y+radius, 100);
    grd.addColorStop(0, color);
    grd.addColorStop(1, "transparent");

    // fill with gradient
    ctx.fillStyle = grd;
    ctx.fill();
    ctx.closePath();
}

function getStrokeData(){
    log.write("gathering stroke data");
    let strokes = [];
    // test code, replace with equivalent values
    let colors = [
        "orange",
        "red",
        "pink",
        "purple",
        "green",
    ];
    while (strokes.length < 100){    
        let x = Math.floor(Math.random() * innerWidth);
        let y = Math.floor(Math.random() * innerHeight);
        let radius = Math.random() * (0.0001 * (innerHeight * innerWidth));
        let color = colors[Math.floor(Math.random() * colors.length)];
        strokes.push([x, y, radius, color]);
    }    
    return strokes;
}

window.onload = () => {
    log.init("#log");
    log.write("hello world!"); 
    ctx = document.querySelector("canvas").getContext("2d");
    window.requestAnimationFrame(test);
}
async function test(){
    stroke(Math.floor(innerWidth * .5), Math.floor(innerHeight * .5), 100, ctx)
    await window.requestAnimationFrame(test);

}
async function draw(){
    let strokeData = getStrokeData();
    for (s in strokeData){
        let _s = strokeData[s];
        stroke(_s[0], _s[1], _s[2], _s[3], ctx);
        setInterval(10000000);
    }
    await window.requestAnimationFrame(draw);
}