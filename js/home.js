function importante(){
    alert('IMPORTANTE:\nIl 25 giugno mi scade il dominio portalenicola.it.\n Il nuovo dominio sarà "ilportaledinicola.it".')
}

function usr(){
    let cont = document.getElementById('nUtenti')
    for(let i=1; i<=252; i++){
        //cont.innerText = i
        //setTimeout(aggiorna(i, cont), 1000)
        setInterval(1000, cont.innerText = i)
        console.log(i)
    }
}

function aggiorna(n, dove){
    dove.innerText = n
    return
}

function countdown(){

  const total = Date.parse('2022-06-08')-Date.parse(Date())
  const seconds = Math.floor( (total/1000) % 60 );
  const minutes = Math.floor( (total/1000/60) % 60 );
  const hours = Math.floor( (total/(1000*60*60)) % 24 );
  const days = Math.floor( total/(1000*60*60*24) );
    /*console.log(total)
    console.log(seconds)
    console.log(minutes)
    console.log(hours)
    console.log(days) */
  return {
    total,
    days,
    hours,
    minutes,
    seconds
  };
}

function ggRim(){
    setInterval(modifica, 1000)
}
function modifica(){
    document.getElementById('cosafaccio').innerText = countdown().days + 'gg, ' + countdown().hours + 'h, ' + countdown().minutes + "', " + countdown().seconds + "'' alla fine della scuola"
}
