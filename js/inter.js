//anche questa pagina ve la lascio visibile. Di nulla :)
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
    console.log(gg)
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
function random(){
    let a = document.getElementById('min').valueAsNumber
    let b = document.getElementById('max').valueAsNumber
    let c=0
    if(isNaN(b)){
        b=999000000000
    }
    
    c = (b-a)
    let ris = Math.floor(Math.random() * c) + a
    if(isNaN(ris)){
        alert('Non è che hai dimenticato di inserire qualcosa?')
    }
    if(isNaN(a)){
        document.getElementById('risult').innerText="Sì, ma almeno il valore di partenza mettilo!"
    }else{
        document.getElementById('risult').innerText=+ris
    }
}
