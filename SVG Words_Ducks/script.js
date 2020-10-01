function ocultar1() {
	var a = document.getElementById("letrero");
    var b = document.getElementById("boton1");
    var c = document.getElementById("howtp");
    var d = document.getElementById("howtpl");
    var e = document.getElementById("indicaciones");
    var f = document.getElementById("exduck");
    var g = document.getElementById("boton2");
  			if (a.style.display === "none") {
    		a.style.display = "block";
  			} else {
    	a.style.display="none";
        b.style.display="none";
        c.style.display="block";
        d.style.display="block";
        e.style.display="block";
        f.style.display="block";
        g.style.display="block";
  				}
			}

function ocultar2() {
  var a = document.getElementById("howtp");
  var b = document.getElementById("howtpl");
  var c = document.getElementById("indicaciones");
  var d = document.getElementById("exduck");
  var e = document.getElementById("boton2");
    if (a.style.display === "none") {
      a.style.display = "block";
    } else{
      a.style.display="none";
      b.style.display="none";
      c.style.display="none";
      d.style.display="none";
      e.style.display="none";

    }
}
boton2.addEventListener('click', function(){
    var a = document.getElementById("imgcountdown");
    document.getElementById("fondo").style.filter = "brightness(10%)";
    setTimeout(cuentaAtras);
      var contador = 3;
      function cuentaAtras() {
        document.getElementById('countdown').innerHTML =contador;
        if (contador==0) {
          window.location.assign('wordnducks.html');
        } else {
          contador--;
          setTimeout(cuentaAtras,1000);
          a.style.display="block";
        }
      }
});

function cronometro(){
    setTimeout(cuentaAtras);
    var contador=415;
    function cuentaAtras(){
      document.getElementById('time').innerHTML=contador;
      var puntos= document.getElementById("scr").innerHTML;
       var pts =parseInt(puntos,10);
      if(contador==0){
           document.getElementById('categoria1').innerHTML='FINSHED';
      } else if (contador==10) {
        var a = document.getElementById("time");
        a.style.color="red";
        a.style.fontSize='40px'
        contador --;
        setTimeout(cuentaAtras,1000);
      } 
      else{
        contador--;
        setTimeout(cuentaAtras,1000);
      }
    }
}

function good(){
	var a=document.getElementById("luces");
	var b=document.getElementById("luces1");

	a.style.display="none";
	b.style.display="block";

	setTimeout(cambiar,800)
	function cambiar(){
		a.style.display="block";
		b.style.display="none";
	}

}

function bad(){
	var a=document.getElementById("luces");
	var b=document.getElementById("luces2");

	a.style.display="none";
	b.style.display="block";

	setTimeout(cambiar,800)
	function cambiar(){
		a.style.display="block";
		b.style.display="none";
	}

	var errores= document.getElementById("errores").innerHTML;
    err =parseInt(errores,10);
    var c=document.getElementById("plive1");
    var d=document.getElementById("plive2");
    var e=document.getElementById("plive3");
    var f=document.getElementById("pdead1");
    var g=document.getElementById("pdead2");
    var h=document.getElementById("pdead3");

    if(err==0){
          c.style.display="none";
          document.getElementById("errores").innerHTML=1;
          h.style.visibility="visible";
        }
       if(err==1){
        d.style.display="none";
        document.getElementById("errores").innerHTML=2;
          g.style.visibility="visible";
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

function mostrar(){
  arr_grande=calcular();
  console.log('El arreglo grande es : '+arr_grande);
  arr4=arr_grande.slice(0,4);//Toma los primeros 4 elemntos del arreglo arr_grande
  console.log('El arreglo de 4 elementos es: '+arr4);
  for (var i = 0; i < 4; i++) {
    arr_grande.shift();
  }//Elimina los 4 elemntos de arr4 de arr_grande.
  arr_grande=arr_grande.toString();//Convierte el arr_grande en una cadena para poder aplicar el metodo split
  arr_div=arr_grande.split(",");//Separa todos los elemntos de arr_grande.
  titulo=arr_div.slice(0,1);//Toma el primer elemnto el cual es el titulo
  titulo=titulo.toString();
  titulo=titulo.split(" ");
  if(titulo[1]!=undefined){
      document.getElementById("categoria1").innerHTML=titulo[0]+'<br>'+titulo[1];
      document.getElementById("categoria1").style.top="85px";
      }
  document.getElementById("answ1").innerHTML=arr_div[arr4[1]];
  document.getElementById("answ2").innerHTML=arr_div[arr4[2]];
  document.getElementById("answ3").innerHTML=arr_div[arr4[3]];
}

