//anche questa pagina ve la lascio visibile. Di nulla :)
let x=true
let volte=0
function inizia(){
    document.getElementById('h').contentEditable="true"
    document.getElementById('m').contentEditable="true"
    document.getElementById('s').contentEditable="true"
    document.getElementById('g').contentEditable="true"
}
function convS(){
    let gg, hh, mm, ss, risultato = 0
    
    if(document.getElementById('g').value!=''){
        risultato = risultato + document.getElementById('g').value*86400
    }
    if(document.getElementById('h').value!=''){
        risultato = risultato + document.getElementById('h').value*3600
    }
    if(mm = document.getElementById('m').value!=''){
        risultato = risultato + document.getElementById('m').value*60
    }
    if(ss = document.getElementById('s').value!=''){
        risultato = risultato + document.getElementById('s').value*1
    }
    
    
    document.getElementById('ris').innerHTML=" " + risultato 

}

function preRand(){
    if(document.getElementById('inte').checked){
        inte()
    }else{
        random()
    }
}
function random(risTruc){
    let a = document.getElementById('min').valueAsNumber
    let b = document.getElementById('max').valueAsNumber
    let c=0
    if(isNaN(b)){
        b=999000000000
    }
    
    c = (b-a)
    let ris = Math.floor(Math.random() * c+1) + a
    if(isNaN(ris)){
        alert('Non è che hai dimenticato di inserire qualcosa?')
    }
   
    if(risTruc==1){
        return ris
    }else{
        if(isNaN(a)){
            document.getElementById('risult').innerText="Sì, ma almeno il valore di partenza mettilo!"
        }else{
            returnaRis(ris)
        }
    }


}
function returnaRis(ris){
    document.getElementById('risult').innerText=+ris
}


function inte(){
    let risTruc=1
    document.getElementById('min').value='1'
    document.getElementById('max').value='24'
    let riss = random(risTruc)
    if(riss==6){
        returnaRis(12)
    }else {
        returnaRis(riss)
    }
}

function testaOcroce(){
    let x = Math.floor(Math.random() * 2)
    document.getElementById('tira').value='Ri-tira la moneta'
    volte++
    if(x==0){
        document.getElementById('teOcr').innerHTML='<img src="../images/testa.png" style="width:20%"><br> \n <p>Ho tirato la moneta ed è uscita testa.'
        
    }else
        document.getElementById('teOcr').innerHTML='<img src="../images/croce.png" style="width:20%"><br> \n <p>Ho tirato la moneta ed è uscito croce.'
    document.getElementById('vv').innerText="" + volte
}

function generaPassword() {
    const CARATTERI = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!"#$%&()*+,-./:;<=>?@[]^_`{|}~'
    //const MAIUSCOLE = MINUSCOLE.toUpperCase()
    const NUMERI = '1234567890'
    const SIMBOLI = '!"#$%&()*+,-./:;<=>?@[]^_`{|}~'
    const LENGTH = document.getElementById('numberP').innerText
    let password = ''
    for(let i=0; i<LENGTH; i++){
        password += CARATTERI[Math.floor(Math.random()*CARATTERI.length)]
    }
    document.getElementById('passGen').innerText = password
}

function aggiornaNumPass() {
    const N = document.getElementById('range').valueAsNumber 
    document.getElementById('numberP').innerText = N + 8
}

function copyPass() {
    navigator.clipboard.writeText(document.getElementById('passGen').innerText);
}