// const canvas = document.getElementById('tutorial');
// const ctx = canvas.getContext('2d');
// ctx.lineWidth = 5
// ctx.fillStyle = "rgb(200,0,0)";

// ctx.lineCap = 'round';

// //base
// let movimietosPincel = [[150, 400, 350, 400], [200, 400, 200, 100], [200, 100, 300, 100], [300, 100, 300, 170], [300, 200, 30, 0], [300, 230, 300, 300], [300, 300, 270, 340], [300, 300, 330, 340], [300, 250, 270, 280], [300, 250, 330, 280]]

// ctx.moveTo(150,400)
// ctx.lineTo(350,400)
// ctx.stroke()
// //palo lateral
// ctx.moveTo(200,400)
// ctx.lineTo(200,100)
// ctx.stroke()
// //palo superior
// ctx.moveTo(200,100)
// ctx.lineTo(300,100)
// ctx.stroke()
// //cuerda
// ctx.moveTo(300,100)
// ctx.lineTo(300,170)
// ctx.stroke()
// //cabeza
// ctx.beginPath();
// ctx.arc(300, 200, 30, 0, Math.PI * 2, true); // Círculo externo

// ctx.stroke()

// //cuerpo
// ctx.moveTo(300,230)
// ctx.lineTo(300,300)
// ctx.stroke()

// //pie izquiedo
// ctx.lineTo(270,340)
// ctx.stroke()
// //pie derecho
// ctx.moveTo(300,300)

// ctx.lineTo(330,340)
// ctx.stroke()



// //brazo izquierdo
// ctx.moveTo(300,250)

// ctx.lineTo(270,280)
// ctx.stroke()


// //brazo derecho
// ctx.moveTo(300,250)

// ctx.lineTo(330,280)
// ctx.stroke()

// function graficar([xm, ym, xp, yp], intento) {
//     if (intento !== 4) {
//         ctx.moveTo(xm, ym)
//         ctx.lineTo(xp, yp)
//         ctx.stroke()
//     } else {
//         ctx.beginPath();
//         ctx.arc(xm, ym, xp, yp, Math.PI * 2, true); // Círculo externo
//         ctx.stroke()
//     }


// }
// const intentos = 8
// let intento = 0;


// let palabra = palabras[Math.floor(Math.random() * (palabras.length))]
// console.log(palabra);
// // console.log(Math.random()*(palabras.length-1);
// let guiones = document.querySelector('.guiones')
// let letras = document.querySelector('.letras')
// for (let i = 0; i < palabra.length; i++) {
//     let div = document.createElement('div')
//     let divLetra = document.createElement('div')
//     divLetra.textContent = " "
//     div.textContent = ' '
//     div.classList.add("guion")

//     divLetra.classList.add('letraJuego')
//     letras.appendChild(divLetra)
//     guiones.appendChild(div)
// }
// let letrasIngresadas = []
// document.addEventListener('keydown', e => {
//     let letrasJuego = document.querySelectorAll('.guion')
//     console.dir(letrasJuego);
//     console.log(letrasIngresadas);
//     let letraIngresada = e.key.toUpperCase()
//     console.log(!letrasIngresadas.includes(letraIngresada));
//     if (!letrasIngresadas.includes(letraIngresada)) {
//         if ((palabra.toUpperCase().includes(letraIngresada))) {
//             for (let i = 0; i < palabra.length; i++) {
//                 if (e.key.toUpperCase() === palabra[i].toUpperCase()) {
//                     console.log(palabra[i]);
//                     letrasJuego[i].textContent = palabra[i].toUpperCase()
//                 }
//             }
//             let bandera=true
//             for (let i = 0; i < letrasJuego.length; i++) {
//                 if(letrasJuego[i].textContent==' '){
//                     bandera=false
//                     break
//                 }
//             }
//             if(bandera){
//                 let mensaje = document.querySelector('.mensaje')
//                 mensaje.textContent = 'Felicidades , Ganaste!'
//             }
   

//         } else {
//             graficar(movimietosPincel[intento], intento);
//             intento++;
//             if (intento > intentos) {
//                 let mensaje = document.querySelector('.mensaje')
//                 mensaje.textContent = 'Fin del Juego'
//             }

//         }
//         letrasIngresadas.push(e.key.toUpperCase())
//     }
//     console.log(e);
// })