/* 
JavaScript / jQuery
web o pagina: TrabajoT2
autor: Jesús Guirao Melero
fecha: Marzo 2021
resumen:
*/

/*Contador de veces de la pagina*/

//actualizar();

$('#nVeces').text(
  'Has hecho click ' + sessionStorage.contador + ' veces en esta sesión.'
);

function clickCounter() {
  if (sessionStorage.contador) {
    sessionStorage.contador = Number(sessionStorage.contador) + 1;
  } else {
    sessionStorage.setItem('contador', 1);
  }

  $('#nVeces').text(
    'Has hecho click ' + sessionStorage.contador + ' veces en esta sesión.'
  );
}

//Donde me encuentro
// Inicio o actualidad
document.querySelector('body > div > div.migas > ul');
