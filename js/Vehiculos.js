/* $(window).on("load resize ", function() 
 {
   var scrollWidth = $('.tbl-content').width() - $('.tbl-content table').width();
   $('.tbl-header').css({'padding-right':scrollWidth});
 }).resize(); */

function colores()
{
    var colors = document.getElementsByClassName("estado");
    for( var i= 0; i < colors.length; i++)
    {
        var estado = colors[i].value;
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