let botonGuardar = document.querySelector('.boton-guardar')
let i = (localStorage.length == 0) ? 0 : localStorage.length;
botonGuardar.addEventListener('click', e => {
    e.preventDefault()
    let agregarPalabra = document.querySelector('.agregar-palabra').value
    if (agregarPalabra.length <= 8 && agregarPalabra.length>=3) {
        console.log(agregarPalabra);
        localStorage.setItem(i, agregarPalabra)
        window.location.href = '../pages/juego.html'
    }
    else {
        Swal.fire(
            'Palabra no valida',
            'Ingresa una palabra que tenga como maximo 8 caracteres',
            'error'
        )
    }
    
})