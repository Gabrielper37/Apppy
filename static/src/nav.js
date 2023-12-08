//FUNCION PARA QUE APAREZCA Y DESAPAREZCA EL NAV PARA CELU, ADEMAS LE DA LA ANIMACIÓN
function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "flex") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
    x.className = "animate__animated animate__fadeIn";
  }
}

$(document).ready(function () {
  irArriba();
}); //Hacia arriba

function irArriba() {
  $(".ir-arriba").click(function () {
    $("body,html").animate({ scrollTop: "0px" }, 1000);
  });
  $(window).scroll(function () {
    if ($(this).scrollTop() > 0) {
      $(".ir-arriba").slideDown(600);
    } else {
      $(".ir-arriba").slideUp(600);
    }
  });
  $(".ir-abajo").click(function () {
    $("body,html").animate({ scrollTop: "1000px" }, 1000);
  });
}

/**
 * Array con las imagenes que se iran mostrando en la web
 */
var imagenes = new Array(
  "static/img/logos/l1.png",
  "static/img/logos/l2.png",
  "static/img/logos/l3.png",
  "static/img/logos/l4.png",
  "static/img/logos/l5.png",
  "static/img/logos/l6.png",
  "static/img/logos/l7.png",

  "static/img/logos/l9.png",

  "static/img/logos/l11.png",
  "static/img/logos/l12.png",
  "static/img/logos/l13.png",
  "static/img/logos/l14.png",
  "static/img/logos/l15.png",
  "static/img/logos/l16.png",
  "static/img/logos/l17.png",
  "static/img/logos/l18.png",
  "static/img/logos/l19.png",
  "static/img/logos/l20.png",
  "static/img/logos/l21.png",
  "static/img/logos/l22.png"
);

/**
 * Funcion para cambiar la imagen
 */
function rotarImagenes() {
  // obtenemos un numero aleatorio entre 0 y la cantidad de imagenes que hay
  var index = Math.floor(Math.random() * imagenes.length);

  // cambiamos la imagen
  document.getElementById("imagen").src = imagenes[index];
  document.getElementById("imagen").animate(
    {
      opacity: [0, 0.5, 1],
      offset: [0, 0.5, 1], // Shorthand for [ 0, 0.8, 1 ]
      easing: ["ease-in", "ease-out"],
    },
    2000
  );
}

/**
 * Función que se ejecuta una vez cargada la página
 */
onload = function () {
  // Cargamos una imagen aleatoria
  rotarImagenes();

  // Indicamos que cada 5 segundos cambie la imagen
  setInterval(rotarImagenes, 15000);
};
