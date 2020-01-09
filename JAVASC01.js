function namener() {
    var ihrname = prompt("Bitte Ihren Namen\neingeben:", "Name");
    if (ihrname != null) {
        alert("Sie haben eingegeben:\n" + ihrname + "\nVielen Dank");
    }
    document.getElementById("Alert").style.visibility = "visible";
    document.getElementById("Alert").append(ihrname)
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
    var x = document.getElementsByClassName("jumbotron");
    for (var i = 0; i < x.length; i++) {
        x[i].style.backgroundColor = "rgb(31, 29, 29)";
        x[i].style.color = "white";
    }
}

function whitemode() {
    document.getElementById("body").style.backgroundColor = "white";
    document.getElementById("body").style.color = "black";
    var x = document.getElementsByClassName("jumbotron");
    for (var i = 0; i < x.length; i++) {
        x[i].style.backgroundColor = "white";
        x[i].style.color = "black";
    }
}