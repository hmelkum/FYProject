function GenerateHeader(){
    let header=$(`<div id="header">
    <div id="project-info">
        <a href="https://www.manchester.ac.uk/"><img id="logo" src="src/img/university_logo.png"></a>
        <h1 id="title"><a href="/Home">CompSci07</a></h1>
    </div>
    <div id="nav-bar">
        <div class="nav-item" onclick="location.href='/Home';">Home</div>
        <div class="nav-item" onclick="location.href='/MarkupLanguages';">
            Markup Languages
            <div class="sub-nav-bar">
                <div class="sub-nav-item"><a class="sub-nav-item-a" href="/BashScripting">Bash Scripting</a></div>
                <div class="sub-nav-item"><a class="sub-nav-item-a" href="/LaTeX">LaTeX</a></div>
                <div class="sub-nav-item"><a class="sub-nav-item-a" href="/HTML">HTML</a></div>
            </div>
        </div>
        <div class="nav-item" onclick="location.href='/LaTeX';">Technologies</div>
        <div class="nav-item" onclick="location.href='/TeamPage';">About Us</div>
        <div class="nav-item" onclick="location.href='/UoM';">
            UoM
            <div class="sub-nav-bar">
                <div class="sub-nav-item"><a class="sub-nav-item-a" href="/FoundationYear">Foundation Year</a></div>
                <div class="sub-nav-item"><a class="sub-nav-item-a" href="/SCSchool">CS School</a></div>
            </div>
        </div>
    </div>
</div>`);

    $("body").append(header);
}

function GenerateFooter(){
    let footer=$(`<div id="footer"></div>`);

    $("body").append(footer);
}