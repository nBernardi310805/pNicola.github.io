/**
 * In BETA.
 * lavorerò a questo file se troverò la voglia di farlo
 */
addEventListener('DOMContentLoaded', creaNav)
addEventListener('DOMContentLoaded', veryDarkMode)
addEventListener('DOMContentLoaded', creaFooter)
 
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
    if(localStorage.getItem('ultraDM')=='true'){
        const d = document.querySelector('body')
        d.style.backgroundColor = '#000000'
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