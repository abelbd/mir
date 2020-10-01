var food=["food","cheese","hot dog","pizza","muffin","donut","yogurt","salad",
"cereal","sugar","soup","cookies","rice","soup","orange","butter",
"sandwich","bread","fried chicken","milk","cake","carrot","coffee",
"steak","hamburger","egg","ham","pancake","chocolate","apple","tea",
"banana","bacon","pasta","notebook","nose","rabbitt","bicycle","face",
"ruler","bed","blouse","horse","winter","foot","black","sock","hand",
"white"];//33 food 15 other

var b_Parts=["body parts","waist","shoulder","arm","hand","elbow","finger"
,"leg","knee","foot","ankle","toe","feet","stomach","eye","nose","ear"
,"mouth","tooth","lip","teeth","wrist","neck","orange","blue","dress","bread"
,"chocolate","turtle","pencil","water","shoe","sharpener"
];//22 body parts, 10 other

var animals=["animals","dog","cat","cow","sheep","rabbit","duck","horse"
,"pig","turkey","chicken","snail","mouse","deer","hen","koala","wolf","bear"
,"snake","bat","tiger","leopard","turtle","octopus","frog","whale","fox"
,"lion","elephant","fish","shark","penguin","bee","dolphin","butterfly"
,"owl","cricket","zebra","ant","giraffe","monkey"
,"stomach","nose","pineapple","crayon","pink","finger","ear","coat",
"bread","arm","carrot","mother","feet","sunny","grapes"
];//40 animals 15 other

var fruit=["fruit","apple","banana","blueberry","cherry","coconut","kiwi"
,"grapes","lemon","pineapple","watermelon","peach","strawberry","orange"
,"pear","mango","tangerine","papaya","lime","melon","grapefruit","blackberry"
,"apricot","raspberry","elbow","bathroom","red","father","turtle","computer"
,"bear","cloudy","yellow","cheese"
];//23 fruit 10 other

var school_sup=["school supplies","desk","chair","book","notebook","pencil case","backpack"
,"scissors","clip","pencil","sharpener","stapler","eraser","ruler","glue"
,"highlighter","tape","blackboard","schoolbag","pen","locker","bookcase"
,"windy","purple","soup","hat","fish","banana","trousers","cereal","sister"
,"watermelon"
];//21 school supplies 10 other

var clothes=["clothes","t-shirt","sweater","jacket","coat","jeans","socks"
,"shorts","shoes","dress","boots","blouse","raincoat","swimsuit","skirt"
,"heels","suit","shirt","hat","scarf","glasses","belt","sunglasses","necklace"
,"brother","pizza","glue","car","wolf","bookcase","lemon","tomato","chair"
,"aunt"
];//23 clothes 10 other

var fam_members=["family members","mother","father","daughter","son","baby"
,"grandmother","grandfather","aunt","cousin","granddaughter","uncle"
,"sister","grandson","brother","dad","mom","dress","green","pineapple"
,"desk","apricot","sunny"
];//16 family members 6 others

var places=["town places","school","post office","hospital","bank","fire station","supermarket"
,"restaurant","hotel","museum","library","cinema","factory","police department"
,"mall","church","prison","bus station","airport","gas station","park"
,"aquarium","circus","travel agency","coffee shop","gym","stadium"
,"college","market","daughter","white","book","grapes","cloudy","jeans"
,"bookcase","yogurt","mom","sad"
];//28 places 10 other

var colors=[
"colors","red","yellow","blue","green","orange","purple","brown","magenta"
,"turquoise","pink","gold","black","silver","white","navy","happy","triangle"
,"market","bank","cinema","circle","wind"
];//15 colors 7 other

var shapes=["shapes","triangle","trapezoid","star","square","rectangle"
,"octagon","circle","diamond","blue","sister","shirt","windy","anxious"
];//8 shapes 5 other

var feelings=["feelings","sad","angry","scared","surprised","confused"
,"guilty","exhausted","confident","proud","shy","hopeful","joy","confusion"
,"boredom","fear","nostalgia","kindness","depressed","motivated","optimist"
,"tired","loved","pessimist","mad","silly","sleepy","nervous","excited"
,"snowy","gold","turquoise","daughter","star","tea","silver","yellow"
,"father","giraffe"
];//28 feelings 10 other

var housep=["house parts","kitchen","bedroom","garden","bathroom" 
,"living room","garage","dining room","basement","backyard","balcony"
,"attic","roof","backyard","basement","stairs","window","fence","foggy"
,"loved","gold","bird","trapezoid","suit"
];//17 house parts 6 other

var transportation=["transport","helicopter","sailboat","bicycle"
,"airplane","canoe","car","plane","bus","train","rocket","truck","van"
,"spaceship","boat","taxi","ship","motorcycle","subway","submarine"
,"ambulance","school bus","motorbike","limousine","stormy","bedroom"
,"joy","nurse","circle","banana","toe","teacher"
];//23 transports 8 other

var weather=["the weather","cold","hot","wind","rain","snow","cloud"
,"sun","fog","snowflake","breeze","hurricane","sunny","tornado","thunder"
,"windy","lightning","stormy","snowy","chilly","foggy","warm","frosty"
,"garden","bus","tired","green","grandfather","doctor","hospital","monkey"
];//22 weather 8 other

var jobs=["jobs","astronaut","chef","firefighter","doctor","police"
,"teacher","veterinarian","actress","architect","actor","singer","dentist"
,"writer","farmer","nurse","pilot","engineer","cashier","barber","baker"
,"electrician","photographer","scientist","bus driver","designer","journalist"
,"graphic designer","musician","lawyer","painter","mechanic","model"
,"politician","taxi driver","biologist","dancer","postman","travel guide"
,"broccoli","plane","red","sandwich","soup","motorcycle","coffee"
,"mother","hopeful","orange","son","boredom","chilly"
];//38 jobs 13 other

var vegetables=["vegetables","carrot","broccoli","corn","cucumber"
,"eggplant","lettuce","mushroom","onion","potato","tomato","pumpkin"
,"pepper","peas","cabbage","garlic","beans","cauliflower","spinach"
,"train","musician","cherry","tornado","balcony","watermelon"
];//18 vegetables 6 other

function calcular(){
  var cat_ale=Math.floor(Math.random()*(17-0)+0);
  var arr_actual;
  var arr3=[];
  var random_bad;
  function desordenar(array){
        array = array.sort(function() {return Math.random() - 0.5});
        return array;
      } 
  if (cat_ale==0) {
    arr_actual=food;
      document.getElementById("categoria1").innerHTML=arr_actual[0];
    random_bad=Math.floor(Math.random()*(48-34)+34);
    random_good1=Math.floor(Math.random()*(33-1))+1;
      random_good2=Math.floor(Math.random()*(33-1))+1;

    arr3.push(random_good1);
    arr3.push(random_good2);
    arr3.push(random_bad);
    let arr2 = arr3.filter((valor, indiceActual, arreglo) => arreglo.indexOf(valor) === indiceActual);
console.log('Arreglo filtrado  '+arr2);
while(arr2.length<3){
   var random=Math.floor(Math.random()*(33-1)+1);
   arr2.push(random);
 }
    arr2=desordenar(arr2);
        console.log('des'+arr2);
        arr2.unshift(random_bad);
        arr2.push(arr_actual);
        console.log('ultimate '+arr2);
        return arr2;
  }//Fin del if food.  

  if (cat_ale==1) {
    arr_actual=b_Parts;
      document.getElementById("categoria1").innerHTML=arr_actual[0];
    random_bad=Math.floor(Math.random()*(32-23)+23);
    random_good1=Math.floor(Math.random()*(22-1))+1;
      random_good2=Math.floor(Math.random()*(22-1))+1;

    arr3.push(random_good1);
    arr3.push(random_good2);
    arr3.push(random_bad);
    let arr2 = arr3.filter((valor, indiceActual, arreglo) => arreglo.indexOf(valor) === indiceActual);
console.log('Arreglo filtrado  '+arr2);
while(arr2.length<3){
   var random=Math.floor(Math.random()*(22-1)+1);
   arr2.push(random);
 }
    arr2=desordenar(arr2);
        console.log('des'+arr2);
        arr2.unshift(random_bad);
        arr2.push(arr_actual);
        console.log('ultimate '+arr2);
        return arr2;
  }//Fin del if b_Parts.    

  if (cat_ale==2) {
    arr_actual=animals;
      document.getElementById("categoria1").innerHTML=arr_actual[0];
    random_bad=Math.floor(Math.random()*(50-41)+41);
    random_good1=Math.floor(Math.random()*(40-1))+1;
      random_good2=Math.floor(Math.random()*(40-1))+1;

    arr3.push(random_good1);
    arr3.push(random_good2);
    arr3.push(random_bad);
    let arr2 = arr3.filter((valor, indiceActual, arreglo) => arreglo.indexOf(valor) === indiceActual);
console.log('Arreglo filtrado  '+arr2);
while(arr2.length<3){
   var random=Math.floor(Math.random()*(40-1)+1);
   arr2.push(random);
 }
    arr2=desordenar(arr2);
        console.log('des'+arr2);
        arr2.unshift(random_bad);
        arr2.push(arr_actual);
        console.log('ultimate '+arr2);
        return arr2;
  }//Fin del if animals. 

    if (cat_ale==3) {
    arr_actual=fruit;
      document.getElementById("categoria1").innerHTML=arr_actual[0];
    random_bad=Math.floor(Math.random()*(33-24)+24);
    random_good1=Math.floor(Math.random()*(23-1))+1;
      random_good2=Math.floor(Math.random()*(23-1))+1;

    arr3.push(random_good1);
    arr3.push(random_good2);
    arr3.push(random_bad);
    let arr2 = arr3.filter((valor, indiceActual, arreglo) => arreglo.indexOf(valor) === indiceActual);
console.log('Arreglo filtrado  '+arr2);
while(arr2.length<3){
   var random=Math.floor(Math.random()*(23-1)+1);
   arr2.push(random);
 }
    arr2=desordenar(arr2);
        console.log('des'+arr2);
        arr2.unshift(random_bad);
        arr2.push(arr_actual);
        console.log('ultimate '+arr2);
        return arr2;
  }//Fin del if fruit.

    if (cat_ale==4) {
    arr_actual=school_sup;
      document.getElementById("categoria1").innerHTML=arr_actual[0];
    random_bad=Math.floor(Math.random()*(31-22)+22);
    random_good1=Math.floor(Math.random()*(21-1))+1;
      random_good2=Math.floor(Math.random()*(21-1))+1;

    arr3.push(random_good1);
    arr3.push(random_good2);
    arr3.push(random_bad);
    let arr2 = arr3.filter((valor, indiceActual, arreglo) => arreglo.indexOf(valor) === indiceActual);
console.log('Arreglo filtrado  '+arr2);
while(arr2.length<3){
   var random=Math.floor(Math.random()*(21-1)+1);
   arr2.push(random);
 }
    arr2=desordenar(arr2);
        console.log('des'+arr2);
        arr2.unshift(random_bad);
        arr2.push(arr_actual);
        console.log('ultimate '+arr2);
        return arr2;
  }//Fin del if school_sup. 

    if (cat_ale==5) {
    arr_actual=clothes;
      document.getElementById("categoria1").innerHTML=arr_actual[0];
    random_bad=Math.floor(Math.random()*(33-24)+24);
    random_good1=Math.floor(Math.random()*(23-1))+1;
      random_good2=Math.floor(Math.random()*(23-1))+1;

    arr3.push(random_good1);
    arr3.push(random_good2);
    arr3.push(random_bad);
    let arr2 = arr3.filter((valor, indiceActual, arreglo) => arreglo.indexOf(valor) === indiceActual);
console.log('Arreglo filtrado  '+arr2);
while(arr2.length<3){
   var random=Math.floor(Math.random()*(23-1)+1);
   arr2.push(random);
 }
    arr2=desordenar(arr2);
        console.log('des'+arr2);
        arr2.unshift(random_bad);
        arr2.push(arr_actual);
        console.log('ultimate '+arr2);
        return arr2;
  }//Fin del if clothes.

    if (cat_ale==6) {
    arr_actual=fam_members;
      document.getElementById("categoria1").innerHTML=arr_actual[0];
    random_bad=Math.floor(Math.random()*(22-17)+17);
    random_good1=Math.floor(Math.random()*(16-1))+1;
      random_good2=Math.floor(Math.random()*(16-1))+1;

    arr3.push(random_good1);
    arr3.push(random_good2);
    arr3.push(random_bad);
    let arr2 = arr3.filter((valor, indiceActual, arreglo) => arreglo.indexOf(valor) === indiceActual);
console.log('Arreglo filtrado  '+arr2);
while(arr2.length<3){
   var random=Math.floor(Math.random()*(16-1)+1);
   arr2.push(random);
 }
    arr2=desordenar(arr2);
        console.log('des'+arr2);
        arr2.unshift(random_bad);
        arr2.push(arr_actual);
        console.log('ultimate '+arr2);
        return arr2;
  }//Fin del if fam_members.

    if (cat_ale==7) {
    arr_actual=places;
      document.getElementById("categoria1").innerHTML=arr_actual[0];
    random_bad=Math.floor(Math.random()*(38-29)+29);
    random_good1=Math.floor(Math.random()*(28-1))+1;
      random_good2=Math.floor(Math.random()*(28-1))+1;

    arr3.push(random_good1);
    arr3.push(random_good2);
    arr3.push(random_bad);
    let arr2 = arr3.filter((valor, indiceActual, arreglo) => arreglo.indexOf(valor) === indiceActual);
console.log('Arreglo filtrado  '+arr2);
while(arr2.length<3){
   var random=Math.floor(Math.random()*(28-1)+1);
   arr2.push(random);
 }
    arr2=desordenar(arr2);
        console.log('des'+arr2);arr2.unshift(random_bad);
        arr2.push(arr_actual);
        console.log('ultimate '+arr2);
        return arr2;
  }//Fin del if places.

    if (cat_ale==8) {
    arr_actual=colors;
      document.getElementById("categoria1").innerHTML=arr_actual[0];
    random_bad=Math.floor(Math.random()*(22-16)+16);
    random_good1=Math.floor(Math.random()*(15-1))+1;
      random_good2=Math.floor(Math.random()*(15-1))+1;

    arr3.push(random_good1);
    arr3.push(random_good2);
    arr3.push(random_bad);
    let arr2 = arr3.filter((valor, indiceActual, arreglo) => arreglo.indexOf(valor) === indiceActual);
console.log('Arreglo filtrado  '+arr2);
while(arr2.length<3){
   var random=Math.floor(Math.random()*(15-1)+1);
   arr2.push(random);
 }
    arr2=desordenar(arr2);
        console.log('des'+arr2);
        arr2.unshift(random_bad);
        arr2.push(arr_actual);
        console.log('ultimate '+arr2);
        return arr2;
  }//Fin del if colors.

    if (cat_ale==9) {
    arr_actual=shapes;
      document.getElementById("categoria1").innerHTML=arr_actual[0];
    random_bad=Math.floor(Math.random()*(13-9)+9);
    random_good1=Math.floor(Math.random()*(8-1))+1;
      random_good2=Math.floor(Math.random()*(8-1))+1;

    arr3.push(random_good1);
    arr3.push(random_good2);
    arr3.push(random_bad);
    let arr2 = arr3.filter((valor, indiceActual, arreglo) => arreglo.indexOf(valor) === indiceActual);
console.log('Arreglo filtrado  '+arr2);
while(arr2.length<3){
   var random=Math.floor(Math.random()*(8-1)+1);
   arr2.push(random);
 }
    arr2=desordenar(arr2);
        console.log('des'+arr2);
        arr2.unshift(random_bad);
        arr2.push(arr_actual);
        console.log('ultimate '+arr2);
        return arr2;
  }//Fin del if shapes.

    if (cat_ale==10) {
    arr_actual=feelings;
      document.getElementById("categoria1").innerHTML=arr_actual[0];
    random_bad=Math.floor(Math.random()*(38-29)+29);
    random_good1=Math.floor(Math.random()*(28-1))+1;
      random_good2=Math.floor(Math.random()*(28-1))+1;

    arr3.push(random_good1);
    arr3.push(random_good2);
    arr3.push(random_bad);
    let arr2 = arr3.filter((valor, indiceActual, arreglo) => arreglo.indexOf(valor) === indiceActual);
console.log('Arreglo filtrado  '+arr2);
while(arr2.length<3){
   var random=Math.floor(Math.random()*(28-1)+1);
   arr2.push(random);
 }
    arr2=desordenar(arr2);
        console.log('des'+arr2);
        arr2.unshift(random_bad);
        arr2.push(arr_actual);
        console.log('ultimate '+arr2);
        return arr2;
  }//Fin del if feelings.

    if (cat_ale==11) {
    arr_actual=housep;
      document.getElementById("categoria1").innerHTML=arr_actual[0];
    random_bad=Math.floor(Math.random()*(23-18)+18);
    random_good1=Math.floor(Math.random()*(17-1))+1;
      random_good2=Math.floor(Math.random()*(17-1))+1;

    arr3.push(random_good1);
    arr3.push(random_good2);
    arr3.push(random_bad);
    let arr2 = arr3.filter((valor, indiceActual, arreglo) => arreglo.indexOf(valor) === indiceActual);
console.log('Arreglo filtrado  '+arr2);
while(arr2.length<3){
   var random=Math.floor(Math.random()*(17-1)+1);
   arr2.push(random);
 }
    arr2=desordenar(arr2);
        console.log('des'+arr2);
        arr2.unshift(random_bad);
        arr2.push(arr_actual);
        console.log('ultimate '+arr2);
        return arr2;
  }//Fin del if huosep.

    if (cat_ale==12) {
    arr_actual=transportation;
      document.getElementById("categoria1").innerHTML=arr_actual[0];
    random_bad=Math.floor(Math.random()*(31-24)+24);
    random_good1=Math.floor(Math.random()*(23-1))+1;
      random_good2=Math.floor(Math.random()*(23-1))+1;

    arr3.push(random_good1);
    arr3.push(random_good2);
    arr3.push(random_bad);
    let arr2 = arr3.filter((valor, indiceActual, arreglo) => arreglo.indexOf(valor) === indiceActual);
console.log('Arreglo filtrado  '+arr2);
while(arr2.length<3){
   var random=Math.floor(Math.random()*(23-1)+1);
   arr2.push(random);
 }
    arr2=desordenar(arr2);
        console.log('des'+arr2);
        arr2.unshift(random_bad);
        arr2.push(arr_actual);
        console.log('ultimate '+arr2);
        return arr2;
  }//Fin del if transportation.

    if (cat_ale==14) {
    arr_actual=weather;
      document.getElementById("categoria1").innerHTML=arr_actual[0];
    random_bad=Math.floor(Math.random()*(30-23)+23);
    random_good1=Math.floor(Math.random()*(22-1))+1;
      random_good2=Math.floor(Math.random()*(22-1))+1;

    arr3.push(random_good1);
    arr3.push(random_good2);
    arr3.push(random_bad);
    let arr2 = arr3.filter((valor, indiceActual, arreglo) => arreglo.indexOf(valor) === indiceActual);
console.log('Arreglo filtrado  '+arr2);
while(arr2.length<3){
   var random=Math.floor(Math.random()*(22-1)+1);
   arr2.push(random);
 }
    arr2=desordenar(arr2);
        console.log('des'+arr2);
        arr2.unshift(random_bad);
        arr2.push(arr_actual);
        console.log('ultimate '+arr2);
        return arr2;
  }//Fin del if weather.

    if (cat_ale==15) {
    arr_actual=jobs;
      document.getElementById("categoria1").innerHTML=arr_actual[0];
    random_bad=Math.floor(Math.random()*(51-39)+39);
    random_good1=Math.floor(Math.random()*(38-1))+1;
      random_good2=Math.floor(Math.random()*(38-1))+1;

    arr3.push(random_good1);
    arr3.push(random_good2);
    arr3.push(random_bad);
    let arr2 = arr3.filter((valor, indiceActual, arreglo) => arreglo.indexOf(valor) === indiceActual);
console.log('Arreglo filtrado  '+arr2);
while(arr2.length<3){
   var random=Math.floor(Math.random()*(38-1)+1);
   arr2.push(random);
 }
    arr2=desordenar(arr2);
        console.log('des'+arr2);
        arr2.unshift(random_bad);
        arr2.push(arr_actual);
        console.log('ultimate '+arr2);
        return arr2;
  }//Fin del if jobs.

    if (cat_ale==16) {
    arr_actual=vegetables;
      document.getElementById("categoria1").innerHTML=arr_actual[0];
    random_bad=Math.floor(Math.random()*(24-19)+19);
    random_good1=Math.floor(Math.random()*(18-1))+1;
      random_good2=Math.floor(Math.random()*(18-1))+1;

    arr3.push(random_good1);
    arr3.push(random_good2);
    arr3.push(random_bad);
    let arr2 = arr3.filter((valor, indiceActual, arreglo) => arreglo.indexOf(valor) === indiceActual);
console.log('Arreglo filtrado  '+arr2);
while(arr2.length<3){
   var random=Math.floor(Math.random()*(18-1)+1);
   arr2.push(random);
 }
    arr2=desordenar(arr2);
        console.log('des'+arr2);
        arr2.unshift(random_bad);
        arr2.push(arr_actual);
        console.log('ultimate '+arr2);
        return arr2;
  }//Fin del if vegetables.
}