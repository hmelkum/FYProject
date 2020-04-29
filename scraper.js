const rp = require('request-promise');
const cheerio = require('cheerio');

function QSRanking()
{
    let QSoptions={
        url: "https://www.topuniversities.com/universities/university-manchester#wurs",
        transform: (body) => {
            return cheerio.load(body);
        }
    }

    rp(QSoptions)
        .then(($)=>{
            console.log("QS ranking");
            let values = $('.val').toArray();
            for(let i = 0; i < values.length; i++)
            {
                console.log(values[i].children[0].data);
            }  
        })
        .catch((err)=>{
            console.log(err);
        });
}
function CurrentCourses()
{
    let d = new Date();
    let CSopttions_current={
        url: `https://www.cs.manchester.ac.uk/study/undergraduate/courses/${d.getFullYear()}/xml/`,
        transform: (body) => {
            return cheerio.load(body);
        }
    }
    rp(CSopttions_current)
        .then(($)=>{
            console.log("UoM CS " + d.getFullYear());
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
        })
        .catch((err)=>{
            console.log(err);
        });
}
function FutureCourses()
{
    let d = new Date();
    let CSopttions_next={
        url: `https://www.cs.manchester.ac.uk/study/undergraduate/courses/${d.getFullYear()+1}/xml/`,
        transform: (body) => {
            return cheerio.load(body);
        }
    }
    rp(CSopttions_next)
        .then(($)=>{
            console.log("UoM CS " + (d.getFullYear()+1));
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
        })
        .catch((err)=>{
            console.log(err);
        });
}

module.exports = {
    QSRanking,
    CurrentCourses,
    FutureCourses
}