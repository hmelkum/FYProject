function GenerateHeader(){
    let header=$(`<div id="header">
    <div id="project-info">
        <a href="https://www.manchester.ac.uk/" target="_blank"><img id="logo" src="src/img/university_logo.png"></a>
        <h1 id="title"><a href="/Home">CompSci07</a></h1>
    </div>
    <div id="nav-bar">
        <div class="nav-item" onclick="location.href='/Home';">Home</div>
        <div class="nav-item" onclick="location.href='/MarkupLanguages';">
            Markup Languages
            <div class="sub-nav-bar">
                <a class="sub-nav-item-a" href="/BashScripting"><div class="sub-nav-item">Bash Scripting</div></a>
                <a class="sub-nav-item-a" href="/LaTeX"><div class="sub-nav-item">LaTeX</div></a>
                <a class="sub-nav-item-a" href="/HTML"><div class="sub-nav-item">HTML</div></a>
            </div>
        </div>
        <div class="nav-item" onclick="location.href='/Technologies';">Technologies</div>
        <div class="nav-item" onclick="location.href='/TeamPage';">About Us</div>
        <div class="nav-item" onclick="location.href='/UoM';">
            UoM
            <div class="sub-nav-bar">
                <a class="sub-nav-item-a" href="/FoundationYear"><div class="sub-nav-item">Foundation Year</div></a>
                <a class="sub-nav-item-a" href="/CSSchool"><div class="sub-nav-item">CompSci School</div></a>
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

// window.onscroll = () => {
//     let  navbar= $('#nav-bar').offset().top;
//     let project_info=$('#project-info').css('height');
//     console.log(navbar);
//     console.log(project_info);
//     if (window.pageYOffset - navbar >= 0) 
//     {
//         $('#nav-bar').attr('class', 'sticky');
//     } 
//     else 
//     {
//         $('#nav-bar').removeAttr('class');
//     }
// };

