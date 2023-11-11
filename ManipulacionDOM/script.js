
// Input: Nombre, Apellido, Matricula, Nota

// Un boton agregar

const form = document.getElementById("studentForm");

form.addEventListener("submit", function(event){
  event.preventDefault();

  let studentFormData = new FormData(form);
  let studentTableRef = document.getElementById("studentTable");
});

// input de la Nota

function validarNota() {
    let notaInput = document.getElementsByName("Nota")[0];
    let valor = notaInput.value;
  
    if (valor.length >= 2 && valor !== '100') {
      notaInput.value = valor.substring(0, 2);
    }
  }