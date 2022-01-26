
function inizia(){
    document.getElementById('h').contentEditable="true"
    document.getElementById('m').contentEditable="true"
    document.getElementById('s').contentEditable="true"
    document.getElementById('g').contentEditable="true"
}
function convS(){
    let gg, hh, mm, ss, risultato = 0
    if(document.getElementById('g').textContent!='0'){
        risultato = risultato + document.getElementById('g').textContent*86400
    }
    console.log(gg)
    if(document.getElementById('h').textContent!='0'){
        risultato = risultato + document.getElementById('h').textContent*3600
    }
    if(mm = document.getElementById('m').textContent!='0'){
        risultato = risultato + document.getElementById('m').textContent*60
    }
    if(ss = document.getElementById('s').textContent!='0'){
        risultato = risultato + document.getElementById('s').textContent
    }
    
    
    document.getElementById('ris').innerHTML=" " + risultato

}