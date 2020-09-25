function GoLight() {
    document.getElementById("PageStyle").innerHTML = "<link  id='PageStyle' rel='stylesheet' type='text/css' href='LightTheme.css'>"
	console.log("Transitioned To Light Mode")
}
function GoDark(){
    document.getElementById("PageStyle").innerHTML = "<link  id='PageStyle' rel='stylesheet' type='text/css' href='DarkTheme.css'>"
	console.log("Transitioned To Dark Mode")
}