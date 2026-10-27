
function cambioValuta(){
    let valuta= document.getElementById("valuta").value;
    valuta = parseFloat(valuta);
    let p;
    p=document.getElementById("sterline");
    p.innerHTML= "£" + ( valuta*0.87).toFixed(2);
    p=document.getElementById("dollari");
    p.innerHTML= "$" + (valuta*1.16).toFixed(2);
    p=document.getElementById("yen");
    p.innerHTML= "¥" + (valuta*178.16).toFixed(2);
}
function toggleDarkMode() {
    let body = document.body;
    let icon = document.getElementById('darkModeIcon');
    let text = document.getElementById('darkModeText');
    body.classList.toggle('dark-mode');
    if (body.classList.contains('dark-mode')) {
        icon.classList.remove('bi-toggle2-off');
        icon.classList.add('bi-toggle2-on');
        text.innerText = 'whitemode';
    } else {
        icon.classList.remove('bi-toggle2-on');
        icon.classList.add('bi-toggle2-off');
        text.innerText = 'darkmode';
    }
}

