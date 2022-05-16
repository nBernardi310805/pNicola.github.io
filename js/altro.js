//questa parte non la nascondo perché non c'è nulla di personale dentro
function down1(){
    document.getElementById('dw1').innerText="Download --> "
}
function downE1() {
    document.getElementById('dw1').innerText="Download"
}
function down2(){
    document.getElementById('dw2').innerText="Download --> "
}
function downE2() {
    document.getElementById('dw2').innerText="Download"
}
function down3(){
    document.getElementById('dw3').innerText="Download --> "
}
function downE3() {
    document.getElementById('dw3').innerText="Download"
}
function down4(){
    document.getElementById('dw4').innerText="Download --> "
}
function downE4() {
    document.getElementById('dw4').innerText="Download"
}
function down5(){
    document.getElementById('dw5').innerText="Download --> "
}
function downE5() {
    document.getElementById('dw5').innerText="Download"
}
function down6(){
    document.getElementById('dw6').innerText="Download --> "
}
function downE6() {
    document.getElementById('dw6').innerText="Download"
}
function down7(){
    document.getElementById('dw7').innerText="Download --> "
}
function downE7() {
    document.getElementById('dw7').innerText="Download"
}
function down8(){
    document.getElementById('dw8').innerText="Download --> "
}
function downE8() {
    document.getElementById('dw8').innerText="Download"
}
function down9(){
    document.getElementById('dw9').innerText="Download --> "
}
function downE9() {
    document.getElementById('dw9').innerText="Download"
}
function down10(){
    document.getElementById('dw10').innerText="Download --> "
}
function downE10() {
    document.getElementById('dw10').innerText="Download"
}
function down11(){
    document.getElementById('dw11').innerText="Download --> "
}
function downE11() {
    document.getElementById('dw11').innerText="Download"
}
function down12(){
    document.getElementById('dw12').innerText="Download --> "
}
function downE12() {
    document.getElementById('dw12').innerText="Download"
}
function down13(){
    document.getElementById('dw13').innerText="Download --> "
}
function downE13() {
    document.getElementById('dw13').innerText="Download"
}
function down14(){
    document.getElementById('dw14').innerText="Download --> "
}
function downE14() {
    document.getElementById('dw14').innerText="Download"
}
                         

function tip() {
    document.getElementById('tip').innerHTML='<p id="ccc" style="text-align:right;">Questa è la nuova pagina della Didattica: <br> Da essa puoi arrivare nella pagina del<br> C++, nella pagina dedicata a TPSIT<br> e prossimamente agli appunti</p>'
}
function ftipp() {
    document.getElementById('tip').innerHTML='<img src="../images/tru.png" alt="tip" id="sug">'
}

function dvC() {
    document.getElementById('dC').innerHTML='<iframe src="https://tpsit.tk/divinaCommedia"></iframe>'
}
function pc() {
    document.getElementById('pc').innerHTML='<iframe src="https://tpsit.tk/PC/it" style="background-color:white"></iframe>'
}
function sO() {
    document.getElementById('sO').innerHTML='<iframe src="https://tpsit.tk/SistemiOperativi" style="background-color:white"></iframe>'
}
function imc() {
    document.getElementById('imc').innerHTML='<iframe src="https://tpsit.tk/BERNARDI_imc" style="background-color:white"></iframe>'
}
function qA() {
    document.getElementById('quA').innerHTML='<iframe src="https://tpsit.tk/angoli/"></iframe>'
}
function tris() {
    document.getElementById('tris').innerHTML='<iframe class="fusc" src="../../giochi/tris" style="background-color:white"></iframe>'
}
function genPas() {
    document.getElementById('gP').innerHTML='<iframe class="fusc" src="https://tpsit.tk/generaPass/" style="background-color:white"></iframe>'
}
function tpsit() {
    document.getElementById('what').innerText='TPSIT è la materia che insegna a fare i siti web'
}
function fTpsit() {
    document.getElementById('what').innerText="Cos'è TPSIT"
}


// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
