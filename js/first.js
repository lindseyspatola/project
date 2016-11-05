document.getElementById("go").onclick = change;

function change() {

  var url = "http://lindseyspatola.com/project/images/";

  var sports = document.getElementById("question").value;

  var newSource = url + sports + ".jpg";

  var image = document.getElementById("sport");
  image.setAttribute("src", newSource);

}
