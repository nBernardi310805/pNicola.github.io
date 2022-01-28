function premium(){
    let pId = document.getElementById('passId').value
    switch(pId) {
        case 'nBern.psl05':
            alert("Benvenuto Padrone")
            document.getElementById('msgL0').innerText="Accesso effettuato come Nicola Bernardi"

            break
        case 'bAnCh.amolagrammatica':
            alert("Benvenuta prof Annachiara Barizza")
            document.getElementById('msgL0').innerText="Accesso effettuato come Annachiara Barizza"
            
            break
        
    }
    
}