/* 
JavaScript / jQuery
web o pagina:
autor:
fecha:
resumen:
*/

/*Contador de veces de la pagina*/

document.getElementById("nVeces").innerHTML = "Has visitado   "+sessionStorage.clickcount + " pagina(s)";
function clickCounter() {
    if(typeof(Storage) !== "undefined") {
      if (sessionStorage.clickcount) {
        sessionStorage.clickcount = Number(sessionStorage.clickcount)+1;
      } else {
        sessionStorage.clickcount = 1;
      }
      document.getElementById("nVeces").innerHTML = "Has visitado nuestra pagina " + sessionStorage.clickcount + " veces.";
    } else {
      document.getElementById("nVeces").innerHTML = "Sorry, Tu navegador no soporta web storage...";
    }
  }