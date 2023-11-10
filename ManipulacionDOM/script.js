
// Input: Nombre, Apellido, Matricula, Nota

// Un boton agregar

document.getElementById("agregarBtn").addEventListener('click', function(){

    let nombre = getElementsByName("Nombre")[0].value;
    let apellido = getElementsByName("Apellido")[0].value;
    let matricula = getElementsByName("Matricula")[0].value;
    let nota = getElementsByName("Nota")[0].value;

    

});

// input de la Nota

function validarNota() {
    let notaInput = document.getElementsByName("Nota")[0];
    let valor = notaInput.value;
  
    if (valor.length >= 2 && valor !== '100') {
      notaInput.value = valor.substring(0, 2);
    }
  }