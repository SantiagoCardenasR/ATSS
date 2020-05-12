function colores()
{
    var colors = document.getElementsByName("estado_vehiculo");
    for( var i= 0; i < colors.length; i++)
    {
        var estado = colors[i].value;
        var itemSemaforo = colors[i].parentElement.parentElement;
        var botonSemaforo = itemSemaforo.getElementsByClassName("btn dropdown-toggle btn-light")[0];
        if(estado == "Estado")
        {
            botonSemaforo.id = "id_Estado";
        }
        if(estado=="Bueno")
        {
            botonSemaforo.id = "Bueno";
        }
        if(estado=="Malo")
        {
            botonSemaforo.id = "Malo";
            
        }
        if(estado == "ManC")
        {
            botonSemaforo.id = "ManC";
            
        }
        if(estado=="MantenimientoPreventivo")
        {
            botonSemaforo.id = "MantenimientoPreventivo";
        }
    }
}

