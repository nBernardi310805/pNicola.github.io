function accedi(){
    let username = document.getElementById('username').value
    let password = document.getElementById('password').value
    document.getElementById('usr').innerText="Questo è l'username che hai inserito: " + username
    document.getElementById('pass').innerText="Questa è la password che hai inserito: " + password
}