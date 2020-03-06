const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const exec = require('child_process').exec;

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const port = process.env.port || 3000;
app.listen(port, () => console.log(`Listening to port : ${port}`));

app.get('/', (req, res) => {
    res.sendFile('index.html', {root: __dirname})
});
app.get('/Home', (req, res) => {
    res.redirect('/');
});
app.get('/HTML', (req, res) => {
    res.sendFile('/public/html/HTML.html', {root: __dirname})
});
app.get('/LaTeX', (req, res) => {
    res.sendFile('/public/html/LaTeX.html', {root: __dirname})
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

