
function colores()
{
    var colors = document.getElementsByName("estado");
    for( var i= 0; i < colors.length; i++)
    {
        var estado = colors[i].value;
        if(estado == "Estado")
        {
            colors[i].id = "id_Estado";
        }
        if(estado=="Bueno")
        {
            colors[i].id = "Bueno";
        }
        if(estado=="Malo")
        {
            colors[i].id = "Malo";
            
        }
        if(estado == "ManC")
        {
            colors[i].id = "ManC";
            
        }
        if(estado=="MantenimientoPreventivo")
        {
            colors[i].id = "MantenimientoPreventivo";
        }
    }
}

