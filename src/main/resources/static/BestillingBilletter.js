const arrayBilletter = [];

function kjopBillett() {
    const funksjoner = [sjekkFilm, sjekkAnt, sjekkFor, sjekkEtt, sjekkTel, sjekkEpost];
    const arrayInputs = document.getElementsByName("input");
    let sjekkListe = [];

    for (let i = 0; i < funksjoner.length; i++) {
        sjekkListe.push(funksjoner[i](arrayInputs[i].value));
    }

    let sjekkFerdig = true;
    for (let sjekk of sjekkListe) {
        if (sjekk === false) {
            sjekkFerdig = false;
            break;
        }
    }

    if(sjekkFerdig) {
        const enBillett = {
            film: $("#velgFilm").val(),
            antall: $("#antall").val(),
            fornavn: $("#fornavn").val(),
            etternavn: $("#etternavn").val(),
            telefonnr: $("#telefonnr").val(),
            epost: $("#epost").val()
        };
        arrayBilletter.push(enBillett);
        visBilletter();
        document.getElementById("felter").reset();
    }
}

function visBilletter() {
    let utBilletter = "<table id='table'>" +
        "<tr><th>Film</th>" + "<th>Antall</th>" +
        "<th>Fornavn</th>" + "<th>Etternavn</th>" +
        "<th>Telefon</th>" + "<th>Epost</th></tr>";

    for (let enBillett of arrayBilletter) {
        utBilletter += "<tr><td>" + enBillett.film + "</td>" +
            "<td>" + enBillett.antall + "</td>" +
            "<td>" + enBillett.fornavn + "</td>" +
            "<td>" + enBillett.etternavn + "</td>" +
            "<td>" + enBillett.telefonnr + "</td>" +
            "<td>" + enBillett.epost + "</td></tr>";
    }
    utBilletter += "</table>";

    $(function () {
        $("#table").find("th, td").css("padding-left","40px");
    });
    $("#divUt").html(utBilletter);
}

function sjekkFilm(film) {
    const feilFilm = $("#feilFilm");
    feilFilm.text("");

    if (film === "Velg film her:") {
        feilFilm.text("Vennligst velg en film").css("color","red");
        return false;
    }
    else return true;
}

function sjekkAnt(antall) {
    const feilAnt = $("#feilAntall");
    feilAnt.text("");

    if (isNaN(Number(antall)) || antall < 1 || antall > 10) {
        feilAnt.text("Vennligst velg et gyldig antall").css("color","red");
        return false;
    }
    else return true;
}

function sjekkFor(fornavn) {
    const navnReg = /^[A-Åa-å]{2,30}$/ // "Alle store/små bokstaver, 2-30 tegn
    const navnSjekk = navnReg.test(fornavn)
    const feilFor =$("#feilFornavn");
    feilFor.text("");

    if (navnSjekk === false) {
        feilFor.text("Vennligst oppgi et gyldig fornavn").css("color","red");
        return false;
    }
    else return true;
}

function sjekkEtt(etternavn) {
    const navnReg = /^[A-Åa-å]{2,30}$/ // "Alle store/små bokstaver, 2-30 tegn
    const navnSjekk = navnReg.test(etternavn)
    const feilEtt = $("#feilEtternavn");
    feilEtt.text("");

    if (navnSjekk === false) {
        feilEtt.text("Vennligst oppgi et gyldig etternavn").css("color","red");
        return false;
    }
    else return true;
}

function sjekkTel(telefonnr) {
    const feilTel = $("#feilTelefonnr")
    feilTel.text("");

    if (isNaN(Number(telefonnr)) || telefonnr.length !== 8) {
        feilTel.text("Vennligst oppgi et gyldig telefonnr").css("color","red");
        return false;
    }
    else return true;
}

function sjekkEpost(epost) {
    const feilEpost = $("#feilEpost");
    feilEpost.text("");

    const epostReg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/ // "_@_domain._"
    const validering = epostReg.test(epost);

    if (validering === false) {
        feilEpost.text("Vennligst oppgi en gyldig epost").css("color","red");
        return false;
    }
    else return true;
}

function slettBilletter() {
    arrayBilletter.splice(0, arrayBilletter.length);
    visBilletter();
}

$(function () {
    $("#velgFilm").mouseover(function () {
        $("#velgFilm").css("cursor","pointer");
    });

    $("#kjop").mouseover(function () {
        $("#kjop").css("cursor","pointer");
    });

    $("#slett").mouseover(function () {
        $("#slett").css("cursor","pointer");
    });
});