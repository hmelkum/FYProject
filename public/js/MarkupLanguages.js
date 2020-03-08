function GenerateItems()
{
    $.getJSON( "../src/data/scripting-markup-languages.json",(data)=>{
        for(let i=0; i<data.languages.length; i++)
        {
            let item_div = $(`<div class='item' onclick="location.href='${data.languages[i].url}';"></div>`);
            let img = $(`<img class='image' src =${data.languages[i].image}>`);
            item_div.append(img);
            let name_h1 = $(`<h1 class='name'>${data.languages[i].name}</h1>`);
            item_div.append(name_h1);
            let info_div = $("<div class='info'></div>");            

            for(let j= 0; j< data.languages[i].info.length; j++)
            {
                info_div.append(`<p>${data.languages[i].info[j]}</p>`);
            }
            item_div.append(info_div);
            $('#container').append(item_div);
        }    
    });
}