// Función que lee el contenido de un archivo y lo inserta en un elemento
// HTML. Esta función se usará para cargar el menú y el pie de página.
function cargarFragmento(idElemento, archivo) {
 fetch(archivo)
 .then(respuesta => respuesta.text())
 .then(contenido => {
 document.getElementById(idElemento).innerHTML = contenido;
 })
 .catch(error => console.error(`Error cargando ${archivo}:`, error));
}


// Validación para el formulario de contacto
const formContacto = document.getElementById('formularioContacto');
if (formContacto) {
    formContacto.addEventListener('submit', function(event) {
        event.preventDefault();

        const nombre = document.getElementById('nombre').value;
        const email = document.getElementById('email').value;
        const asunto = document.getElementById('asunto').value;
        const mensaje = document.getElementById('mensaje').value;

        if (!nombre || !email || !asunto || !mensaje) {
            alert('Por favor, completa todos los campos.');
            return;
        }

        alert(`Formulario enviado con éxito:\nNombre: ${nombre}\nEmail: ${email}\nAsunto: ${asunto}\nMensaje: ${mensaje}`);
    });
}

// Validación para el formulario de pago
const formPagar = document.getElementById('formularioPagar');
if (formPagar) {
    formPagar.addEventListener('submit', function(event) {
        event.preventDefault();

        const nombre = document.getElementById('name').value;
        const tarjeta = document.getElementById('number').value;
        const fechaVencimiento = document.getElementById('dueDate').value;
        const cvv = document.getElementById('cvvnumber').value;

        if (!nombre || !tarjeta || !fechaVencimiento || !cvv) {
            alert('Por favor, completa todos los campos.');
            return;
        }

        alert(`Señor(a) ${nombre}, pago realizado con éxito.`);
    });
}