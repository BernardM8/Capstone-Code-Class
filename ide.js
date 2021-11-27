let editor;

window.onload = function(){
    editor = ace.edit("editor");
    editor.setTheme("ace/theme/monokai");
    editor.session.setMode("ace/mode/c_cpp");
}

function changeLanguage(){
    let language = $("#languages").val();
    if(language == 'java' )editor.session.setMode("ace/mode/java");
    else if(language == 'python' )editor.session.setMode("ace/mode/python");
    else if(language == 'node' )editor.session.setMode("ace/mode/javascript");
}

function executeCode(){
    //Still working on 
    /*$.ajax({
        //url: "ide/app/compiler.php",
        url: "compiler.js",
        method: "POST",
        data:{
            language: $("#languages").val(),
            code: editor.getSession().getValue()
        },
        success: function(response){
            $(".output").text(response)
        }
    })*/
}