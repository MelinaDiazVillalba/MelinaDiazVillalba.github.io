let lista = document.querySelector('#proyectosLista');
let items = lista.childElementCount;
let seccionProyectos= document.querySelector('#proyectos');

if(items<=0){
    seccionProyectos.style.display= 'none';
}