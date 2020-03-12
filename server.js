const express = require('express');
const bodyParser = require('body-parser');
const exec = require('child_process').exec;

const app = express();

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/dev'));

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

app.get('/Developer/Designer', (req, res) => {
    res.sendFile('/dev/designer/designer.html', {root: __dirname})
});
app.get('/:page/Editor', (req, res) => {
    req.params.page
});

app.use((req,res)=>{
    res.type('html');
    res.status(404);
    res.sendFile('/public/html/Error404.html', {root: __dirname})
});

app.listen(port, () => console.log(`Listening to port : ${port}`));