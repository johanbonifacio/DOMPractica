
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


  //boton de editar
editButton = document.createElement("button");
editButton.textContent = "Editar"
editButton.classList.add("editButton")

  //  botón de eliminar 
  let deleteButton = document.createElement("button");
  deleteButton.textContent = "Eliminar";
  deleteButton.classList.add("deleteButton")

  // Insertando los botones en una nueva celda de la fila

  let editCell = newStudentRowRef.insertCell(5);
  let deleteCell = newStudentRowRef.insertCell(6);
  editCell.appendChild(editButton);
  deleteCell.appendChild(deleteButton);  

form.reset()
});

document.addEventListener("click", function(event) {
  if (event.target.textContent === "Editar") {
    let rowIndex = event.target.parentNode.parentNode.rowIndex;
    let row = studentTableRef.rows[rowIndex];

    editingRow = row;
  
  // Basicamente se toman el node padre que es el <tr> y captura los datos de la tabla y los pone de nuevo
 // en el formulario para ser editados.

   document.getElementById('Nombre').value = row.cells[0].textContent;
 document.getElementById('Apellido').value = row.cells[1].textContent;
document.getElementById('Matricula').value = row.cells[2].textContent;
  document.getElementById('Materia').value = row.cells[3].textContent;
     document.getElementById('Nota').value = row.cells[4].textContent;
  
     actualizar.style.display ="block";
     agregarBtn.disabled = true;

   }
   });


    let actualizar = document.getElementById("UpdateBtn")    
  actualizar.style.display= "none";
    actualizar.onclick=()=>{

      if(editingRow){
      
       studentTableRef.deleteRow(editingRow.rowIndex)

      const updateName = document.getElementById('Nombre').value;
     const updateLname   = document.getElementById('Apellido').value;
      const updateId= document.getElementById('Matricula').value;
       const updateAsigntr= document.getElementById('Materia').value;
       const updateGrade = document.getElementById('Nota').value;
       
       editingRow.cells[0].textContent = updateName;
       editingRow.cells[1].textContent = updateLname;
       editingRow.cells[2].textContent = updateId;
       editingRow.cells[3].textContent= updateAsigntr;
       editingRow.cells[4].textContent= updateGrade;

       actualizar.style.display = "none";
       agregarBtn.disabled = false;
         } 
        }

    
// input de la Nota
function validarNota() {
    let notaInput = document.getElementsByName("studentGrade")[0];
    let valor = notaInput.value;
  
    if (valor.length >= 2 && valor !== '100') {
      notaInput.value = valor.substring(0, 2);
    }
  }

  