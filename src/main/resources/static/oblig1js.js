let kjopArray = [];

function visBilett() {
    //Utskrift av billetten
    let ut = "<table><tr>" +
        "<th>Navn</th><th>Adresse</th><th>Telefonnr</th>" +
        "</tr>";
    for (let p of kjopArray) {
        ut+="<tr>";
        ut+="<td>"+p.navn+"</td><td>"+p.adresse+"</td><td>"+p.telefonnr+"</td>"<td>"+p.telefonnr+"</td>";
        ut+="</tr>";
    }
}

function slett(){

}