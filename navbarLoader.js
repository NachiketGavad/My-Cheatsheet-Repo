// navbarLoader.js
function loadNavbar(navbarId, navbarFile) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById(navbarId).innerHTML = this.responseText;
        }
    };
    xhttp.open("GET", navbarFile, true);
    xhttp.send();
}
