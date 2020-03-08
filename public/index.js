var i = 0;
const img_number = 4;

let slide_show=setInterval(()=>{
    if(i<img_number-1)
        i++;
    else 
        i=0;
    $("#slide-image").css("opacity","0");
    $("#slide-image").attr("src",`src/img/slide-show/${i}.jpg`);
},10000);

let animation=setInterval(()=>{
        $("#slide-image").css("opacity","+=0.01");
    },30);

$("#previous").click(() => {
    i--;
    if(i<0) i=img_number-1;
    $("#slide-image").attr("src",`src/img/slide-show/${i}.jpg`);
});
$("#next").click(() => {
    i++;
    if(i > img_number-1) i=0;
    $("#slide-image").attr("src",`src/img/slide-show/${i}.jpg`);
});