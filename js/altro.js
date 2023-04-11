//questa parte non la nascondo perché non c'è nulla di personale dentro
function tip() {
    document.getElementById('tip').innerHTML='<p id="ccc" style="text-align:right;">Questa è la nuova pagina della Didattica: <br> Da essa puoi arrivare nella pagina del<br> C++, nella pagina dedicata a TPSIT<br> e prossimamente agli appunti</p>'
}
function ftipp() {
    document.getElementById('tip').innerHTML='<img src="../images/tru.png" alt="tip" id="sug">'
}

function dvC() {
    document.getElementById('dC').innerHTML='<iframe src="https://tpsit.nbernardi.tk/websites/divinaCommedia"></iframe>'
}
function pc() {
    document.getElementById('pc').innerHTML='<iframe src="https://tpsit.nbernardi.tk/websites/PC/it" style="background-color:white"></iframe>'
}
function sO() {
    document.getElementById('sO').innerHTML='<iframe src="https://tpsit.nbernardi.tk/websites/SistemiOperativi" style="background-color:white"></iframe>'
}
function imc() {
    document.getElementById('imc').innerHTML='<iframe src="https://tpsit.nbernardi.tk/websites/BERNARDI_imc" style="background-color:white"></iframe>'
}
function qA() {
    document.getElementById('quA').innerHTML='<iframe src="https://tpsit.nbernardi.tk/websites/angoli/"></iframe>'
}
function tris() {
    document.getElementById('tris').innerHTML='<iframe class="fusc" src="../../giochi/tris" style="background-color:white"></iframe>'
}
function aRand() {
    document.getElementById('arRand').innerHTML='<iframe src="https://tpsit.nbernardi.tk/websites/BERNARDI_random/" style="background-color:white"></iframe>'
}
function genPas() {
    document.getElementById('gP').innerHTML='<iframe src="https://tpsit.nbernardi.tk/websites/generaPass/" style="background-color:white"></iframe>'
}
function tpsit() {
    document.getElementById('what').innerText='TPSIT è la materia che insegna a fare i siti web e le applicazioni android. In questa pagina ci soffermiamo sui siti.'
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
