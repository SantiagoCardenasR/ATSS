if(document.readyState == 'loading')
{
    document.addEventListener('DOMContentLoaded',loadInformationIntoPage);
}

function loadInformationIntoPage()
{
    var padreValidaciones = document.getElementsByClassName("value")[0];
    console.log(padreValidaciones.getElementsByClassName("inner show"));
    var validaciones = padreValidaciones.getElementsByClassName("text");
    
    
}