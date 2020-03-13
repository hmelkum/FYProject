function Update()
{
    // let string = editor.getValue();
    // let lines = string.split('\n');

    // console.log(lines);

    // $.ajax({
    //     url: '/api/update/latex.pdf',
    //     type: 'POST',
    //     dataType: "json",
    //     data: {
    //         'text' : lines 
    //     },
    //     success: () => { 
    //         $("#view").attr("src", "../src/doc/latex.pdf");
    //     }
    // })
    
}

function setupEditor()
{
  window.editor = ace.edit("compiler");
  editor.setTheme("ace/theme/clouds");
  //editor.setTheme("ace/theme/sqlserver");
  editor.getSession().setMode("ace/mode/latex");
  editor.setValue(`\\documentclass[12pt]{article}
\\begin{document}
  
\\section{Section}
  
\\end{document}`,1);

  editor.getSession().on('change', () => {
    Update();
  });

  editor.focus();
  
  
  editor.setOptions({
    fontSize: "16pt",
    showLineNumbers: true,
    showGutter: true,
    vScrollBarAlwaysVisible:false,
    enableBasicAutocompletion: false,
    enableLiveAutocompletion: false,
    
  });

  editor.setShowPrintMargin(false);
  editor.setBehavioursEnabled(false);
}

setupEditor();
Update();
GenerateContent();

function GenerateContent()
{
  $.getJSON( "../../src/data/scripting-markup-languages.json", (data) => {
    $('#content').html(data["LaTeX"].info);
  });
}