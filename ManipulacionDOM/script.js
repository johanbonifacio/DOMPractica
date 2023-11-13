
// Input: Nombre, Apellido, Matricula, Nota

// Un boton agregar
const form = document.getElementById("studentForm");
//
let editingRow;
let studentTableRef = document.getElementById("studentTable");
let editButton

form.addEventListener("submit", function(event){
  event.preventDefault();
  let studentFormData = new FormData(form);

  let newStudentRowRef = studentTableRef.insertRow();
  let newFNameCellRef = newStudentRowRef.insertCell(0);
  let newLNameCellRef = newStudentRowRef.insertCell(1);
  let newIDCellRef = newStudentRowRef.insertCell(2);
  let newAsigntrCellRef = newStudentRowRef.insertCell(3);
  let newGradeCellRef = newStudentRowRef.insertCell(4);
  
// Guardamos los datos del alumno en las celdas correspondientes

newFNameCellRef.textContent = studentFormData.get("studentFName");
  newLNameCellRef.textContent = studentFormData.get("studentLName");
  newIDCellRef.textContent = studentFormData.get("studentID");
  newAsigntrCellRef.textContent = studentFormData.get("StudentAsignature")
  newGradeCellRef.textContent = studentFormData.get("studentGrade");

  form.reset();
});

// input de la Nota
function validarNota() {
    let notaInput = document.getElementsByName("studentGrade")[0];
    let valor = notaInput.value;
  
    if (valor.length >= 2 && valor !== '100') {
      notaInput.value = valor.substring(0, 2);
    }
  }

  