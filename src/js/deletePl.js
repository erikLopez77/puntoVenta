const forms = document.querySelectorAll('.formDelete');

forms.forEach((formulario) => {
    formulario.addEventListener('submit', (e) => {
        e.preventDefault();

        Swal.fire({
            title: '¿Estás de acuerdo con eliminar este platillo?',
            text: 'No se podrá revertir esta acción',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Si, eliminar',
            cancelButtonText: 'Cancelar'
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    const peticion = await fetch('/usuario/elimina-platillo', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json', // Indicar que el cuerpo es JSON
                        },
                        body: JSON.stringify({ id: formulario.querySelector('input[name="id"]').value }), // Enviar el ID como JSON
                    });
                    const respuesta = await peticion.json();
                    if (peticion.ok && respuesta.success) {
                        await Swal.fire('¡Eliminado', respuesta.message, 'success');
                        window.location.reload();
                    } else {
                        throw new Error(respuesta.message || 'Error al eliminar el ítem.');
                    }
                } catch (error) {
                    console.error('Error:', error);
                    Swal.fire('Error', 'Hubo un problema al eliminar el ítem.', 'error');
                }
            }
        })
    })
})