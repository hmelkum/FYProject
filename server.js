const express = require('express');
const bodyParser = require('body-parser');
const basicAuth = require('express-basic-auth');
const fs=require('fs');
const exec = require('child_process').exec;

const app = express();

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine','ejs');
app.set('views',`${__dirname}\\dev\\editor`);

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

let users=JSON.parse(fs.readFileSync('dev/data/users.json'));

let authObj={
    users: users,
    challenge: true,
    unauthorizedResponse: (req)=>{return req.auth;}
}

app.get('/Developer/Designer', basicAuth(authObj), (req, res) => {
    res.sendFile('/dev/designer/designer.html', {root: __dirname});
});

let pages=JSON.parse(fs.readFileSync('public/src/data/scripting-markup-languages.json'));
app.get('/:pagename/Editor', basicAuth(authObj), (req, res) => {
    if(pages[req.params.pagename]!= undefined)
        res.render('editor',{pagename:req.params.pagename, user: req.auth.user, text: pages[req.params.pagename].info});
    else
        res.status(404).end();
}); 
let names=JSON.parse(fs.readFileSync('dev/data/username-name.json'));
app.post('/:pagename/Editor', basicAuth(authObj), (req, res) => {
    let d = new Date();
    console.log(req.params.pagename);
    pages[req.params.pagename].date = `${d.getDate()}/${d.getMonth()+1}/${d.getFullYear()}`;
    pages[req.params.pagename].editor = names[req.auth.user];
    pages[req.params.pagename].info = req.body.content;

    fs.writeFileSync('public/src/data/scripting-markup-languages.json',JSON.stringify(pages));

});

app.use((req,res)=>{
    res.type('html');
    res.status(404);
    res.sendFile('/public/html/Error404.html', {root: __dirname})
});

app.listen(port, () => console.log(`Listening to port : ${port}`));