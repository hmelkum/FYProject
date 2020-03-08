function GenerateItems()
{
    $.getJSON( "../src/data/technologies.json",(data)=>{
        for(let i=0; i<data.technologies.length; i++)
        {
            let member_div = $(`<div class='item' onclick="location.href='${data.technologies[i].url}';"></div>`);
            let img = $(`<img class='image' src =${data.technologies[i].image}>`);
            member_div.append(img);
            let name_h1 = $(`<h1 class='name'>${data.technologies[i].name}</h1>`);
            member_div.append(name_h1);
            let info_div = $(`<div class='info'>${data.technologies[i].info}</div>`);            
            member_div.append(info_div);
            $('#container').append(member_div);
        }    
    });
}