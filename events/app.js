const $title = document.querySelector(".title");

$title.textContent = "Hola";
$title.style.color = "indigo";
$title.style.textAlign = "center";
$title.style.textDecoration = "underline";
$title.style.fontSize = "325px";
$title.style.cursor = "pointer";
$title.style.userSelect = "none";
// $title.setAttribute('onclick', 'hola()')
$title.onclick = () => console.log("hola amigos!!");
