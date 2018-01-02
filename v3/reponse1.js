
function myFunction1() {
var x = commentsAppelle();
document.getElementById("reponse1").innerHTML = x;
}

function commentsAppelle() {
    var nom = document.getElementById("nom").value;
	message = "Le nom est "+ nom;
    if ( nom == "") {
        message = "Merci de rentrer un nom";
    }
	return message;
	}
