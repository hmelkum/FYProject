function GenerateItems()
{
    $.getJSON( "../src/data/scripting-markup-languages.json",(data)=>{
        for(var d in data)
        {
            let obj=data[d];
            let item_div = $(`<div class='item' onclick="location.href='${obj.url}';"></div>`);
            let img = $(`<img class='image' src =${obj.image}>`);
            item_div.append(img);
            let name_h1 = $(`<h1 class='name'>${obj.name}</h1>`);
            item_div.append(name_h1);
            let info_div = $(`<div class='intro'>${obj.intro}</div>`);            
            item_div.append(info_div);
            $('#container').append(item_div);
        }    
    });
}