
//# RandomGame

//## Variables

let numeroAleatorio;//- Declaramos una variable vacía que contendrá el número aleatorio.
let botonComprobar = document.querySelector('#comprobar');//- Declaramos una variable que contenga el botón del HTML que va a comprobar el número.
let borrarDatos = document.querySelector('.borrarDatos');//- Declaramos una variable que contenga el botón del HTML que va a limpiar el localStorage.
let resultado = document.querySelector('#resultado'); //- Declaramos una variable que contenga el div del HTML que tendrá el texto de resultado.
let estadisticasTexto = document.querySelector('#estadisticas');//- Declaramos una variable que contenga el div del HTML que tendrá el texto de estadísticas
let intentosExitosos = localStorage.getItem('.exitosos') || 0; //- Declaramos una variable que contenga la obtención del valor de "exitosos" almacenado en el localStorage, agregamos un "or" para que se ponga como valor "0" si no existe aún dicha clave.
let intentosFallidos = localStorage.getItem('.fallidos') || 0; //- Declaramos una variable que contenga la obtención del valor de "fallidos" almacenado en el localStorage, agregamos un "or" para que se ponga como valor "0" si no existe aún dicha clave.

//## Funciones

//### Función generadora del número

function generarNumeroAleatorio() { //- Declaramos una función que generará el número aleatorio. //- Le añade como valor a la variable que va a contener dicho número un random como número entero.
    numeroSecreto = Math.floor(Math.random() * 10); 
    console.info(numeroSecreto);
}   

//### Función verificadora de número

function verificarNumero() { //- Declaramos una función que comprobará el número que agreguemos.
    let numeroUsuario = document.querySelector('#numeroUsuario'); //- Declaramos una variable local que coge el valor del input donde el usuario va a escribir su número.
    numeroUsuario = perseInt(numeroUsuario); //- Ese valor lo transformamos en un número entero (parseInt).
    if (numeroUsuario === numeroSecreto) { //- Si el número del usuario es estrictamente igual que el número almacenado en la variable que contiene el número aleatorio:
        intentosExitosos++;//- Aumentamos el valor de la variable que contiene el número de éxitos.
        localStorage.setItem('exitosos', intentosExitosos); //- Guardamos el valor en el localStorage con la clave correspondiente al almacenamiento de éxitos.
        x.innerHTML = //- Modificamos el HTML interno del objeto que contiene el div del HTML para el texto de resultado y agregamos el contenido que queramos. Por ejemplo "¡Muy bien!".
        x.innerHTML =//- Modificamos el HTML interno del objeto que contiene el div del HTML para el texto de estadísticas para actualizar los valores de éxito y de fallidos.
        generarNumeroAleatorio() //- Llamamos a la función generadora de números para generar un nuevo número aleatorio.
    } else if  { //- Si no:
        intentosFallidos++ //- Aumentamos el valor de la variable que contiene el número de fallidos.
        localStorage.setItem('fallidos', intentosFallidos); //- Guardamos el valor en el localStorage con la clave correspondiente al almacenamiento de fallidos.
        x.innerHTML = //- Modificamos el HTML interno del objeto que contiene el div del HTML para el texto de resultado y agregamos el contenido que queramos. Por ejemplo "Fallaste".
        x.innerHTML = //- Modificamos el HTML interno del objeto que contiene el div del HTML para el texto de estadísticas para actualizar los valores de éxito y de fallidos.
    }    
}

 //### Función limpiadora de datos

function borrarDatosFunction () { //- Declaramos una función que se encargará de limpiar los datos del localStorage
        localStorage.clear(); //- Usamos el método de localStorage para limpiar los datos.
        location.reload();//- Utilizamos "location.reload()" para reiniciar la página.
}

//## Listeners

//### Botón comprobar

botonComprobar.addEventListener('click', verificarNumero); //- Creamos un addEventListener para que al hacer click en el botón de comprobar se active la función verificadora de número.

//### Botón limpiar

borrarDatos.addEventListener('click', borrarDatosFunction);//- Creamos un addEventListener para que al hacer click en el botón de limpiar se active la función limpiadora de datos.

//## Códigos de inicio

//> [!NOTE]
//> Recuerda que estos códigos se ponen fuera de funciones para que al iniciar la primera vez comiencen a ocurrir cosas. Por ejemplo que aparezcan las estadisticas sin necesidad de darle al botón de "comprobar".

//- Modificamos el HTML interno del objeto que contiene el div del HTML para el texto de estadísticas para actualizar los valores de éxito y de fallidos.
//- Llamamos la función generadora de números para que nos genere el primer número que el usuario debe adivinar.