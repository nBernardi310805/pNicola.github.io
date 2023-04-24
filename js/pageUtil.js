/**
 * Utilità delle pagine. Crea la navbar e il footer e la ultradarkmode
 */
let vxx = 0, expired=false

addEventListener('DOMContentLoaded', creaNav)
addEventListener('DOMContentLoaded', veryDarkMode)
addEventListener('DOMContentLoaded', creaFooter)
addEventListener('DOMContentLoaded', injectLinks)
addEventListener('DOMContentLoaded', italianFlag)
 
function creaNav(){     // ` `
    let title = document.querySelector('title').innerText
    ss = false
    title = title.split(' -')
    title = title[0]      // abbiamo il titolo della pagina
    let navbar_name = ['Home', 'Sfondi', 'Didattica', 'Trucchi', 'Contatti', 'Interattivo']
    const THIS_PAGE = window.location.href
    let navbar_link = ['/', '/sfondi', '/didattica', '/trucchi', '/whoami', '/interattivo']
    let html = '<a href="/tulipano.html"><img src="/images/logoPuro.png" id="ii" alt="logo"></a><h1 class="titol" id="titol">Il Portale di Nicola</h1>'
    html += '<nav><h2 class="nav1" id="modTut">'
    for(let i=0; i<navbar_name.length; i++){
        html += '<a '
        console.log(i+1 + ' title: ' + title + ' nav: ' + navbar_name[i])
        if(!ss){
            switch (title){
                case 'Il Portale di Nicola':
                    html += 'class="active" '
                    ss = true
                    break;
                case navbar_name[i]:
                    html += 'class="active" '
                    ss = true
                    break
                default:
                    break;
            }
            if(navbar_name[i] == 'Sfondi' && (title=='Sfondi pg2' || title=='Sfondi pg3' || title=='Sfondi pg4' || title=='Sfondi di Natale')){
                html += 'class="active" '
            }
        }
        html += 'href="' + navbar_link[i] + '">' + navbar_name[i] + '</a> '
    }
    html += '</h2></nav>'
    if(title == 'Sfondi' || title=='Sfondi pg2' || title=='Sfondi pg3' || title=='Sfondi pg4' || title=='Sfondi di Natale'){
        const NAV_SFONDI_NAME = ['Pagina 1', 'Pagina 2', 'Pagina 3', 'Pagina 4', 'Sfondi di Natale']
        const NAV_SFONDI_PGNAME = ['Sfondi', 'Sfondi pg2', 'Sfondi pg3', 'Sfondi pg4', 'Sfondi di Natale']
        const NAV_SFONDI_PATH = ['/sfondi', '/sfondi/p2', '/sfondi/p3', '/sfondi/p4', '/sfondi/natale']
        html += '<div><h2>'
        for(let i=0; i<NAV_SFONDI_NAME.length; i++){
            html += '<a '
            switch(title){
                case NAV_SFONDI_PGNAME[i]:
                    html += 'class="active" '
                    break
                default:
                    break
            }
            html += 'href=' + NAV_SFONDI_PATH[i] + '>' + NAV_SFONDI_NAME[i] + '</a>'
        }
        html += '</h2></div>'
    }
    document.querySelector('header').innerHTML = html
}

function veryDarkMode(){
    if(localStorage.getItem('theme')=='dark')
        document.querySelector('body').style.backgroundColor = '#000000'
    else if(localStorage.getItem('theme')=='light'){
        document.querySelector('body').style.backgroundColor = '#ffffff'
        document.querySelector('p').style = 'color:black'
        let ris = prompt('Attenzione: questa feature è in alpha. Vuoi tornare alla modalità normale? Rispondi Y o N')
        if(ris.toUpperCase()=='Y'){
            localStorage.removeItem('theme')
            location.reload()
        }
    }
}


function creaFooter() {
    let html = '<h3>Portale Nicola</h3><p style="">Il Portale di Nicola, dal 17 maggio 2021 porta sfondi, easter egg e altro.N.B. Questo è un sito passatempo</p><p id="logged"></p>'
    document.querySelector('footer').innerHTML = html
}

function getById(id){
    return document.getElementById(id)
}

function setHTML(id, msg){
    document.getElementById(id).innerHTML = msg
}

function sostituisciImmagine(id){
    document.getElementById(id).src='/images/pasq.png'
}

function injectLinks(){
    const HEAD = document.querySelector('head')
    HEAD.innerHTML += '<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9843209517750049" crossorigin="anonymous"></script>'
}

function italianFlag(){
    const x = JSON.parse(localStorage.getItem('festa'))
    if(x==null){
        console.log("vi")
    }else if(x.value=='activated'&&(x.expiry-Date.parse(new Date()))>0)
        var interval = setInterval(changeHeaderBackground, 3000)
    else{
        localStorage.removeItem('festa')
        location.reload
        return
    }
}

function changeHeaderBackground(){
    const HEADER = document.querySelector('header')
    switch (vxx) {
        case 0:
            HEADER.style.backgroundColor = 'green'
            break
        case 1:
            HEADER.style.backgroundColor = 'white'
            document.getElementById('titol').style.color="black"
            break
        case 2:
            HEADER.style.backgroundColor = 'red'
            document.getElementById('titol').style.color="white"
            break
    }
    if(vxx==2)
        vxx=0
    else
        vxx++
}

function animazATema(){
    const item = {
		value: 'activated',
		expiry: Date.parse('2023-04-26')
	}
    localStorage.setItem('festa', (JSON.stringify(item)))
    italianFlag()
}