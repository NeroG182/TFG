document.addEventListener('DOMContentLoaded', function() {


    eventListeners();
});

function eventListeners() {
    const movilmenu = document.querySelector('.movil-menu');

    movilmenu.addEventListener('click', navegacionResponsive);

    }

function navegacionResponsive() {
    const navegacion = document.querySelector('.navegacion');
    
    navegacion.classList.toggle('mostrar');
    //Hace lo mismo que esto
    /*if(navegacion.classList.contains('mostrar')) {
        navegacion.classList.remove('mostrar');
    }else {
        navegacion.classList.add('mostrar');
    }*/
}
