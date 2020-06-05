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
    if(pValidacion == 'Dotación')
    {
        innerhtml = `
        <li class="selected active">
            <a role="option" class="dropdown-item active selected" id="bs-select-2-0" tabindex="0" aria-setsize="7" aria-posinset="1" aria-selected="true">
                <span class="text">
              BOTAS DIELECTRICAS DE CUERO 
                </span>
            </a>
        </li>
        <li>
            <a role="option" class="dropdown-item" id="bs-select-2-1" tabindex="0" aria-setsize="7" aria-posinset="2">
                <span class="text">
                    CAMISA
                </span>
            </a>
        </li>
        <li>
            <a role="option" class="dropdown-item" id="bs-select-2-2" tabindex="0" aria-setsize="7" aria-posinset="3">
                <span class="text">
             CAMISETA
                </span>
            </a>
        </li>
        <li>
            <a role="option" class="dropdown-item" id="bs-select-2-3" tabindex="0" aria-setsize="7" aria-posinset="4">
                <span class="text">
                CHAQUETA
                </span>
            </a>
        </li>
        <li>
            <a role="option" class="dropdown-item" id="bs-select-2-4" tabindex="0" aria-setsize="7" aria-posinset="5">
                <span class="text">
               GORRA
                </span>
            </a>
        </li>
        <li>
            <a role="option" class="dropdown-item" id="bs-select-2-5" tabindex="0" aria-setsize="7" aria-posinset="6">
                <span class="text">
                   CANGURO DE HERRAMIENTAS 
                </span>
            </a>
        </li>
        <li>
            <a role="option" class="dropdown-item" id="bs-select-2-6" tabindex="0" aria-setsize="7" aria-posinset="7">
                <span class="text">
             REATA
                </span>
            </a>
        </li>
        <li class="selected active">
        <a role="option" class="dropdown-item active selected" id="bs-select-2-0" tabindex="0" aria-setsize="7" aria-posinset="1" aria-selected="true">
            <span class="text">
          IMPERMEABLE
            </span>
        </a>
    </li>      <li class="selected active">
    <a role="option" class="dropdown-item active selected" id="bs-select-2-0" tabindex="0" aria-setsize="7" aria-posinset="1" aria-selected="true">
        <span class="text">
         BOTAS DE CAUCHO DIELECTRICAS
        </span>
    </a>
</li>
        `;
    }

    if(pValidacion == 'EPPS')
    {
        innerhtml = `
        <li class="selected active">
        <a role="option" class="dropdown-item active selected" id="bs-select-2-0" tabindex="0" aria-setsize="7" aria-posinset="1" aria-selected="true">
            <span class="text">
      GUANTES FACILFLEX
            </span>
        </a>
    </li>
    <li>
        <a role="option" class="dropdown-item" id="bs-select-2-1" tabindex="0" aria-setsize="7" aria-posinset="2">
            <span class="text">
            GUANTES VAQUETA
            </span>
        </a>
    </li>
    <li>
        <a role="option" class="dropdown-item" id="bs-select-2-2" tabindex="0" aria-setsize="7" aria-posinset="3">
            <span class="text">
              PROTECTOR RESPIRATORIO
            </span>
        </a>
    </li>
    <li>
        <a role="option" class="dropdown-item" id="bs-select-2-3" tabindex="0" aria-setsize="7" aria-posinset="4">
            <span class="text">
                GAFAS CON FILTRO UV
            </span>
        </a>
    </li>
    <li>
        <a role="option" class="dropdown-item" id="bs-select-2-4" tabindex="0" aria-setsize="7" aria-posinset="5">
            <span class="text">
                GAFAS TRANSPARENTES
            </span>
        </a>
    </li>
    <li>
        <a role="option" class="dropdown-item" id="bs-select-2-5" tabindex="0" aria-setsize="7" aria-posinset="6">
            <span class="text">
               PROTECTOR AUDITIVO
            </span>
        </a>
    </li>
    <li>
        <a role="option" class="dropdown-item" id="bs-select-2-6" tabindex="0" aria-setsize="7" aria-posinset="7">
            <span class="text">
          CASCO DE SEGURIDAD
            </span>
        </a>
    </li>
    <li>
        <a role="option" class="dropdown-item" id="bs-select-2-6" tabindex="0" aria-setsize="7" aria-posinset="7">
            <span class="text">
                LINTERNA DE MINERO
            </span>
        </a>
    </li>
    <li>
        <a role="option" class="dropdown-item" id="bs-select-2-6" tabindex="0" aria-setsize="7" aria-posinset="7">
            <span class="text">
              BARBUQUEJO
            </span>
        </a>
    </li>
    <li>
    <a role="option" class="dropdown-item" id="bs-select-2-6" tabindex="0" aria-setsize="7" aria-posinset="7">
        <span class="text">
         CHALECO REFLECTIVO
        </span>
    </a>
</li>
        `;
    }

   
    padreParametros.innerHTML = innerhtml;

}

