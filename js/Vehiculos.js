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

function cambiarParametros(pValidacion)
{
    var padreParametros = document.getElementsByClassName("dropdown-menu inner show")[1];
    console.log(padreParametros);
    var innerhtml = "";
    if(pValidacion == 'Estado de cabina y controles')
    {
        innerhtml = `
        <li class="selected active">
            <a role="option" class="dropdown-item active selected" id="bs-select-2-0" tabindex="0" aria-setsize="7" aria-posinset="1" aria-selected="true">
                <span class="text">
                ESPEJO RETROVISOR/LATERAL
                </span>
            </a>
        </li>
        <li>
            <a role="option" class="dropdown-item" id="bs-select-2-1" tabindex="0" aria-setsize="7" aria-posinset="2">
                <span class="text">
                    PITO-ALARMA DE RESERVA
                </span>
            </a>
        </li>
        <li>
            <a role="option" class="dropdown-item" id="bs-select-2-2" tabindex="0" aria-setsize="7" aria-posinset="3">
                <span class="text">
                    FRENOS
                </span>
            </a>
        </li>
        <li>
            <a role="option" class="dropdown-item" id="bs-select-2-3" tabindex="0" aria-setsize="7" aria-posinset="4">
                <span class="text">
                    LIMPIA BRISAS
                </span>
            </a>
        </li>
        <li>
            <a role="option" class="dropdown-item" id="bs-select-2-4" tabindex="0" aria-setsize="7" aria-posinset="5">
                <span class="text">
                CINTURONES DE SEGURIDAD
                </span>
            </a>
        </li>
        <li>
            <a role="option" class="dropdown-item" id="bs-select-2-5" tabindex="0" aria-setsize="7" aria-posinset="6">
                <span class="text">
                    PUERTAS
                </span>
            </a>
        </li>
        <li>
            <a role="option" class="dropdown-item" id="bs-select-2-6" tabindex="0" aria-setsize="7" aria-posinset="7">
                <span class="text">
                    VÍDRIOS
                </span>
            </a>
        </li>
        `;
    }

    if(pValidacion == 'General')
    {
        innerhtml = `
        <li class="selected active">
        <a role="option" class="dropdown-item active selected" id="bs-select-2-0" tabindex="0" aria-setsize="7" aria-posinset="1" aria-selected="true">
            <span class="text">
            Sillas en buena consición
            </span>
        </a>
    </li>
    <li>
        <a role="option" class="dropdown-item" id="bs-select-2-1" tabindex="0" aria-setsize="7" aria-posinset="2">
            <span class="text">
                Testigos tablero de control
            </span>
        </a>
    </li>
    <li>
        <a role="option" class="dropdown-item" id="bs-select-2-2" tabindex="0" aria-setsize="7" aria-posinset="3">
            <span class="text">
                Orden y aseo
            </span>
        </a>
    </li>
    <li>
        <a role="option" class="dropdown-item" id="bs-select-2-3" tabindex="0" aria-setsize="7" aria-posinset="4">
            <span class="text">
                Liquido refrigerante
            </span>
        </a>
    </li>
    <li>
        <a role="option" class="dropdown-item" id="bs-select-2-4" tabindex="0" aria-setsize="7" aria-posinset="5">
            <span class="text">
                Batería y cables
            </span>
        </a>
    </li>
    <li>
        <a role="option" class="dropdown-item" id="bs-select-2-5" tabindex="0" aria-setsize="7" aria-posinset="6">
            <span class="text">
                Llantas son cortaduras profundas y sin abultamientos
            </span>
        </a>
    </li>
    <li>
        <a role="option" class="dropdown-item" id="bs-select-2-6" tabindex="0" aria-setsize="7" aria-posinset="7">
            <span class="text">
                Llantas huellas > 1.6mm
            </span>
        </a>
    </li>
    <li>
        <a role="option" class="dropdown-item" id="bs-select-2-6" tabindex="0" aria-setsize="7" aria-posinset="7">
            <span class="text">
                Control de fugas (Hidráulica, aire)
            </span>
        </a>
    </li>
    <li>
        <a role="option" class="dropdown-item" id="bs-select-2-6" tabindex="0" aria-setsize="7" aria-posinset="7">
            <span class="text">
                Alineación y balanceo
            </span>
        </a>
    </li>
        `;
    }

    if(pValidacion == 'Elementos de seguridad')
    {
        innerhtml = `
        <li class="selected active">
            <a role="option" class="dropdown-item active selected" id="bs-select-2-0" tabindex="0" aria-setsize="7" aria-posinset="1" aria-selected="true">
                <span class="text">
                    Extintor ABC
                </span>
            </a>
        </li>
        <li>
            <a role="option" class="dropdown-item" id="bs-select-2-1" tabindex="0" aria-setsize="7" aria-posinset="2">
                <span class="text">
                    Botoquin de primeros auxilios
                </span>
            </a>
        </li>
        <li>
            <a role="option" class="dropdown-item" id="bs-select-2-2" tabindex="0" aria-setsize="7" aria-posinset="3">
                <span class="text">
                    2 conos
                </span>
            </a>
        </li>
        <li>
            <a role="option" class="dropdown-item" id="bs-select-2-3" tabindex="0" aria-setsize="7" aria-posinset="4">
                <span class="text">
                    Gato y cruceta
                </span>
            </a>
        </li>
        <li>
            <a role="option" class="dropdown-item" id="bs-select-2-4" tabindex="0" aria-setsize="7" aria-posinset="5">
                <span class="text">
                    Linternas
                </span>
            </a>
        </li>
        <li>
            <a role="option" class="dropdown-item" id="bs-select-2-5" tabindex="0" aria-setsize="7" aria-posinset="6">
                <span class="text">
                    Dos tacos
                </span>
            </a>
        </li>
        <li>
            <a role="option" class="dropdown-item" id="bs-select-2-6" tabindex="0" aria-setsize="7" aria-posinset="7">
                <span class="text">
                    Llanta de repuesto
                </span>
            </a>
        </li>
        `;
    }

    if(pValidacion == 'Luces')
    {
        innerhtml = `
        <li class="selected active">
            <a role="option" class="dropdown-item active selected" id="bs-select-2-0" tabindex="0" aria-setsize="7" aria-posinset="1" aria-selected="true">
                <span class="text">
                    Delanteras - Laterales
                </span>
            </a>
        </li>
        <li>
            <a role="option" class="dropdown-item" id="bs-select-2-1" tabindex="0" aria-setsize="7" aria-posinset="2">
                <span class="text">
                    Estacionarias
                </span>
            </a>
        </li>
        <li>
            <a role="option" class="dropdown-item" id="bs-select-2-2" tabindex="0" aria-setsize="7" aria-posinset="3">
                <span class="text">
                    Direccionales delanteras de giro
                </span>
            </a>
        </li>
        <li>
            <a role="option" class="dropdown-item" id="bs-select-2-3" tabindex="0" aria-setsize="7" aria-posinset="4">
                <span class="text">
                    Direccionales traseras de parqueo giro
                </span>
            </a>
        </li>
        <li>
            <a role="option" class="dropdown-item" id="bs-select-2-4" tabindex="0" aria-setsize="7" aria-posinset="5">
                <span class="text">
                    Stop (frenos) y señal trasera
                </span>
            </a>
        </li>
        <li>
            <a role="option" class="dropdown-item" id="bs-select-2-5" tabindex="0" aria-setsize="7" aria-posinset="6">
                <span class="text">
                Luces de reserva
                </span>
            </a>
        </li>
        `;
    }

    padreParametros.innerHTML = innerhtml;

}

