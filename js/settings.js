addEventListener('DOMContentLoaded', checkTheme)
addEventListener('DOMContentLoaded', checkUDM)
addEventListener('DOMContentLoaded', checkFontActivated)
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
    location.reload()
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

function ultraDMSwitch() {
    let i = document.getElementsByName('theme')
    let j = null
    for(let x =0; x<i.length; x++){
        if(i[x].checked){
            j=i[x]
            break
        }
    }
    switch (j.value) {
        case 'normale':
            localStorage.setItem('theme', 'granchio98')
            break;
        case 'udm':
            localStorage.setItem('theme', 'dark')
            break
        case 'ogb':
            localStorage.setItem('theme', 'ogblue')
            break
    }
    location.reload()
}

function checkUDM(){
    if(localStorage.getItem('theme')=='dark')
        document.getElementById('udm').checked=true
    else if(localStorage.getItem('theme')=='ogblue')
        document.getElementById('ogb').checked=true
    else
        document.getElementById('normale').checked=true
}

function changeFont() {
    let i = document.getElementsByName('font')
    let j = null
    for(let x =0; x<i.length; x++){
        if(i[x].checked){
            j=i[x]
            break
        }
    }
    localStorage.setItem('font', j.value)
    location.reload()
}

function checkFontActivated() {
    const FONT = localStorage.getItem('font')
    document.getElementById('d').checked=true
    document.getElementById(FONT).checked = true
}