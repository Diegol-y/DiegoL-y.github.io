document.getElementById('registration-form').addEventListener('submit', function(event) {
    // nos ayuda a prevenir el envío del formulario por defecto
    event.preventDefault(); 

    // obtenemos los valores del formulario
    // obtenemos el valor del campo de nombre
    var nombre = document.getElementById('name').value; 
    // obtenemos el valor del campo de correo electrónico
    var email = document.getElementById('email').value; 
    // obtenemos el valor del campo de teléfono
    var telefono = document.getElementById('phone').value; 
    // obtenemos el valor del campo de tipo de entrada
    var tipoEntrada = document.getElementById('ticket-type').value; 

    // verificamos si todos los campos están completos
    if (nombre && email && telefono && tipoEntrada) {
        // verificamos el formato del correo electrónico
        // Expresión regular para validar el formato del correo electrónico
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
        
        // verificamos si el correo electrónico coincide con el formato esperado
        if (emailRegex.test(email)) { 
            // verificamos si el teléfono contiene solo números
            if (/^\d+$/.test(telefono)) {
                // Si el formulario está completo y el correo electrónico es válido, actualizar los detalles de registro
                // mostramos los detalles de registro
                document.getElementById('detalles').style.display = 'block'; 
                 // actualizamos el nombre en los detalles de registro
                document.getElementById('nombre-detalles').textContent = nombre;
                // actualizamos el correo electrónico en los detalles de registro
                document.getElementById('email-detalles').textContent = email; 
                // actualizamos el teléfono en los detalles de registro
                document.getElementById('telefono-detalles').textContent = telefono; 
                // actualizamos el tipo de entrada en los detalles de registro
                document.getElementById('tipo-entrada-detalles').textContent = tipoEntrada; 
            } else {
                // mostramos una alerta si el teléfono contiene caracteres no numéricos
                alert('Por favor, introduzca un número válido en el campo de teléfono');
            }
        } else {
            // mostramos una alerta si el correo electrónico no es válido
            alert('Por favor, introduzca un correo electrónico válido');
        }
    } else {
        // mostramos una alerta si algún campo está vacío
        alert('Por favor, complete todos los campos'); 
    }
});
