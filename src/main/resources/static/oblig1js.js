let kinoArray = [];

function visBilett() {



        const antall = document.getElementById("antall").value;
        const fornNavn = document.getElementById("fornNavn").value;
        const etterNavn = document.getElementById("etterNavn").value;
        const telefonNr = document.getElementById("telefonNr").value;
        const epost = document.getElementById("epost").value;

        const kinoinfo = {
            antall: antall,
            fornNavn: fornNavn,
            etterNavn: etterNavn,
            telefonNr: telefonNr,
            epost: epost
        }

        kinoArray.push(kinoinfo);

        let output = document.getElementById("output");
        output.innerHTML = ""; // Tømmer output-elementet før vi legger til ny informasjon

        for (let i = 0; i < kinoArray.length; i++) {
            output.innerHTML += "<p><strong>Billett " + (i + 1) + ":</strong><br>" +
                "Antall: " + kinoArray[i].antall +
                " Fornavn: " + kinoArray[i].fornNavn +
                " Etternavn: " + kinoArray[i].etterNavn +
                " Telefonnr: " + kinoArray[i].telefonNr +
                " Epost: " + kinoArray[i].epost + "</p>";
        }


        document.getElementById("antall").value = "";
        document.getElementById("fornNavn").value = "";
        document.getElementById("etterNavn").value = "";
        document.getElementById("telefonNr").value = "";
        document.getElementById("epost").value = "";

}


    function slettArray() {
        kinoArray = [];
        let output = document.getElementById("output");
        output.innerHTML = ""; // Tømmer output-elementet etter at vi har tømt arrayet
    }

