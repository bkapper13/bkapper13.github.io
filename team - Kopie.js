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
var pferdzahl = parseInt(document.getElementById("pferdnum").value);
var bauerzahl = parseInt(document.getElementById("bauernum").value);
var damezahl = parseInt(document.getElementById("damenum").value);
var koenigzahl = parseInt(document.getElementById("koenignum").value);
var laeuferzahl = parseInt(document.getElementById("laeufernum").value);
var i = 0;
var a = 0;
function ausgabeFunction(){
for(a=0;a<gesamt;a++){
  if(a<pferdzahl){
        var pferdImage = new Image(900,310);
        pferdImage.src = 'images/Pferd_bearbeitet.png';
        document.body.appendChild(pferdImage);}
    else if (a<bauerzahl+pferdzahl){
        var bauerImage = new Image(900,310);
        bauerImage.src = 'images/Bauer_bearbeitet.png';
        document.body.appendChild(bauerImage);}
    else if (a<bauerzahl+pferdzahl+damezahl){
        var dameImage = new Image(900,310);
        dameImage.src = 'images/Dame_bearbeitet.png';
        document.body.appendChild(dameImage);}
    else if (a<bauerzahl+pferdzahl+damezahl+koenigzahl){
        var koenigImage = new Image(900,310);
        koenigImage.src = 'images/Koenig_bearbeitet.jpg';
        document.body.appendChild(koenigImage);}
    else if (a<bauerzahl+pferdzahl+damezahl+koenigzahl+laeuferzahl){
        var laeuferImage = new Image(900,310);
        laeuferImage.src = 'images/Laeufer_bearbeitet.png';
        document.body.appendChild(laeuferImage);}
    function sortFunction(){
        namis.sort(function(a, b){return 0.5 - Math.random()});
    }
  var t = document.createTextNode("->  " + namis[a]);
  document.body.appendChild(t);
  var s = document.createElement("br");
  document.body.appendChild(s);
}}
