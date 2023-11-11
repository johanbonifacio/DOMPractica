
// Input: Nombre, Apellido, Matricula, Nota

// Un boton agregar

const form = document.getElementById("studentForm");

form.addEventListener("submit", function(event){
  event.preventDefault();

  let studentFormData = new FormData(form);
  let studentTableRef = document.getElementById("studentTable");
  let newStudentRowRef = studentTableRef.insertRow(-1);

  let newFNameCellRef = newStudentRowRef.insertCell(0);
  let newLNameCellRef = newStudentRowRef.insertCell(1);
  let newIDCellRef = newStudentRowRef.insertCell(2);
  let newGradeCellRef = newStudentRowRef.insertCell(3);
  
  newFNameCellRef.textContent = studentFormData.get("studentFName");
  newLNameCellRef.textContent = studentFormData.get("studentLName");
  newIDCellRef.textContent = studentFormData.get("studentID");
  newGradeCellRef.textContent = studentFormData.get("studentGrade");

  form.reset();
});

// input de la Nota

function validarNota() {
    let notaInput = document.getElementsByName("Nota")[0];
    let valor = notaInput.value;
  
    if (valor.length >= 2 && valor !== '100') {
      notaInput.value = valor.substring(0, 2);
    }
  }

  