function Update()
{
	let idoc = document.getElementById('view').contentWindow.document;

	idoc.open();
	idoc.write(editor.getValue());
	idoc.close();
}

function setupEditor()
{
  window.editor = ace.edit("compiler");
  editor.setTheme("ace/theme/monokai");
  editor.getSession().setMode("ace/mode/html");
  editor.setValue(`
<!DOCTYPE html>
<html>
    <head>
        <title></title>
    </head>

    <body>
        <h1>Hello World !</h1>
    </body>
</html>`,1);

  editor.getSession().on('change', function() {
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
    let contentObj=data["HTML"];
    $('#content').html(`${contentObj.info} <h4>Last modified: ${contentObj.date} by ${contentObj.editor}</h4>`);
  });
}