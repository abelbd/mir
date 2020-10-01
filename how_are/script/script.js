//DECLARACION DEL ARREGLO DE EMOCIONES 48 EN TOTAL
var feelings=["afraid","agressive","angry","annoyed","anxious","arrongant","ashamed","blue","bored","cheerful","cold","confident","confused","disappointed",
"disgusted","exhausted","fatigued","frustated","furious","glad","guilty","happy","horrified","hot","hurt","impressed","injured","innocent","irritant",
"jelous","joyful","loved","negative","nervous","optimistic","relaxed","sad","shocked","shy","sick","sleepy","surprised","suspicious","terrible",
"thoughtful","tired","upset","worried","frightended"];

//FUNCION DEL BOTON CERRAR cuando es presionado, redirecciona a ....
function cerrar(){
  window.location.assign('https://google.com');
}

//La funcion ocultar1 esconde el letrero que dice "How are you feeling today? y el boton de START"
function ocultar1() {
			var a = document.getElementById("logo");
      var e = document.getElementById("boton1");
      var f = document.getElementById("howtp");
      var g = document.getElementById("indicaciones");
      var h = document.getElementById("boton2");
  			if (a.style.display === "none") {
    		a.style.display = "block";
  			} else {
    			a.style.display="none";
          e.style.display="none";
          f.style.display="block";
          g.style.display="block";
          h.style.display="block";
  				}
			}

//La foncion ocultar2 esconde el letrero que dice "How to play", las instrucciones y el boton "Let's play"
function ocultar2() {
  var a = document.getElementById("howtp");
  var b = document.getElementById("indicaciones");
  var c = document.getElementById("boton2");
    if (a.style.display === "none") {
      a.style.display = "block";
    } else{
      a.style.display="none";
      b.style.display="none";
      c.style.display="none";

    }
}

//Al detectar el evento click en el elemento con id boton2 se ejecuta el contador de 3...2...1 y al acabarse
//esos 3 segundo redirecciona a "howaregame.html"
boton2.addEventListener('click', function(){
    var a = document.getElementById("imgcountdown");
    var b = document.getElementById("portada");
    setTimeout(cuentaAtras);
      
      var contador = 3;
      function cuentaAtras() {
        document.getElementById('countdown').innerHTML =contador;
        b.style.opacity="0.8";
        if (contador==0) {
          window.location.assign('howaregame.html');
        } else {
          contador--;
          setTimeout(cuentaAtras,1000);
          a.style.display="block";
        }
      }
});

//La funcion cronometro controla el tiempo que aparece arriba a la izquierda del juego, contado es el tiempo total del juego
//Cuando acabe el tiempo direcciona a la  pagina de puntaje.
//Cuando quedan 10 segundos o menos el numero cambia de color a naranja y se ejecuta el sonido de una alarma.
function cronometro(){
    setTimeout(cuentaAtras);
    var contador=30;
    function cuentaAtras(){
      document.getElementById('crononum').innerHTML=contador;
      var puntos= document.getElementById("numpts").innerHTML;
       var pts =parseInt(puntos,10);
      if(contador==0){
           document.getElementById("contenedor").style.display="none";
           document.getElementById("marcador").style.display="block";
           document.getElementById("score").innerHTML=pts;
           document.getElementById("cronometro").style.display="none";
      } else if (contador==10) {
        var a = document.getElementById("crononum");
        a.style.color="orange";
        var audio = new Audio('sounds/alarm.mp3');
        audio.play();
        contador --;
        setTimeout(cuentaAtras,1000);
      } 
      else{
        contador--;
        setTimeout(cuentaAtras,1000);
      }
    }
}


//La funcion imgemocion se ejecuta cada vez que se presiona la palanca de la maquina.
//Ejecuta las funciones que se necesitan para poner todos los elementos para una partida del juego.
//Funciones como elegir que emocion se mostrara y colocar nombres aleatorios y el correcto se la emocion.
  function imgemocion(){
  document.getElementById("set_img").innerHTML='<img id="animacion" src="images/SVG/animacion.gif">';
  var palanca=new Audio('sounds/palanca.wav');
  palanca.play();
  var ruleta=new Audio('sounds/ruleta.wav');
  ruleta.play();
 // setTimeout(cambiar_img,1500);
  //setTimeout(calcular_num,1500);
  setTimeout(colocar_emociones,1500);
  setTimeout(we,1500);
  function we(){
  document.getElementById("palancamov").style.pointerEvents="none";

  }

  }
    


//La funcion cambiar imagen calcula un numero aleatorio del arreglo "feelings".
function cambiar_img(){
    var aleatorio=Math.floor(Math.random()*feelings.length);
  return aleatorio;
  }


//La funcion calcular_num crea un arreglo de 3 numeros, uno con el numero calculado en cambiar_img y otros dos aleatorios
//dentro del rango del arreglo "feelings".
//Tambien deordena este arreglo.
function calcular_num(){
  var ale=cambiar_img();
  document.getElementById("set_img").innerHTML='<img src="images/SVG/'+ale+'.svg">';
  var arr3=[];
    for (var i = 0; i < 3; i++) {
      var random=Math.floor(Math.random()*47);
      if (i==0) {
        arr3.push(ale);
      }
      else{
          arr3.push(random);
        }
    }

let arr2 = arr3.filter((valor, indiceActual, arreglo) => arreglo.indexOf(valor) === indiceActual);
console.log('Arreglo filtrado  '+arr2);
while(arr2.length<3){
   var random=Math.floor(Math.random()*47);
   arr2.push(random);
   console.log('Arreglo filtrado ultimate'+arr2);
}
    function desordenar(array){
        array = array.sort(function() {return Math.random() - 0.5});
        return array;
      } 
    arr2=desordenar(arr2);
    arr2.unshift(ale);

    return arr2;
}

//La funcion calcular_emociones toma el arreglo de calcular_num para que estos numeros sean las posiciones del arreglo de emociones
//que se mostraran como opciones para elegir del usuario.

 function calcular_emociones(){
    var arreglo=calcular_num();
    var emociones=[];
    for (var i = 0; i < arreglo.length; i++) {
      var pos = arreglo[i];
      emociones.push(feelings[pos]);
    }
        var puntos= document.getElementById("numpts").innerHTML;
        pts =parseInt(puntos,10);

    var seccion= document.getElementById("selector1");
    var select1=document.createElement("img");
    select1.setAttribute("class","selector");
    select1.setAttribute("id","select1");
    select1.setAttribute("src","images/SVG/Boton2.svg");
    seccion.appendChild(select1);
    
    var select2=document.createElement("img"); 
    select2.setAttribute("class","selector");
    select2.setAttribute("id","select2");
    select2.setAttribute("src","images/SVG/Boton2.svg");
    seccion.appendChild(select2);

    var select3=document.createElement("img"); 
    select3.setAttribute("class","selector");
    select3.setAttribute("id","select3");
    select3.setAttribute("src","images/SVG/Boton2.svg");
    seccion.appendChild(select3);


    select1.addEventListener('click', click1);

      function click1(){
          if(arreglo[0]==arreglo[1]){
           good();
           pts+=10;
           document.getElementById("numpts").innerHTML=pts;
           console.log("respuesta correcta");
           remover_list();
          }
          else{
           bad();
           console.log("respuesta incorrecta");
           remover_list();
          }
      }
      
    select2.addEventListener('click',click2); 

      function click2(){
          if(arreglo[0]==arreglo[2]){
           good();
           pts+=10;
           document.getElementById("numpts").innerHTML=pts;
           console.log("respuesta correcta");
           remover_list();
          }
          else{
           bad();
           console.log("respuesta incorrecta");
           remover_list();
          }
      }
      
  select3.addEventListener('click',click3); 

  function click3(){
          if(arreglo[0]==arreglo[3]){
           good();
           pts+=10;
           document.getElementById("numpts").innerHTML=pts;
           console.log("respuesta correcta");
           remover_list();
          }
          else{
           bad();
           console.log("respuesta incorrecta");
           remover_list();
          }
      }

      function remover_list(){
        select1.removeEventListener('click' ,click1);
        select2.removeEventListener('click' ,click2);
        select3.removeEventListener('click' ,click3);
        document.getElementById("palancamov").style.pointerEvents="initial";
      }
    return emociones;
      }
 


//La funcion colocar_emociones, muestra el contenido del arreglo de "calcular emociones()" en los elementos slct del html.
 function colocar_emociones(){
  var arreglo=calcular_emociones();
      document.getElementById("slct1").innerHTML=arreglo[1];
      document.getElementById("slct2").innerHTML=arreglo[2];
      document.getElementById("slct3").innerHTML=arreglo[3];
 }

   var contador=0;
function good(){
    var a = document.getElementById("smfvg");
    var b = document.getElementById("smfv");
    a.style.display="none";
    b.style.display="block";
    var audio = new Audio('sounds/ok.wav');
    audio.play();

    setTimeout(cambiar,800);
    function cambiar(){
      a.style.display="block";
      b.style.display="none";
    }
}



function bad(){
    var c = document.getElementById("smfrg");
    var d = document.getElementById("smfr");

    c.style.display="none";
    d.style.display="block";
    var audio1 = new Audio('sounds/error.wav');
    audio1.play();

    setTimeout(cambiar,800);
    function cambiar(){
      c.style.display="block";
      d.style.display="none";
    }
    var errores= document.getElementById("errores").innerHTML;
    err =parseInt(errores,10);
      var e = document.getElementById("e1");
      var f = document.getElementById("e2");
      var g = document.getElementById("e3");
      var h = document.getElementById("eg1");
      var i = document.getElementById("eg2");
      var j = document.getElementById("eg3");

        if(err==0){
          g.style.display="none";
          document.getElementById("errores").innerHTML=1;
          j.style.display="block";
        }
       if(err==1){
        f.style.display="none";
        document.getElementById("errores").innerHTML=2;
        i.style.display="block";
       }
       if(err==2){
        f.style.display="none";
        h.style.display="none";
          var puntos= document.getElementById("numpts").innerHTML;
          var pts =parseInt(puntos,10);
          document.getElementById("marcador").style.display="block";
          document.getElementById("cronometro").style.display="none";
          document.getElementById("score").innerHTML=pts;
          document.getElementById("contenedor").style.display="none";
       }
}

function ocultar3() {
      var a = document.getElementById("congrats");
      var b = document.getElementById("estrella");
      var e = document.getElementById("yscr");
      var f = document.getElementById("score");
      var g = document.getElementById("retry");
      var h = document.getElementById("finish");
      var i = document.getElementById("credits");
        if (a.style.display === "none") {
        a.style.display = "block";
        } else {
          a.style.display="none";
          b.style.display="none";
          e.style.display="none";
          f.style.display="none";
          g.style.display="none";
          h.style.display="none";
          i.style.display="block";
          }
      }