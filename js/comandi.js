function cmd(){
    let tulip, com, nam, mat, log, inn, nm
    alert('Terminal - BETA')
    com = prompt('In questo "terminale", inserendo i comandi giusti vedrai tanti easter eggs', 'help')
    if(com=='help'){
        alert('PROVA CON name PER INIZIARE')
    }
    if(com=='alociN'){
        document.getElementById('titol').innerHTML="alociN id elatroP lI"
        document.getElementById('ciao').innerHTML="alociN id elatroP lI"
        alert('eneB aV')
    }
    if(com=='name'){
        alert('Salve ' + (nam = prompt('Per iniziare inserisci il tuo nome e cognome (con iniz. maiuscole)', 'Mario Fucsi')))
        if(nam=='Tulipano Gianpierpaolo'){
            document.getElementById('ioo').innerHTML="Ciao, so la Marisa!"
            
        }
        if(nam=='Nicola Bernardi'){
            alert('Salve mio creatore!')
        }
        if(nam=='Annachiara Barizza'){
            alert('Buongiorno professoressa, ha visto? La ho resa parte di un easter egg', 'p.s. gli apostrofi non me li fa usare')
        }
        if(nam=='la prof'){
            alert('Chiedo scusa prof. Spero le piaccia il mio sito :)')
            document.getElementById('cosafaccio').innerHTML="Cosa faccio? Nulla, devo studiare. ^_^' "
        }
        document.getElementById('logged').innerHTML="Non hai effettuato l'accesso, ma hai detto che sei " + nam
    }
    if(com=='this site is mine'){
        alert('Salve ' + (io = prompt('Chi sei?', 'Nicola')))
        document.getElementById('titol').innerHTML="Il portale di " + io
        document.getElementById('ciao').innerHTML="Il portale di " + io
        document.getElementById('ioo').innerHTML="Sono un tizio a caso che è arrivato di punto in bianco e ha reclamato questo sito"
        document.getElementById('cosafaccio').innerHTML="Ogni lunedì... non so"
    }
    if(com=='#boba6unaclava'){
        alert('Boba6unaclavaohohohhoh')
    }
    if(com=='cappuccino'){
        alert('Sono stanco')
    }
    if(com=='nicola'){
        alert('' + (mat = prompt('Qual è la materia che nicola odia di più? ', 'scrivi qui (non mettere lettere maiuscole)')) + '?')
        if(mat=='grammatica'){
            alert('bravo, hai indovinato! Come premio ti svelo un altro comando da inserire: name E POI la prof')
        }else{
            alert('Mi spiace, ma no.')
        }
    }
    if(com=='login'){
        log = prompt('Accedi: ', 'username')
        inn = prompt('Accedi: ', 'password')
        if(log=='pisel' && inn=='.tk'){
            alert('Thomas, è lei?')
        }
        if(log=='annachiarabarizza' && inn=='cappuccino'){
            alert('Buonsalve prof')
            document.getElementById('logged').innerHTML="Accesso effettuato come Annachiara Barizza"
            document.getElementById('pArea').innerHTML="Pof Barizza, queste sono le novità: Intendo ampliare il terminale del sito. Provi il comando 'cappuccino'. Il sito è hostato su GitHub. github.com/nBernardi310805/pNicola.github.io"
        }
        if(log=='nicolabernardi' && inn=='clavaaa'){
            alert('Buonsalve Padrone')
            document.getElementById('logged').innerHTML="Accesso effettuato come Nicola Bernardi"
            document.getElementById('pArea').innerHTML="Padrone, quando Ha voglia ampli i comandi del terminale."
        }
        if(log=='sofiaW' && inn=='ciaooo'){
            alert('Buonciao Sofia')
            document.getElementById('logged').innerHTML="Accesso effettuato come Sofia Waddah"
            document.getElementById('pArea').innerHTML="Lo sapevi che... Il terminale contiene molti Easter eggs. Prova a scriverci 'alociN'."
        }
    }
    if(com=='easter egg'){
        alert('Credevi davvero che fossi così prevedibile?')
        alert('Ebene sì, lo sono. Bravo hai trovato un easter egg')
        alert('In realtà sto cercando di essere prevedibile sennò non li trova nessuno gli easter egg')
    }
    if(com=='informatica'){
        alert('...Il mercoledì, il venerdì e il sabato...')
    }
    if(com=='che ore sono?'){
        alert('Per chi mi hai preso? Per alexa?')
    }
    if(com=='OllyTheBest'){
        alert('Vero, peccato che non troverà mai nessuno questo eastter egg, ma è comunque un omaggio')
    }
    if(com=='tpsit'){
        alert('Non dire al prof Niero che per fare questa pagina ho usato una trentina di IF...')
    }
   if(com=='stronzo'){
       alert('stronzo sarai tu')
   }
   if(com=='il tuo sito fa schifo'){
       alert('Esplodi, haters')
       document.getElementById('ciao').innerHTML="Il Portale di Nicola - Uniti contro gli haters."
   }
   if(com=='contatti'){
       alert('mail@portalenicola.it - Grazie. (Se non si fosse capito è un easter egg)')
   }
   if(com=='more c++ programs, please'){
       alert('Vuoi più programmi? Se vuoi donami così ne porto di più, ma dato che me lo chiedi ti do un bonus: https://drive.google.com/file/d/1T8FdLICJp4rypcfHQmr8aDkfBidAz3w8/view?usp=sharing')
   }
   if(com=='I am a hero'){
       alert('maybe...')
       nm = prompt('E va bene. Chi sei? ', 'Tulipano Gianpierpaolo')
       document.getElementById('donaaa').innerHTML="Eroe ma taccagno: " + nm
   }
    if(com=='pwd'){
        alert('github.com/nBernardi310805/pNicola.github.io')
    }
    if('tuz'){
        alert('TuzCla')
    }
}







function account(){
    alert('Per avere un account bisogna essere premium. Con una donazione di almeno 1€ si potrà avere account con novità esclusive, codice sorgente del sito e il proprio nome scritto in Home page nel "riquadro degli eroi"')
}
