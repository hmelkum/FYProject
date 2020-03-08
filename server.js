const express = require('express');
const bodyParser = require('body-parser');
const exec = require('child_process').exec;

const app = express();

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile('index.html', {root: __dirname})
});
app.get('/Home', (req, res) => {
    res.redirect('/');
});
app.get('/MarkupLanguages', (req, res) => {
    res.sendFile('/public/html/MarkupLanguages/MarkupLanguages.html', {root: __dirname})
});
app.get('/LaTeX', (req, res) => {
    res.sendFile('/public/html/MarkupLanguages/LaTeX.html', {root: __dirname})
});
app.get('/HTML', (req, res) => {
    res.sendFile('/public/html/MarkupLanguages/HTML.html', {root: __dirname})
});
app.get('/Technologies', (req,res) => {
    res.sendFile('/public/html/Technologies.html', {root: __dirname})
});
app.get('/TeamPage', (req, res) => {
    res.sendFile('/public/html/TeamPage.html', {root: __dirname})
});

app.post('/api/update/latex.pdf',(req,res)=>{
    // data = req.body.text;
    // let i = 0;

    // for(let i=0; i< data.length; i++)
    // {
    //     queue(i,data);
    //     exec("echo off", (error, stdOut, stdErr) =>{});
    // }
        
    // function queue(i,data)
    // {
    //     let command = `echo ${data[i]} >> public/src/doc/latex.txt`;
    //     exec(command, function (error, stdOut, stdErr) {
    //     console.log(command);
    //     console.log("DONE: "+i);
    //     });
    // }
});

app.listen(port, () => console.log(`Listening to port : ${port}`));