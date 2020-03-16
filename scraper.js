const rp = require('request-promise');
const cheerio = require('cheerio');

let QSoptions={
    url: "https://www.topuniversities.com/universities/university-manchester#wurs",
    transform: (body) => {
        return cheerio.load(body);
    }
}
console.log("QS ranking");
rp(QSoptions)
    .then(($)=>{
        let values = $('.val').toArray();
        for(let i = 0; i < values.length; i++)
        {
            console.log(values[i].children[0].data);
        }  
    })
    .catch((err)=>{
        console.log(err);
    });

let d = new Date();
let CSopttions_current={
    url: `https://www.cs.manchester.ac.uk/study/undergraduate/courses/${d.getFullYear()}/xml/`,
    transform: (body) => {
        return cheerio.load(body);
    }
}
console.log("UoM CS " + d.getFullYear())
rp(CSopttions_current)
    .then(($)=>{
        let courses = $('ul').toArray();
        for(let i = 0; i<courses[0].children.length; i++)
        {
            let s = courses[0].children[i].children[0].children[0].children[0].data+'\t';
            for(let j=1; j< courses[0].children[i].children.length; j++)
            {
                s+=(courses[0].children[i].children[j].children[0].data+'\t');
            }
            console.log(s);
        }   
        // console.log(courses);   
    })
    .catch((err)=>{
        console.log(err);
    });