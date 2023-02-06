
//== Variables
const marca = document.querySelector('#marca');
const year = document.querySelector('#year');
const minimo = document.querySelector('#minimo');
const maximo = document.querySelector('#maximo');
const puertas = document.querySelector('#puertas');
const transmision = document.querySelector('#transmision');
const color = document.querySelector('#color');


const resultado = document.querySelector('#resultado'); // Contenedor para los resultados
const max = new Date().getFullYear();  // Devuelve el año actual
const min = max - 10;

// Generar un objeto con los datos de la busqueda
const datosBusqueda = {
    marca: '',
    year: '',
    minimo: '',
    maximo: '',
    puertas: '',
    transmision: '',
    color: '',
}






//== Eventos
document.addEventListener('DOMContentLoaded', () =>{ // Carga el JS despues del HTML y CSS
    mostrarAutos(); // Muestra los autos al cargar

    // Llena las opciones de años
    llenarSelect();
})

// Event listener para los selet de busqueda
marca.addEventListener('change', e =>{
    datosBusqueda.marca = e.target.value;
    filtrarAuto();
}) 
year.addEventListener('change', e =>{
    datosBusqueda.year = parseInt(e.target.value); // Como los años del arreglo 'autos' estan en formato numero, se le hace un casting 
    filtrarAuto();                                 // para la conversion de string a entero.
}) 
minimo.addEventListener('change', e =>{
    datosBusqueda.minimo = e.target.value;
}) 
maximo.addEventListener('change', e =>{
    datosBusqueda.maximo = e.target.value;
}) 
puertas.addEventListener('change', e =>{
    datosBusqueda.puertas = e.target.value;
}) 
transmision.addEventListener('change', e =>{
    datosBusqueda.transmision = e.target.value;
}) 
color.addEventListener('change', e =>{
    datosBusqueda.color = e.target.value;
    console.log(datosBusqueda)
}) 


//== Funciones
function mostrarAutos(autos){    // Esta funcion recorre el arreglo de autos con 'auto' como referencia a cada elemento del arreglo. Crea un <p>     para mostrar cada auto. Le pasa los datos del auto al <p> y manda al HTML cada resutado                   
    autos.forEach( auto => {  
        const autosHTML = document.createElement('P'); 

        const {marca, modelo, years, puertas, transmision, precio, color} = auto;
        autosHTML.textContent = `
            ${marca} ${modelo} - ${years} - ${puertas} Puertas - Transmision: ${transmision} - Precio: ${precio} - Color: ${color}
        `;

        resultado.appendChild(autosHTML);
    })
}

// Genera los años del Select
function llenarSelect(){
    for( let i = max; i >= min; i--){
        const opcion = document.createElement('option');
        opcion.value = i; // Esto es necesario para la hora de hacer las busquedas
        opcion.textContent = i; // El valor que muestra por pantalla
        year.appendChild(opcion); // Agrega las opciones de años al select
    }    

}

// Funcion que filtra en base a la busqueda
function filtrarAuto(){
    const resultado = autos.filter(filtrarMarca).filter(filtrarYear);

    // console.log(resultado);
    mostrarAutos(resultado);
}

function filtrarMarca(auto){
    const {marca} = datosBusqueda;
    if(marca){        // Condicion para asegurar que se haya seleccionado una opcion
        return auto.marca === marca; // Retorna todos los autos del arreglo original con la marca igual que la opcion seleccionada
    }
    return auto; // Para mantener la referencia con todos los valores orginales que aun no han sido filtrados
}

function filtrarYear(auto){
    const {year} = datosBusqueda;
    if(year){
        return auto.year === year;
    }
    return auto;
}