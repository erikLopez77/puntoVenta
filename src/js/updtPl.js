const forms = document.querySelector('#updtForm');

forms.addEventListener('submit', async (e) => {
    e.preventDefault();
    const id= forms.querySelector('input[name="id"]').value;
    const nombre= forms.querySelector('input[name="nombre"]').value;
    const descripcion= forms.querySelector('textarea[name="descripcion"]').value;
    const precio=forms.querySelector('input[name="precio"]').value;
    const categoriaId= forms.querySelector('select[name="categoriaId"]').value;
    console.log("123");
    try {
        const peticion = await fetch(`/usuario/edita-platillo/${id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json', // Indicar que el cuerpo es JSON
            },
            body: JSON.stringify({ id, nombre, descripcion, precio, categoriaId}), // Enviar el ID como JSON
        });
        const respuesta = await peticion.json();
        if (peticion.ok && respuesta.success) {
            await Swal.fire('¡Editado', respuesta.message, 'success');
            window.location.href = '/usuario/vista-menu';
        } else {
            await Swal.fire('¡Error!', respuesta.message, 'error');
            window.location.href = '/usuario/vista-menu'; // Redirigir después de mostrar el mensaje
        }
    } catch (error) {
        console.error('Error:', error);
        Swal.fire('Error', 'Hubo un problema al editar el platillo.', 'error');
    }

})
