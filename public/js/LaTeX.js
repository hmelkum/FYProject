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
    let contentObj=data["LaTeX"];
    $('#content').html(`${contentObj.info} <h4>Last modified: ${contentObj.date} by ${contentObj.editor}</h4>`);
    $('.accordion').accordion({
			collapsible: true,
			active: false,
			heightStyle: "content",
			header: "h3"
	  	});
		$('.tabs').tabs();
  });
}

$('#information').scroll(()=>{
  let d =Math.floor($('#information').position().top-$('#info-title').position().top);
  if(d > 0)
  {
    $('#info-title').animate({
      backgroundColor: "rgb(64, 10, 78)",
      color: "white"
    },0);
  }
  else
  {  
    $('#info-title').animate({
      backgroundColor: "#be8ef0",
      color: "black"
    },0);
  }
});