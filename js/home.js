addEventListener('DOMContentLoaded', ggRim)
function importante(){
    alert('IMPORTANTE:\nIl 25 giugno mi scade il dominio portalenicola.it.\n Il nuovo dominio sarà "ilportaledinicola.it".')
}
let i = 0
function usr(){
  //cont.innerText = i
  //setTimeout(aggiorna(i, cont), 1000)

  console.log(i)
  if(i> 251)
    return
    setInterval(500, prova)
    i++
}
function prova(){
  let cont = document.getElementById('nUtenti')
  cont.innerText = "ciao"
  setInterval(500, usr)
}

function aggiorna(n, dove){
    dove.innerText = n
    return
}
/**
 * Seriamente devo dirti cosa fa questa funzione? Non si capisce dal nome
 * che poi al tempo questa funzione la presi da internet
 * @returns 
 */
function countdown(){
  const total = Date.parse('2023-06-10')-Date.parse(Date())
  const seconds = Math.floor( (total/1000) % 60 );
  const minutes = Math.floor( (total/1000/60) % 60 );
  const hours = Math.floor( (total/(1000*60*60)) % 24 );
  const days = Math.floor( total/(1000*60*60*24) );
  return {
    total,
    days,
    hours,
    minutes,
    seconds
  };
}
/**
 * chiama la funzione modifica ogni secondo
 */
function ggRim(){
    setInterval(modifica, 1000)
}
/**
 * crea la stringa da scrivere
 */
function modifica(){
    document.getElementById('cosafaccio').innerText = countdown().days + 'gg, ' + countdown().hours + 'h, ' + countdown().minutes + "', " + countdown().seconds + "'' alla fine della scuola"
}
