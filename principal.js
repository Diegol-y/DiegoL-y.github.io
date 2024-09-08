const loginForm = document.getElementById('loginForm');
const mainPage = document.getElementById('mainPage');
const loginButton = document.getElementById('button'); 
const audioElement = document.getElementById('miAudio');
const miButon2 = document.getElementById('miBoton2');

function mostrarImagen() {
    var imagenContenedor = document.getElementById('imagenContenedor');
    var cerrarBoton = document.getElementById('cerrarBoton');
    imagenContenedor.style.display = 'flex';
    cerrarBoton.style.display = 'flex';
}

function cerrarImagen() {
    var imagenContenedor = document.getElementById('imagenContenedor');
    var cerrarBoton = document.getElementById('cerrarBoton');
    imagenContenedor.style.display = 'none';
    cerrarBoton.style.display = 'flex';
}

function mostrarImagen2() {
    var imagenContenedor2 = document.getElementById('imagenContenedor2');
    var cerrarBoton2 = document.getElementById('cerrarBoton2');
    imagenContenedor2.style.display = 'flex';
    cerrarBoton2.style.display = 'flex';
}

function cerrarImagen2() {
    var imagenContenedor2 = document.getElementById('imagenContenedor2');
    var cerrarBoton2 = document.getElementById('cerrarBoton2');
    imagenContenedor2.style.display = 'none';
    cerrarBoton2.style.display = 'flex';
}



    loginButton.addEventListener('click', function (event) {
    event.preventDefault();



    
        loginForm.style.display = 'none';
        mainPage.style.display = 'block';
        audioElement.play();
        const frases = [
            { texto: "¡Toca el pastel!", texto2: "¡Toca el pastel!", texto3: "¡Toca el pastel!", texto4: "¡Toca el pastel!", duracion: 9500 }, 
            { texto: "Estas son las mañanitas", texto2:"Estas son las mañanitas", texto3:"Estas son las mañanitas", texto4:"Estas son las mañanitas", duracion: 3500 },
            { texto: "Que cantaba el rey david", texto2: "Que cantaba el rey david", texto3: "Que cantaba el rey david", texto4: "Que cantaba el rey david", duracion: 4000 }, 
            { texto: "Hoy por ser dia de tu santo", texto2: "Hoy por ser dia de tu santo", texto3: "Hoy por ser dia de tu santo", texto4: "Hoy por ser dia de tu santo", duracion: 4000 }, 
            { texto: "Te las cantamos a ti.", texto2: "Te las cantamos a ti.", texto3: "Te las cantamos a ti.", texto4: "Te las cantamos a ti.", duracion: 3500 }, 
            { texto: "Despierta, mi bien, despierta", texto2: "Despierta, mi bien, despierta", texto3: "Despierta, mi bien, despierta", texto4: "Despierta, mi bien, despierta", duracion: 4000 }, 
            { texto: "Mira que ya amaneció.", texto2: "Mira que ya amaneció.",  texto3: "Mira que ya amaneció.", texto4: "Mira que ya amaneció.", duracion: 5500 },
            { texto: "Ya los pajaritos cantan", texto2: "Ya los pajaritos cantan", texto3: "Ya los pajaritos cantan", texto4: "Ya los pajaritos cantan", duracion: 5000 }, 
            { texto: "La luna ya se metió", texto2: "La luna ya se metió", texto3: "La luna ya se metió", texto4: "La luna ya se metió", duracion: 4500 }, 
            { texto: ".............", texto2: ".............", texto3: ".............", texto4: ".............", duracion: 2000 }, 
            { texto: "Que linda está la manãna",  texto2: "Que linda está la manãna", texto3: "Que linda está la manãna", texto4: "Que linda está la manãna", duracion: 4500 }, 
            { texto: "En que vengo a saludarte", texto2: "En que vengo a saludarte", texto3: "En que vengo a saludarte", texto4: "En que vengo a saludarte", duracion: 4500 }, 
            { texto: "Venimos todos con gusto", texto2: "Venimos todos con gusto", texto3: "Venimos todos con gusto", texto4: "Venimos todos con gusto", duracion: 4500 }, 
            { texto: "Y placer a felicitarte.", texto2: "Y placer a felicitarte.", texto3: "Y placer a felicitarte.", texto4: "Y placer a felicitarte.", duracion: 5000 }, 
            { texto: "El dia en que tu naciste", texto2: "El dia en que tu naciste", texto3: "El dia en que tu naciste", texto4: "El dia en que tu naciste", duracion: 3500 }, 
            { texto: "Nacieron todas las flores", texto2: "Nacieron todas las flores", texto3: "Nacieron todas las flores", texto4: "Nacieron todas las flores", duracion: 5000 }, 
            { texto: "En la fila del bautizmo", texto2: "En la fila del bautizmo", texto3: "En la fila del bautizmo", texto4: "En la fila del bautizmo", duracion: 4600 }, 
            { texto: "Cantaron los ruiseñores",  texto2: "Cantaron los ruiseñores", texto3: "Cantaron los ruiseñores", texto4: "Cantaron los ruiseñores", duracion: 5000 }, 
            { texto: ".............", texto2: ".............", texto3: ".............", texto4: ".............", duracion: 1000 }, 
            { texto: "Ya viene amaneciendo", texto2: "Ya viene amaneciendo", texto3: "Ya viene amaneciendo", texto4: "Ya viene amaneciendo", duracion: 4500 }, 
            { texto: "Ya la luz del dia nos dio",  texto2: "Ya la luz del dia nos dio", texto3: "Ya la luz del dia nos dio", texto4: "Ya la luz del dia nos dio", duracion: 4000 },
            { texto: "Levántate de mañana", texto2: "Levántate de mañana", texto3: "Levántate de mañana", texto4: "Levántate de mañana", duracion: 6000 }, 
            { texto: "Mira que ya amaneció", texto2: "Mira que ya amaneció", texto3: "Mira que ya amaneció", texto4: "Mira que ya amaneció", duracion: 5000 }, 
            { texto: "¡¡¡¡Felicidades",  texto2: "laura!!!!", texto3: "¡¡¡¡Felicidades", texto4: "carolina!!!!", duracion: 7500 }, 
            { texto: "La cumpleañera mas preciosa",  texto2: "¡Feliz cumpleaños, hermosa!", texto3: "La cumpleañera mas preciosa", texto4: "¡Feliz cumpleaños, hermosa!", duracion: 7500 }, 
            { texto: "Si yo pudiera bajarte", texto2: "Si yo pudiera bajarte", texto3: "Si yo pudiera bajarte", texto4: "Si yo pudiera bajarte", duracion: 4000 }, 
            { texto: "Las estrellas y un lucero", texto2: "Las estrellas y un lucero", texto3: "Las estrellas y un lucero", texto4: "Las estrellas y un lucero", duracion: 5000 }, 
            { texto: "Para poder demostrarte", texto2: "Para poder demostrarte", texto3: "Para poder demostrarte", texto4: "Para poder demostrarte", duracion: 4000 }, 
            { texto: "Lo mucho que yo te quiero", texto2: "Lo mucho que yo te quiero", texto3: "Lo mucho que yo te quiero", texto4: "Lo mucho que yo te quiero",  duracion: 5000 }, 
            { texto: "Con jazmines y flores", texto2: "Con jazmines y flores", texto3: "Con jazmines y flores", texto4: "Con jazmines y flores", duracion: 4500 }, 
            { texto: "Este dia quiero acordar", texto2: "Este dia quiero acordar", texto3: "Este dia quiero acordar", texto4: "Este dia quiero acordar", duracion: 5000 }, 
            { texto: "Hoy por ser dia de tu santo", texto2: "Hoy por ser dia de tu santo", texto3: "Hoy por ser dia de tu santo", texto4: "Hoy por ser dia de tu santo", duracion: 5000 },
            { texto: "Te venimos a cantar.",  texto2: "Te venimos a cantar.", texto3: "Te venimos a cantar.", texto4: "Te venimos a cantar.", duracion: 5000 }, 
            { texto: "¿Ya tocaste el pastel?",  texto2: "¿Ya tocaste el pastel?", texto3: "¿Ya tocaste el pastel?", texto4: "¿Ya tocaste el pastel?", duracion: 5000 }, 
          ];
          
          
          const fraseCambiante = document.getElementById("frase-cambiante");
          const fraseCambiante2= document.getElementById("frase-cambiante2");
          const fraseCambiante3= document.getElementById("frase-cambiante3");
          const fraseCambiante4= document.getElementById("frase-cambiante4");
          
          let indiceFrase = 0;
          let indiceFrase2=0;
          let indiceFrase3=0;
          let indiceFrase4=0;
          
          function cambiarFrase() {
            fraseCambiante.textContent = frases[indiceFrase].texto;
            fraseCambiante2.textContent = frases[indiceFrase].texto2;
            fraseCambiante3.textContent = frases[indiceFrase].texto3;
            fraseCambiante4.textContent = frases[indiceFrase].texto4;
            const duracion = frases[indiceFrase].duracion;
            setTimeout(cambiarFrase, duracion); 
            indiceFrase = (indiceFrase + 1) % frases.length;
            indiceFrase2 = (indiceFrase2 + 1) % frases.length;
            indiceFrase3 = (indiceFrase3 + 1) % frases.length;
            indiceFrase4 = (indiceFrase4 + 1) % frases.length;
          }
          
          cambiarFrase();
 
});