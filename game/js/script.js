var x="", y="", pos_true,ban, aux, inter,t, flag, width = 100, puntuacion=0, tiempo_extra=0, k, l;
var img = [], texto = [];
var myArray = [[0,1,2,3],[4,5,6,7],[8,9,10,11],[12,13,14,15], [16,17,18,19], [20,21,22,23], [24,25,26,27], [28,29,30,666], [31,32,33,34], [35,36,37,38], [39,40,41,42], [43,44,45, 666], [46,47,48,49], [50,51,52,53], [54,55,56,57], [58,59,60,666], [61,62,63,64], [65,66,67,68], [69,70,71,72], [73,74, 75, 76], [77, 78,79,80], [81,82,83,84], [85,86,87,88], [89,90,91,92], [93,94,95,96], [97,98,99,100], [101,102,103,104], [105,106,107,108], [109,110,111,112], [113,114,115,116], [117,118,119,120], [121,122,123,124], [125,126,127,128]];
var g, z, fPuntaje, nom_audio, soundAudio;

function recorrer(aleatorio){
  var r;
  for (var i = 0; i < 33; i++) {
      for (var j = 0; j < 4; j++) {
        if (aleatorio == myArray[i][j]) {
          console.log(myArray[i][j] + " correcto imagen:  " + i + " " + j);  
          r= i;
        } 
      }
  }
  return r;
}

function validar(y){
  var aux=false;
  for (var i = 0; i < img.length; i++){
    if(y==img[i]){
      aux=true;
    }
  }
  return aux;
}

function añadir(){
  y=getRandomInt(0,33);
  if(validar(y)==true){
    añadir();
  }else{
    img.push(y);
  }
}
function validacion(k){
  ban=false;
  for (var i = 0; i < texto.length; i++){
    if(k==texto[i]){
      ban=true;
    }
  }
  return ban;
}
function pregunta(){
  k=getRandomInt(0,129);
  if(validacion(k)==true){
    pregunta();
  }else{
    texto.push(k);
    console.log("SALIR : " + k + " : ");
  }
  return k;
}
function prueba(){
  /*
    SACA PRIMER NÚMERO RANDOM
    LO AGREGA A TEXTO[]
    SACA NUEVOS NÚMEROS RANDOM Y LOS AGREGA A TEXTO CON LA FUNCION PREGUNTA
  */
  k=getRandomInt(0,129);
  texto.push(k);
  console.log("K PRIMERA" + k);
  for (var i = 0; i < 128; i++) {
    console.log("*************** "+ i + " ** " + pregunta());
  }
}
function num(){
  x=texto.pop();
  nom_audio=x;
  z=recorrer(x);
  img.push(z);
  console.log("******CHIDA  H  " + z);
  //alert(z);
  for (var i = 0; i < 8; i++) {
    añadir();
  }
  console.log("Numero de elementos" + img.length);
  var i=0;
  img.forEach(function(element) {
    i++;
    console.log("elemento "+ i + " ***: " + element);
  });
  return x;
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function get_description(){
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var myArr = JSON.parse(this.responseText);

      g=num();
      document.getElementById("descrip_txt").innerHTML = myArr[g];
    }
  };
  xmlhttp.open("GET", "descriptions_characters.txt", false);
  xmlhttp.send();
}

function ordenar(){
  pos_true=getRandomInt(0,9);
  aux=img[pos_true];
  img[pos_true]=z;
  img[0]=aux;
  var i=0; 
  img.forEach(function(element) {
    i++;
    console.log("elemento "+ i + " ////: " + element);
  });
  console.log("Nueva pos Chida: ****" + pos_true);

}

function set_img(){
  var cadena, div_open, div_img, div_end, pos=0, error;
  cadena="";
  div_row='<div class="">';
  div_img='<img src="img/imagenes/'+ img[0]+'.svg" class="" width="" alt="'+pos+'">';
  div_end='</div>';
  for (var j = 0; j < 3; j++) {
    cadena=cadena.concat('<div class="">');
    for (var i = 0; i < 3; i++) {
      error='<div id="ico_incorrecto'+pos+'" class="cor'+pos+' cori'+pos+'" style="display:none"></div>';
      correcto='<div id="ico_correcto'+pos+'" class="cor'+pos+' corc'+pos+'" style="display:none"></div>';
      div_img='<img src="img/imagenes/'+ img[pos]+'.svg" class="" width="" alt="'+pos+'"/> ';
      div_open='<div id="div-'+pos +'" class="">';
      cadena =cadena.concat(div_open, div_img, div_end,error, correcto);
      pos++;
    }
    cadena=cadena.concat("</div>");
  }
  console.log(cadena);
  $("#img").html(cadena);
}

function clear(){
  while(img.length > 0){
      img.pop();
  }
}
function verificar(){
  $("#div-"+pos_true).click(function(){    
    puntaje();
    main();
    setTimeout(function(){ 
      var cad='<audio id="cancion" controls><source src="audio/MP3/'+(nom_audio+1)+'.mp3" type="audio/mp3"></audio>';
      $("#setAudio").html(cad);
      soundAudio = document.getElementById("cancion");
      soundAudio.play();
    }, 1050);
    var cad='<audio id="cancion" controls><source src="audio/correcto.mp3" type="audio/mp3"></audio>';
    $("#setAudio").html(cad);
    soundAudio = document.getElementById("cancion");
    soundAudio.play();
    
  });
}
function main(){
  get_description();
  ordenar();
  set_img();
  clear();

  verificar();
}
function move() {
  var elem = document.getElementById("myBar");

  var id = setInterval(frame, 1500);
  function frame() {
    if (width <= 0) {
      clearInterval(id);
    } else {
      width-=4;
      elem.style.width = width + '%';
      if(width<=0){

        document.getElementById("casa").style.display = "none";
        document.getElementById("portada").style.display = "block";  
        document.getElementById("instruccion").style.display = "block";
        document.getElementById("rule").style.display = "none";
        document.getElementById("btnStart").style.display = "none";
        document.getElementById("puntuacion").style.display = "block";
        document.getElementById("pfinal").innerHTML=puntuacion;
        soundAudio.pause();

      }
    }
  }
}
function puntaje(){
  puntuacion+=width*10;
  document.getElementById("puntos").innerHTML=puntuacion;
  tiempo();
}
function tiempo(){
  width=width+10;
  if (width>100) {
    width=105;
  }
}
function finalizar() {
    window.close();
}
function myFunction() {
    document.getElementById("myDIV").className = "mystyle ok";
}
function goInstrucciones(){
  document.getElementById("ventana").style.display = "none";
  document.getElementById("instruccion").style.display = "block";
}
function win(){
    document.getElementById("portada").style.display = "none";   
    document.getElementById("casa").style.display = "block";
    setTimeout(function(){ 
      //var v = document.getElementById("cancion");
     // v.play();

      document.getElementById("count").innerHTML = "2";
      setTimeout(function(){ 
        document.getElementById("count").innerHTML = "1";
        setTimeout(function(){ 
          document.getElementById("count").innerHTML = "0";
          document.getElementById("num").style.display = "none";

          loadDoc(); 
            var cad='<audio id="cancion" controls><source src="audio/MP3/'+(nom_audio+1)+'.mp3" type="audio/mp3"></audio>';
            $("#setAudio").html(cad);
            soundAudio = document.getElementById("cancion");
            soundAudio.play();
        }, 1000);
      }, 1000);
    }, 1000);
    document.getElementById("count").style.display = "block";
}
function hello() {
      setTimeout(function(){ 
      document.getElementById("portada").style.display = "none";
      document.getElementById("casa").style.display = "block";
      loadDoc();
      }, 6000);
      document.getElementById("ven-inicio").style.display = "none";
      document.getElementById("instrucciones").style.display = "block";
}

function loadDoc(){
  prueba();
  main();
  move();

  console.log("Nueva pos Chida : *** " + pos_true);
  $('body #img').on('click', 'img', function(){
    var x=$(this).attr('alt');
    if (x == pos_true) main();
    else {
      document.getElementById("ico_incorrecto"+x).style.display="block";
      document.getElementById("ico_correcto"+pos_true).style.display="block";
      setTimeout(() => {
        main();
          var cad='<audio id="cancion" src="audio/MP3/'+(nom_audio+1)+'.mp3" type="audio/mp3 "></audio>';
          var mediaElement = document.getElementById("cancion");
          mediaElement.pause();
          mediaElement.src = ""; 
          //var cad='<audio id="cancion" controls><source src="MP3/'+(nom_audio+1)+'.mp3" type="audio/mp3"></audio>';
          $("#setAudio").html(cad);
          soundAudio = document.getElementById("cancion");
          soundAudio.play();
      }, 900);
    }
  });
}

$(document).ready(function(){

});
  window.console = window.console || function(t) {};

  if (document.location.search.match(/type=embed/gi)) {
    window.parent.postMessage("resize", "*");
  }


