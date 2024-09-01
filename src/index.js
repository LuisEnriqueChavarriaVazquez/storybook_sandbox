// Importar tus componentes desde node_modules
import "@luisenriquechavarriavazquez/bpt-sidebar/index";
import "@luisenriquechavarriavazquez/bpt-stepper/index";
import "@luisenriquechavarriavazquez/bpt-card-basic/index";
import "@luisenriquechavarriavazquez/bpt-card-image/index";
import "@luisenriquechavarriavazquez/bpt-badge/index";
import "@luisenriquechavarriavazquez/bpt-currency-format/index";
import "@luisenriquechavarriavazquez/bpt-button-modal/index";
import "@luisenriquechavarriavazquez/bpt-modal/index";
import "@luisenriquechavarriavazquez/bpt-chips/index";
import "@luisenriquechavarriavazquez/bpt-icon-button/index";
import "@luisenriquechavarriavazquez/bpt-button/index";

//🟡LOS ELEMENTOS MAS USADOS DEBEN IR ABAJO PORQUE ESOS QUEDAN ARRIBA EN EL BUNDLE Y  SON USADOS POR LOS DEMAS COMPONENTES. (SON COMPONENTES DEPENDIENTES DE LOS DE ABAJO)

//Ente mas abajo es mas importante

// Código adicional que puedas necesitar para inicializar la aplicación
document.addEventListener("DOMContentLoaded", () => {
    console.log("Aplicación cargada y lista.");
});
