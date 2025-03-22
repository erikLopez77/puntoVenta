const formularios = document.querySelectorAll('.formDelete');

formularios.forEach((formulario) => {
  formulario.addEventListener('submit', (e) => {
    e.preventDefault(); // Evitar el envío automático del formulario

    Swal.fire({
      title: '¿Desea eliminar el platillo?',
      text: 'No podrás revertir esta acción',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar',
      timer: 5000, // Cierra automáticamente después de 5 segundos
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          // Enviar la petición para eliminar
          const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
          const respuesta = await fetch('/carrito/eliminar', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json', // Indicar que el cuerpo es JSON
              'X-CSRF-Token': csrfToken
            },
            body: JSON.stringify({ id: formulario.querySelector('input[name="id"]').value }), // Enviar el ID como JSON
          });
          const data = await respuesta.json(); // Analizar la respuesta como JSON

          if (respuesta.ok && data.success) {
            // Mostrar éxito y esperar a que el usuario lo cierre
            await Swal.fire({ title: '¡Eliminado!', text: data.message, icon: 'success', timer: 5000 });
            window.location.reload(); // Recargar la página
          } else {
            throw new Error(data.message || 'Error al eliminar el platillo.');
          }
        } catch (error) {
          console.error('Error:', error);
          Swal.fire('Error', 'Hubo un problema al eliminar el platillo.', 'error');
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
    title: '¿Desea mandar la comanda a cocina?',
    text: 'No podrás revertir esta acción',
    icon: 'question',
    showCancelButton: true,
    confirmButtonText: 'Si, enviar',
    cancelButtonText: 'Cancelar',
    timer: 5000 // Cierra automáticamente después de 5 segundos
  }).then(async (result) => {
    // Mostrar un mensaje de confirmación
    if (result.isConfirmed) {
      const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
      const respuesta = await fetch('/carrito/mandar-orden', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-CSRF-Token': csrfToken
        },
        //body: new FormData(btnEnviaOrden), // Enviar los datos del formulario
        body: JSON.stringify({ mesa: btnEnviaOrden.querySelector('select[name="mesa"]').value })
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