//Definition von var gesamt   
    var pferdnum = parseInt(document.getElementById("pferdnum").value);
    var bauernum = parseInt(document.getElementById("bauernum").value);
    var damenum = parseInt(document.getElementById("damenum").value);
    var koenignum = parseInt(document.getElementById("koenignum").value);
    var laeufernum = parseInt(document.getElementById("laeufernum").value);
    var gesamt = pferdnum + bauernum + laeufernum + damenum + koenignum;

   

//Nameneingabe
var namis = Array(gesamt);
var b = 0;
function eingabeFunction(){
for(b=0;b<gesamt;b++){
    namis[b]=prompt("Name:", "");
}}
//Definition der Variablen
var pferdzahl = parseInt(document.getElementById("pferdnum").value);
var bauerzahl = parseInt(document.getElementById("bauernum").value);
var damezahl = parseInt(document.getElementById("damenum").value);
var koenigzahl = parseInt(document.getElementById("koenignum").value);
var laeuferzahl = parseInt(document.getElementById("laeufernum").value);
var i = 0;
var a = 0;
//ZUFALLSGENERATOR
var runde = 1;
function ausgabeFunction(){
var round = document.createElement('round');
 round.style.fontSize = '400%';
round.style.fontFamily = 'Grand Hotel';
  round.appendChild(document.createTextNode("  Runde " + runde));
  document.body.appendChild(round);
 runde = runde + 1;
  var ueberschrift = document.createElement("br");
  document.body.appendChild(ueberschrift);
var supi = namis.sort(func);
function func(a, b){  
  return 0.5 - Math.random();
}
//Output
for(a=0;a<gesamt;a++){
  if(a<pferdzahl){
        var pferdImage = new Image(900,310);
        pferdImage.src = 'images/Pferd_bearbeitet2.png';
        document.body.appendChild(pferdImage);}
    else if (a<bauerzahl+pferdzahl){
        var bauerImage = new Image(900,310);
        bauerImage.src = 'images/Bauer_bearbeitet2.png';
        document.body.appendChild(bauerImage);}
    else if (a<bauerzahl+pferdzahl+damezahl){
        var dameImage = new Image(900,310);
        dameImage.src = 'images/Dame_bearbeitet2.png';
        document.body.appendChild(dameImage);}
    else if (a<bauerzahl+pferdzahl+damezahl+koenigzahl){
        var koenigImage = new Image(900,310);
        koenigImage.src = 'images/Koenig_bearbeitet2.png';
        document.body.appendChild(koenigImage);}
    else if (a<bauerzahl+pferdzahl+damezahl+koenigzahl+laeuferzahl){
        var laeuferImage = new Image(900,310);
        laeuferImage.src = 'images/Laeufer_bearbeitet2.png';
        document.body.appendChild(laeuferImage);}
var span = document.createElement('span');
 span.style.fontSize = '240%';
span.style.fontFamily = 'Grand Hotel';
  span.appendChild(document.createTextNode("->  " + supi[a]));
  document.body.appendChild(span);
  var s = document.createElement("br");
  document.body.appendChild(s);
}}