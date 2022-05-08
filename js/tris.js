let win = false
let moss = []
let ai = false
moss.length = 10
moss.fill(0)
var puntiX = 0
var puntiO = 0
console.log(puntiX)
function wipe(pti) {
    moss.fill(0)
    win=false
    for(let i=1; i<10; i++){
        document.getElementById(i).innerText = ''
    }
    if(pti==false){
        puntiO = 0; puntiX = 0
        document.getElementById('pux').innerText = '' + puntiX
        document.getElementById('puo').innerText = puntiO
    }
}
function turnoNuovo(){
    moss.fill(0)
    win=false

    for(let i=1; i<10; i++){
        document.getElementById(i).innerText = ''
    }
}
function aii(){
    ai = true
    wipe(false)
}
function endAi(){
    ai = false
    wipe(false)
}
function clicked(pos) {
    let nMos = Number(document.getElementById('mv').innerText)
    let turno = document.getElementById('trn').innerText    // Guarda a chi tocca e se lo segna
    if (moss[pos] != 0) {
        alert('Casella già occupata')
        return 0
    }
    segnaCella(pos, turno)  //  Inserisce il simbolo corrispondente nella cella cliccata
    moss[pos] = turno
        if (moss[1] == turno && moss[2] == turno && moss[3] == turno)
            win = true
        else if (moss[4] == turno && moss[5] == turno && moss[6] == turno)
            win = true
        else if (moss[7] == turno && moss[8] == turno && moss[9] == turno)
            win = true
        else if (moss[1] == turno && moss[4] == turno && moss[7] == turno)
            win = true
        else if (moss[2] == turno && moss[5] == turno && moss[8] == turno)
            win = true
        else if (moss[3] == turno && moss[6] == turno && moss[9] == turno)
            win = true
        else if (moss[1] == turno && moss[5] == turno && moss[9] == turno)
            win = true
        else if (moss[3] == turno && moss[5] == turno && moss[7] == turno)
            win = true
        if(win==true){
            alert(turno + ' vince!')
            if(turno=='X'){
                puntiX++
                document.getElementById('pux').innerText = '' + puntiX
                if(ai==true){
                    setTimeout(wipe, 1000)
                    return 0
                }
            }else{
                puntiO++
                document.getElementById('puo').innerText = puntiO
                alert(turno + ' vince!')
            }
            setTimeout(wipe, 1000)
        }
    document.getElementById('mv').innerText = nMos + 1
    fineTurno(turno)
}


function segnaCella(pos, chi) {
    document.getElementById(pos).innerText = chi
}

function fineTurno(turno) {
    if (turno == 'X') {
        document.getElementById('trn').innerText = 'O'
        if(ai==true){
            setTimeout(pcMove, 2000)
        }
    } else {
        document.getElementById('trn').innerText = 'X'
    }
}

function pcMove(){
    let moved = false
    do{
        let mov = Math.floor(Math.random()*9+1)
        console.log(mov)
        if(moss[mov]==0){
            //moss[mov] = 'O'
            //segnaCella(mov, 'O')
            clicked(mov)
            break
        }
    }while(!moved)
    //fineTurno('O')
}