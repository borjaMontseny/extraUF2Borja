window.onload = () => {
    document.getElementById('reproductor').addEventListener('click', function () {
        // Iniciar la animación
        document.querySelector('.nau').style.animationPlayState = 'running';

        // Reproducir el sonido
        var audio = document.getElementById('audio');
        audio.play();
    });

    // Pausar la animación inicialmente
    document.querySelector('.nau').style.animationPlayState = 'paused';
};  