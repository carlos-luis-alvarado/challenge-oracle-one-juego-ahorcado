let botonGuardar = document.querySelector('.boton-guardar')
let i = (localStorage.length==0)?0:localStorage.length;
botonGuardar.addEventListener('click',e=>{
    e.preventDefault()
    let agregarPalabra = document.querySelector('.agregar-palabra').value
    if(agregarPalabra.length<=8){
        console.log(agregarPalabra);
        localStorage.setItem(i,agregarPalabra)
    }
    else{
        console.log('Palabra no valida');
    }
    window.location.href='../pages/juego.html'
})