document.addEventListener('DOMContentLoaded', function() {
    // Obtener elementos de los logos y códigos de barras
    const plinLogo = document.getElementById('plin-logo');
    const yapeLogo = document.getElementById('yape-logo');
    const plinBarcode = document.getElementById('plin-barcode');
    const yapeBarcode = document.getElementById('yape-barcode');
    const clockElement = document.getElementById('clock');

    // Función para actualizar el reloj
    function updateClock() {
        const now = new Date();
        const hours = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');
        const seconds = now.getSeconds().toString().padStart(2, '0');
        clockElement.textContent = `${hours}:${minutes}:${seconds}`;
    }

    // Actualizar el reloj cada segundo
    setInterval(updateClock, 1000);
    updateClock(); // Inicializar al cargar la página

    // Mostrar el código de barras al pasar el mouse sobre el logo de Plin
    plinLogo.addEventListener('mouseenter', function() {
        plinBarcode.style.display = 'block';
    });
    plinLogo.addEventListener('mouseleave', function() {
        plinBarcode.style.display = 'none';
    });

    // Mostrar el código de barras al pasar el mouse sobre el logo de Yape
    yapeLogo.addEventListener('mouseenter', function() {
        yapeBarcode.style.display = 'block';
    });
    yapeLogo.addEventListener('mouseleave', function() {
        yapeBarcode.style.display = 'none';
    });
});