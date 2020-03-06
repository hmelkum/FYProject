function GenerateMembers()
{
    $.getJSON( "../src/data/team-members.json",(data)=>{
        for(let i=0; i<data.members.length; i++)
        {
            let member_div = $("<div class='team-member'></div>");
            let img = $(`<img class='image' src =${data.members[i].image}>`);
            member_div.append(img);
            let name_h1 = $(`<h1 class='name'>${data.members[i].name}</h1>`);
            member_div.append(name_h1);
            let info_div = $("<div class='personal-info'></div>");            

            for(let j= 0; j< data.members[i].info.length; j++)
            {
                info_div.append(`<p>${data.members[i].info[j]}</p>`);
            }
            member_div.append(info_div);
            $('#container').append(member_div);
        }    
    });
}