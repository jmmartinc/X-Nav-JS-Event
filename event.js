var formColor = document.getElementById('code');
var viewer = document.getElementById('viewer');
function event() {
	viewer.style.backgroundColor = formColor.value;
}
formColor.addEventListener('input',event);

