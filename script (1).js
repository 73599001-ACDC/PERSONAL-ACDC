const envelopeWrapper = document.querySelector('.envelope-wrapper');
const letter = document.querySelector('.letter');

document.addEventListener('click', (e) => {
    // Definimos dónde se hizo clic
    const clickInsideEnvelope = e.target.closest('.envelope-wrapper');
    const clickOnLetterText = e.target.closest('.letter'); // Detecta si clicó en el texto
    
    // CASO 1: ABRIR EL SOBRE
    // Si clicamos en el sobre o el corazón, Y el sobre NO está abierto aún
    if (clickInsideEnvelope && !envelopeWrapper.classList.contains('flap')) {
        
        // 1. Abrir la solapa (flap)
        envelopeWrapper.classList.add('flap');

        // 2. Esperar a que se abra la solapa (0.5s) y luego sacar la carta
        setTimeout(() => {
            letter.classList.add('letter-opening');
        }, 500); // 500ms coincide con la transición CSS del sobre
    }
    
    // CASO 2: CERRAR EL SOBRE
    // Si clicamos en el sobre PERO NO en el texto de la carta (para poder leer tranquilos)
    // O si hacemos clic fuera del sobre
    else if ((clickInsideEnvelope && !clickOnLetterText) || !clickInsideEnvelope) {
        
        // Solo actuamos si el sobre ya estaba abierto
        if (envelopeWrapper.classList.contains('flap')) {
            
            // 1. Bajar la carta primero
            letter.classList.remove('letter-opening');

            // 2. Esperar a que baje la carta (0.5s) y luego cerrar la solapa
            setTimeout(() => {
                envelopeWrapper.classList.remove('flap');
            }, 500); // Esperamos a que la carta baje antes de cerrar la tapa
        }
    }
});