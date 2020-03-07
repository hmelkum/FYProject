function GenerateHeader(){
    let header=$(`<div id="header">
    <div id="project-info">
        <img id="logo" src="src/img/university_logo.png">
        <h1 id="title">CompScie07</h1>
    </div>
    <div id="nav-bar">
        <div class="nav-item" onclick="location.href='/Home';">Home</div>
        <div class="nav-item" onclick="location.href='/MarkupLanguages';">Markup Languages</div>
        <div class="nav-item" onclick="location.href='/LaTeX';">Technologies</div>
        <div class="nav-item" onclick="location.href='/TeamPage';">About Us</div>
        <div class="nav-item" onclick="location.href='/HTML';">UoM</div>
    </div>
</div>`);

    $("body").append(header);
}

function GenerateFooter(){
    let footer=$(`<div id="footer"></div>`);

    $("body").append(footer);
}