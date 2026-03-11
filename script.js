
let docentes = [];


let indiceEditando = -1;


const btnGuardar  = document.getElementById('btnGuardar');
const btnCancelar = document.getElementById('btnCancelar');
const cuerpoTabla = document.getElementById('cuerpoTabla');
const mensajeVacio = document.getElementById('mensajeVacio');


function leerFormulario() {
  return {
    tipoDocumento  : document.getElementById('tipoDocumento').value.trim(),
    nombre         : document.getElementById('nombre').value.trim(),
    apellido       : document.getElementById('apellido').value.trim(),
    fechaNacimiento: document.getElementById('fechaNacimiento').value,
    nivelEstudios  : document.getElementById('nivelEstudios').value,
    area           : document.getElementById('area').value,
    grado          : document.getElementById('grado').value,
    eps            : document.getElementById('eps').value.trim(),
    salario        : document.getElementById('salario').value.trim(),
  };
}


function validarFormulario(docente) {
  for (const campo in docente) {
    if (!docente[campo]) {
      alert('Por favor, completa todos los campos antes de guardar.');
      return false;
    }
  }
  return true;
}


function limpiarFormulario() {
  document.getElementById('tipoDocumento').value   = '';
  document.getElementById('nombre').value          = '';
  document.getElementById('apellido').value        = '';
  document.getElementById('fechaNacimiento').value = '';
  document.getElementById('nivelEstudios').value   = '';
  document.getElementById('area').value            = '';
  document.getElementById('grado').value           = '';
  document.getElementById('eps').value             = '';
  document.getElementById('salario').value         = '';
}


function renderizarTabla() {
  
  cuerpoTabla.innerHTML = '';

  
  if (docentes.length === 0) {
    mensajeVacio.style.display = 'block';
    return;
  }
  mensajeVacio.style.display = 'none';

  
  docentes.forEach((docente, index) => {
    const fila = document.createElement('tr');

    fila.innerHTML = `
      <td>${index + 1}</td>
      <td>${docente.tipoDocumento}</td>
      <td>${docente.nombre}</td>
      <td>${docente.apellido}</td>
      <td>${docente.fechaNacimiento}</td>
      <td>${docente.nivelEstudios}</td>
      <td>${docente.area}</td>
      <td>${docente.grado}</td>
      <td>${docente.eps}</td>
      <td>$${Number(docente.salario).toLocaleString('es-CO')}</td>
      <td>
        <button class="btn-edit"   onclick="editarDocente(${index})"> Editar</button>
        <button class="btn-delete" onclick="eliminarDocente(${index})"> Eliminar</button>
      </td>
    `;

    cuerpoTabla.appendChild(fila);
  });
}


btnGuardar.addEventListener('click', function () {
  const docente = leerFormulario();

  if (!validarFormulario(docente)) return;

  if (indiceEditando === -1) {
    
    docentes.push(docente);
  } else {
    
    docentes[indiceEditando] = docente;
    indiceEditando = -1;
    btnGuardar.textContent = 'Guardar Docente';
    btnCancelar.style.display = 'none';
  }

  limpiarFormulario();
  renderizarTabla();
});


function editarDocente(index) {
  const docente = docentes[index];

  document.getElementById('tipoDocumento').value   = docente.tipoDocumento;
  document.getElementById('nombre').value          = docente.nombre;
  document.getElementById('apellido').value        = docente.apellido;
  document.getElementById('fechaNacimiento').value = docente.fechaNacimiento;
  document.getElementById('nivelEstudios').value   = docente.nivelEstudios;
  document.getElementById('area').value            = docente.area;
  document.getElementById('grado').value           = docente.grado;
  document.getElementById('eps').value             = docente.eps;
  document.getElementById('salario').value         = docente.salario;

  
  indiceEditando = index;
  btnGuardar.textContent    = 'Actualizar Docente';
  btnCancelar.style.display = 'inline-block';

  
  document.querySelector('.form-card').scrollIntoView({ behavior: 'smooth' });
}


function eliminarDocente(index) {
  const docente = docentes[index];
  const confirmar = confirm(`¿Seguro que deseas eliminar a ${docente.nombre} ${docente.apellido}?`);

  if (confirmar) {
    docentes.splice(index, 1);

    
    if (indiceEditando === index) {
      cancelarEdicion();
    }

    renderizarTabla();
  }
}


btnCancelar.addEventListener('click', cancelarEdicion);

function cancelarEdicion() {
  indiceEditando            = -1;
  btnGuardar.textContent    = 'Guardar Docente';
  btnCancelar.style.display = 'none';
  limpiarFormulario();
}


renderizarTabla();