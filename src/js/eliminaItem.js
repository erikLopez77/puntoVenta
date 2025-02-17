console.log('Holaaaaq');

console.log('Hola mundo desde eliminaItem.js');

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
/* const eliminar=documet.querySelector('.formDelete')
      if(eliminar){
        eliminar.forEach((boton)=>{
          boton.addEventListener('submit',async (e)=>{
            e.preventDefault();
            if (confirm('¿Estás seguro de que quieres eliminar este ítem?')) {
              fetch(`/carrito/eliminar/`, {
                method: 'POST',
              })
              .then(response => {
                if (response.ok) {
                  window.location.reload(); // Recarga la página para actualizar el carrito
                } else {
                  alert('Error al eliminar el ítem');
                }
              })
              .catch(error => console.error('Error:', error));
            }
          })
        })
      } */

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