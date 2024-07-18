// ------------------------------- CHAT INTERVAL COLOUR ------------------------------ //


document.getElementsByClassName('sidebar_a4d4d9')[0].remove()
document.getElementsByClassName('wrapper_fea3ef guilds_a4d4d9')[0].remove()

var elemento = document.querySelector('.scroller_e2e187.customTheme_c49869.auto_c49869.scrollerBase_c49869.disableScrollAnchor_c49869.managedReactiveScroller_c49869');

// lista de colores oscuros - Agregar mas colores en hex.
var colores = ['#11044B', '#39253E', '#3E1423', 
    '#05571D','#078477','#2E192C','#1D1919',
    '#444044','#50030A','#166408','#3F4B3D'];

function cambiarColor() {
    var randomColor = colores[Math.floor(Math.random() * colores.length)];
    elemento.style.backgroundColor = randomColor;
}

setInterval(cambiarColor, 500);  // tiempo de cambio, cambiar si lo quieres mas lento

// -------------------------------------------------------------------------------------- ///