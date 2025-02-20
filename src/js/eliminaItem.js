const formularios = document.querySelectorAll('.formDelete');

formularios.forEach((formulario) => {
  formulario.addEventListener('submit', (e) => {
    e.preventDefault(); // Evitar el envío automático del formulario

    Swal.fire({
      title: '¿Estás seguro de que deseas eliminar este ítem?',
      text: 'No podrás revertir esta acción',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar'
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          // Enviar la petición para eliminar
          const respuesta = await fetch('/carrito/eliminar', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json', // Indicar que el cuerpo es JSON
            },
            body: JSON.stringify({ id: formulario.querySelector('input[name="id"]').value }), // Enviar el ID como JSON
          });
          const data = await respuesta.json(); // Analizar la respuesta como JSON

          if (respuesta.ok && data.success) {
            // Mostrar éxito y esperar a que el usuario lo cierre
            await Swal.fire('¡Eliminado!', data.message, 'success');
            window.location.reload(); // Recargar la página
          } else {
            throw new Error(data.message || 'Error al eliminar el ítem.');
          }
        } catch (error) {
          console.error('Error:', error);
          Swal.fire('Error', 'Hubo un problema al eliminar el ítem.', 'error');
        }
      }
    });
  });
});


// Seleccionar el formulario de envío de orden
const btnEnviaOrden = document.querySelector('#formOrden');

btnEnviaOrden.addEventListener('submit', (e) => {
  e.preventDefault(); // Evitar que el formulario se envíe automáticamente
  Swal.fire({
    title: '¿Estás seguro de que deseas mandar la orden a cocina?',
    text: 'No podrás revertir esta acción',
    icon: 'question',
    showCancelButton: true,
    confirmButtonText: 'Sí, eliminar',
    cancelButtonText: 'Cancelar'
  }).then(async (result) => {
    // Mostrar un mensaje de confirmación
    if (result.isConfirmed) {
      const respuesta = await fetch('/carrito/mandar-orden', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        //body: new FormData(btnEnviaOrden), // Enviar los datos del formulario
        body: JSON.stringify({ nombre: btnEnviaOrden.querySelector('input[name="nombre"]').value })
      })
      const solicitud = await respuesta.json();
      if (respuesta.ok && solicitud.success) {
        await Swal.fire('¡Enviado!', solicitud.message, 'success');
        window.location.href = '/menu-general'; // Redirige al carrito
      } else {
        await Swal.fire('¡Error!', solicitud.message, 'error');
        window.location.reload(); // recarga
      }
    }
  })
});