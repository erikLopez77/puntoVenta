
// Seleccionar todos los formularios con la clase .formDelete
const formularios = document.querySelectorAll('.formDelete');

formularios.forEach((formulario) => {
    formulario.addEventListener('submit', (e) => {
        e.preventDefault(); // Evitar que el formulario se envíe automáticamente

        // Mostrar un mensaje de confirmación
        const confirmacion = confirm('¿Estás seguro de que deseas eliminar este ítem?');

        if (confirmacion) {
            formulario.submit(); // Enviar el formulario si el usuario confirma
        }
    });
});

const btnEnviaOrden=document.querySelector();

       /*  function enviarOrden() {
            if (confirm('¿Estás seguro de que quieres enviar la orden a cocina?')) {
              fetch('/carrito/enviar', {
                method: 'POST',
              })
              .then(response => {
                if (response.ok) {
                  window.location.href = '/menu-general'; // Redirige al menú general
                } else {
                  alert('Error al enviar la orden');
                }
              })
              .catch(error => console.error('Error:', error));
            }
          } */