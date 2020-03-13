function Update()
{
    $('#content').html(editor.getValue());
}

function setupEditor()
{
    window.editor = ace.edit("editor");
    editor.setTheme("ace/theme/monokai");
    editor.getSession().setMode("ace/mode/html");

    editor.focus();
  
    editor.getSession().on('change', function() {
        Update();
    });

    editor.setOptions({
        fontSize: "16pt",
        showLineNumbers: true,
        showGutter: true,
        vScrollBarAlwaysVisible:false,
        enableBasicAutocompletion: false,
        enableLiveAutocompletion: false    
    });

    editor.setShowPrintMargin(false);
    editor.setBehavioursEnabled(false);
}

setupEditor(); 
Update();

$("#submit").on('click',()=>{

    let confirmation = confirm('Are you sure you want to Sumbit ?');
    if(confirmation)
    {
        $.ajax({
            url: location.url,
            type: 'POST',
            dataType: "json",
            data: {
                content: editor.getValue()
            }        
        });
        alert('Successfully Submitted !');
    }    
});