function dbutton() {
    maintable = document.getElementById('maintable');
    maintable.style.setProperty('--formbg', 'var(--formbgdark)');
    maintable.style.color = "white";
    buttond = document.getElementById("mbuttond");
    buttonl = document.getElementById("mbuttonl");
    buttonl.style.setProperty('--formbg', 'var(--formbgdark)');
    buttonl.style.color = "white";
    buttonl.style.visibility = "visible";
    buttond.style.visibility = "hidden";
    document.body.style.setProperty('--bodybg', 'var(--bodybgdark)');
}

function lbutton() {
    maintable = document.getElementById('maintable');
    maintable.style.setProperty('--formbg', 'var(--formbglight)');
    maintable.style.color = "black";
    buttond = document.getElementById("mbuttond");
    buttonl = document.getElementById("mbuttonl");
    buttond.style.setProperty('--formbg', 'var(--formbglight)');
    buttond.style.color = "black";
    buttond.style.visibility = "visible";
    buttonl.style.visibility = "hidden";
    document.body.style.setProperty('--bodybg', 'var(--bodybglight)');
}

function pwvisibility() {
    pw = document.getElementById("pw");
    if (pw.type === "text") {
        pw.type = "password";
    }
    else {
        pw.type = "text";
    }
    cpw = document.getElementById("cpw");
    if (cpw.type === "text") {
        cpw.type = "password";
    }
    else {
        cpw.type = "text";
    }
}

function pwbuttonvis1() {
    document.getElementById("pwbutton1").style.visibility = "visible";
    document.getElementById("pwbutton2").style.visibility = "hidden";
}

function pwbuttonvis2() {
    document.getElementById("pwbutton2").style.visibility = "visible";
    document.getElementById("pwbutton1").style.visibility = "hidden";
}
