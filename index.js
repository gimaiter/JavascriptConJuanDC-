

//Eventos en Javascript

const h1 = document.querySelector("h1");
const form = document.querySelector("#form");
const input1 = document.querySelector("#calculo1");
const input2 = document.querySelector("#calculo2");
const boton = document.querySelector("#botonCalculador");
const pResult = document.getElementById("sumaResultado");

/*function sumarInputs()    
    {
       const suma = parseInt(input1.value) + parseInt(input2.value);
       pResult.innerText = "Resultado: " + suma;
    }*/

//boton.addEventListener("click", sumarInputs ;

form.addEventListener("submit", sumarInputs);

function sumarInputs(evento)    
    {
       evento.preventDefault();
       const suma = parseInt(input1.value) + parseInt(input2.value);
       pResult.innerText = "Resultado: " + suma;
    }

/*onchange="" (para escuchar eventos en un input, podemos mandar 
a llamar una funcion por su nombre desde html con ella) HTML*/

/*onclick="" (para escuchar eventos en un button , podemos mandar 
a llamar una funcion por su nombre desde html con ella) HTML*/

/*placeholder="" (para escribir un texto predeterminado en un input 
de html) HTML*/

/*.value nos da el valor del input(o como lo hayamos nombrado ya que puede 
ser una variable(el valor siempre va a ser string))*/

// +, parseInt() y Number() convierten un string en un number

/*elemento.addEvenListener("nombreDelEventoPredEj:click", funcionYaCreadaSinParentesis); Se utiliza 
para añadir un evento al elemento que le pasemos como parametro*/

/*variableDeForm.addEventListener("submit", sumarInputs); en caso de que coloquemos el
la funcion(Ejemplo: sumarInputs) en ultimo en un formulario*/

/*variableDeForm.addEventListener("submit", sumarInputs);

function sumarInputs(evento)    
    {
       evento.preventDefault();
       instruccion;
    }

    Para que sirve .preventDefault()? para evitar la recarga de pagina en caso
    de que tengamos una funcion que nos da un resultado dentro de un evento

El ultimo boton dentro de un formulario de HTML predeterminadamente se 
vuelve type="submit"
Para evitar esa predeterminacion se coloca manualmente type="button"
*/


//BUSCA MAS EVENTOS Y PRUEBALOS
















