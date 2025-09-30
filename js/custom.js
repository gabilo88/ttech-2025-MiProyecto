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




// Capturar el evento submit del formulario
document.getElementById('formularioContacto').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío automático del formulario

    // Obtener los datos del formulario
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const asunto = document.getElementById('asunto').value;
    const mensaje = document.getElementById('mensaje').value;

    // Validar los datos (opcional)
    if (!nombre || !email || !asunto || !mensaje ) {
        alert('Por favor, completa todos los campos.');
        return;
    }

    // Enviar el formulario 
    alert(`Formulario enviado con éxito: 
           Nombre: ${nombre}, 
           Email: ${email}, 
           Asunto: ${asunto}, 
           Mensaje: ${mensaje}`);
});