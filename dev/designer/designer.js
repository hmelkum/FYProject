var designer=$("#designer-kit");

designer.draggable();
designer.resizable();

$("*").click((e)=>{
    let element=$(e['target']);
    if(element.attr('id')!=undefined && element.attr('id')!='designer-kit' && element.attr('class')!='designer-kit-view')
    {
        element.resizable();
        let id = $(e['target']).attr('id');
        let element_css = getComputedStyle(e['target']);

        generateDesignerInfo(`#${id}`, element_css);
    }
    else if(element.attr('class')!=undefined && element.attr('id')!='designer-kit' && $(e['target']).attr('class')!='designer-kit-view')
    {
        element.resizable();
        let group = $(e['target']).attr('class');
        let element_css = getComputedStyle(e['target']);
    
        generateDesignerInfo(`.${group}`, element_css);
    }
    // else if(element.attr('id')!='designer-kit' && $(e['target']).attr('class')!='designer-kit-view')
    // {
    //     $('#element-name').text(`Elemen is not accessible`);
    // }
    
});

$('#self-transparency-bar').on('input', ()=> {
    designer.css('opacity', $('#self-transparency-bar').val());
});

$('#apply').click(()=>{
    applyDesignerInfo();
});

function generateDesignerInfo(txt, cssObj)
{
    $('#element-name').text(txt);
    $("#element-widht").val(cssObj['width']);
    $("#element-height").val(cssObj['height']);
    $("#element-z-index").val(cssObj['z-index']);
    $("#element-opacity").val(cssObj['opacity']);
    $("#element-background").val(cssObj['background-color']);
    $("#element-border-top-left-radius").val(cssObj['border-top-left-radius']);
    $("#element-border-top-right-radius").val(cssObj['border-top-right-radius']);
    $("#element-border-bottom-left-radius").val(cssObj['border-bottom-left-radius']);
    $("#element-border-bottom-right-radius").val(cssObj['border-bottom-right-radius']);
    $("#element-color").val(cssObj['color']);
    $("#element-font-family").val(cssObj['font-family']);
    $("#element-font-size").val(cssObj['font-size']);
    $("#element-font-style").val(cssObj['font-style']);
    $("#element-font-variant").val(cssObj['font-variant']);
    $("#element-font-weight").val(cssObj['font-weight']);
    $("#element-margin").val(cssObj['margin']);
    $("#element-padding").val(cssObj['padding']);
}
function applyDesignerInfo(txt, cssObj)
{
    let temp = $(`${$('#element-name').text()}`);
    temp.css({
        'width': $("#element-widht").val(),
        'height': $("#element-height").val(),
        'z-index': $("#element-z-index").val(),
        'opacity': $("#element-opacity").val(),
        'background': $("#element-background").val(),
        'border-top-left-radius': $("#element-border-top-left-radius").val(),
        'border-top-right-radius': $("#element-border-top-right-radius").val(),
        'border-bottom-left-radius': $("#element-border-bottom-left-radius").val(),
        'border-bottom-right-radius': $("#element-border-bottom-right-radius").val(),
        'color': $("#element-color").val(),
        'font-family': $("#element-font-family").val(),
        'font-size': $("#element-font-size").val(),
        'font-style': $("#element-font-style").val(),
        'font-variant': $("#element-font-variant").val(),
        'font-weight': $("#element-font-weight").val(),
        'margin': $("#element-margin").val(),
        'padding': $("#element-padding").val()
    });
}