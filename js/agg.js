function premium(){
    let pId = document.getElementById('passId').value
    switch(pId) {
        case 'nBern.psl05':
            alert("Benvenuto Padrone")
            document.getElementById('msgL').innerText="Accesso effettuato come Nicola Bernardi"
            document.getElementById('msgc').innerText="Verrà ulteriormente allargata la parte TPSIT; \n Verranno create nuove pagine dedicate ad altre materie."
            
            break
        case 'bAnCh.amolagrammatica':
            alert("Benvenuta prof Annachiara Barizza")
            document.getElementById('msgL').innerText="Accesso effettuato come Annachiara Barizza"
            document.getElementById('msgc').innerText="Verrà ulteriormente allargata la parte TPSIT; \n Verranno create nuove pagine dedicate ad altre materie."
            break
        
    }
}
