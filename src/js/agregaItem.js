const addForm = document.querySelector("#addForm");
addForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const id = addForm.querySelector('input[name="id"]').value;
    const cantidad = addForm.querySelector('select[name="cantidad"]').value;
    const indicaciones = addForm.querySelector('textarea[name="indicaciones"]').value;
    try {
        const solicitud = await fetch(`/ordenar-pedido/${id}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id, cantidad, indicaciones }) // Enviar todos los datos necesarios
        });

        const mensaje = await solicitud.json();

        if (solicitud.ok && mensaje.success) {
            await Swal.fire('¡Orden agregada!', mensaje.message, 'success');
            window.location.href = '/menu-general'; // Redirigir después de mostrar el mensaje
        } else {
            await Swal.fire('¡Error!', mensaje.message || 'No se pudo agregar el ítem', 'error');
            window.location.href = '/menu-general'; // Redirigir después de mostrar el mensaje
        }
    } catch (error) {
        console.error('Error:', error);
        await Swal.fire('¡Error!', 'Hubo un problema al procesar la solicitud', 'error');
        window.location.href = '/menu-general'; // Redirigir después de mostrar el mensaje
    }
})