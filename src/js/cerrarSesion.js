document.addEventListener('DOMContentLoaded', function () {
    const formC = document.querySelector("#frmC");
    if (formC) {
        formC.addEventListener('click', function (event) {
            event.preventDefault();
            Swal.fire({
                title: 'Cerrar sesión',
                text: "¿Estás seguro de que quieres salir?",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Sí, cerrar sesión',
                cancelButtonText: 'Cancelar'
            }).then((result) => {
                if (result.isConfirmed) {
                    window.location.href = "/usuario/cerrar-sesion";
                }
            });
        });
    }
});