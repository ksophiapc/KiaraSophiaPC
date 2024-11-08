// JavaScript para interactividad adicional
document.addEventListener('DOMContentLoaded', function() {
    console.log("Página cargada correctamente.");
});
document.addEventListener('DOMContentLoaded', function() {
    const audioPlayer = document.getElementById('audio-player');
    if (audioPlayer) {
        audioPlayer.volume = 0.3;  // Establece el volumen al 30%
    }
});