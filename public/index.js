var i = 0;
const img_number = 4;

let slide_show=setInterval(()=>{
    if(i<img_number-1)
        i++;
    else 
        i=0;
    $("#slide-image").css("opacity","0");
    $("#slide-image").attr("src",`src/img/slide-show/${i}.jpg`);
    slideDotChange(i);
},6000);

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

$("#dot-0").click(() => {
    $("#slide-image").attr("src",`src/img/slide-show/0.jpg`);
    slideDotChange(0);
    i=0;
});
$("#dot-1").click(() => {
    $("#slide-image").attr("src",`src/img/slide-show/1.jpg`);
    slideDotChange(1);
    i=1;
});
$("#dot-2").click(() => {
    $("#slide-image").attr("src",`src/img/slide-show/2.jpg`);
    slideDotChange(2);
    i=2;
});
$("#dot-3").click(() => {
    $("#slide-image").attr("src",`src/img/slide-show/3.jpg`);
    slideDotChange(3);
    i=3;
});

function slideDotChange(i)
{
    for(let j = 0; j<img_number; j++)
    {
        if(j!=i)
            $(`#dot-${j}`).attr("class","slide-dot");
    }
    $(`#dot-${i}`).attr("class","slide-dot-active");
}