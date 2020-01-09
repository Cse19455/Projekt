function namener() {
    var ihrname = prompt("Bitte Ihren Namen\neingeben:", "Name");
    if (ihrname != null) {
        alert("Sie haben eingegeben:\n" + ihrname + "\nVielen Dank");
        return name;
    }
}

function summe(a, b, ...restliche) {
    var summe = a + b;
    for (i = 0; i < restliche.length; i++) {
        summe += restliche[i];
    }
    return summe;
}

function name() {
    var1 = window.outerHeight;
    var2 = window.outerWidth;
    document.getElementById("size").innerHTML = "Fenstergröße: " + var1 + " x " + var2;
}

$(document).ready(function() {
    name();
})


function darkmode() {
    document.getElementById("body").style.backgroundColor = "rgb(31, 29, 29)";
    document.getElementById("body").style.color = "white";
    document.getElementById("Jumbotron").style.backgroundColor = "rgb(31, 29, 29)";
    document.getElementById("Jumbotron").style.color = "white";
}

function whitemode() {
    document.getElementById("body").style.backgroundColor = "white";
    document.getElementById("body").style.color = "black";
    document.getElementById("Jumbotron").style.backgroundColor = "white";
    document.getElementById("Jumbotron").style.color = "black";
}