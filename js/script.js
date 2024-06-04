window.onload = () => {
    // Selecciona el botó pel seu ID
    const botonReproductor = document.getElementById('reproductorSo');

    // Crea un nou objecte Audio i estableix la ruta de l'arxiu que referència
    const audio = new Audio('MULTIMEDIA/Happy_Airlines.mp3');

    // Inicialitza el text del botó
    botonReproductor.textContent = 'PLAY MUSIC';

    // Afegeix un esdeveniment de clic al botó
    botonReproductor.addEventListener('click', () => {
        // Comprova si l'àudio està en pausa
        if (audio.paused) {
            // Reprodueix l'arxiu d'àudio si està en pausa
            console.log("Musica sonant");
            audio.play();
            // Canvia el text del botó a "PAUSE MUSIC"
            botonReproductor.textContent = 'PAUSE MUSIC';
        } else {
            // Pausa l'arxiu d'àudio si està en reproducció
            console.log("Musica pausada");
            audio.pause();
            // Canvia el text del botó a "PLAY MUSIC"
            botonReproductor.textContent = 'PLAY MUSIC';
        }
    });
};  