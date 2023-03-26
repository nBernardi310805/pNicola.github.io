addEventListener('DOMContentLoaded', ggRim)
addEventListener('DOMContentLoaded', premessa)
/**
 * Seriamente devo dirti cosa fa questa funzione? Non si capisce dal nome
 * che poi al tempo questa funzione la presi da internet
 * @returns 
 */
function countdown(){
    const total = Date.parse('2023-05-17')-Date.parse(Date())
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
      document.getElementById('cosafaccio').innerText = countdown().days + 'gg, ' + countdown().hours + 'h, ' + countdown().minutes + "', " + countdown().seconds + "'' ai 2 anni del sito"
  }
  
  function premessa(){
    alert('PREMESSA: \nCon tutta probabilità questa sarà la pagina più cringe del mio sito. Per favore, abbiate pietà e non giudicatemi, avevo 15 anni. La pagina non è completa')
  }