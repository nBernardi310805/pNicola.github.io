addEventListener('DOMContentLoaded', checkTheme)
function changeTheme(){
    let i = document.getElementsByName('color')
    let j = null
    for(let x =0; x<i.length; x++){
        if(i[x].checked){
            j=i[x]
            break
        }
    }
    localStorage.setItem('color', j.value)
    location.reload
}
function checkTheme(){
    const COLOR = localStorage.getItem('color')
    if(COLOR==null){
        localStorage.setItem('color', 'def')
        document.getElementById('def').checked = true
        return
    }
    document.getElementById(COLOR).checked = true
}
