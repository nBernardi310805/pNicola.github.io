addEventListener('DOMContentLoaded', ggRim)
addEventListener('DOMContentLoaded', uRim)
addEventListener('DOMContentLoaded', grg)

function aggiorna(n, dove){
    dove.innerText = n
    return
}
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
function ggRim(){
    setInterval(modifica, 1000)
}
function modifica(){
    document.getElementById('cosafaccio').innerText = countdown().days + 'gg, ' + countdown().hours + 'h, ' + countdown().minutes + "', " + countdown().seconds + "'' alla fine della scuola"
}
var users=0
function countup(){
    return users++
}
function uRim(){
    setInterval(mod, 50)
}
function mod(){
    const TARGET = document.getElementById('useratori')
    if(users<131)
        TARGET.innerText = countup()
    else{
        TARGET.style='color:gold; font-weight:bolder;'
        return
    }
}
function yyy(){
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
  function grg(){setInterval(jij, 1000)}
  function jij(){document.getElementById('c2y').innerText = yyy().days + 'gg, ' + yyy().hours + 'h, ' + yyy().minutes + "', " + yyy().seconds + "'' ai 2 anni del sito"}
  


