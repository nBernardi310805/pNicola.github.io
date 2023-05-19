addEventListener('DOMContentLoaded', ggRim)
addEventListener('DOMContentLoaded', premessa)
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
  function ggRim(){
      setInterval(modifica, 1000)
  }
  function modifica(){
      document.getElementById('cosafaccio').innerText = countdown().days + 'gg, ' + countdown().hours + 'h, ' + countdown().minutes + "', " + countdown().seconds + "'' ai 2 anni del sito"
  }
  function premessa(){
    //alert('PREMESSA: \nCon tutta probabilità questa sarà la pagina più cringe del mio sito. Per favore, abbiate pietà e non giudicatemi, avevo 15 anni. La pagina non è completa')
    if(!localStorage.getItem('timeMachine')=='on'){
      location.href = '/'
    }
  }