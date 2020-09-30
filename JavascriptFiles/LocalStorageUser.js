function ChangeUsername(){
	console.log(document.getElementById("Username").value)
	if (document.getElementById("Username").value == null | document.getElementById("Username").value == "null" | document.getElementById("Username").value == ""){
		document.getElementById("NameOutput").innerHTML = "<p class='animated'>Click The Button Below If You Wish To Delete Your Name<p>"
	}else{
		localStorage.setItem("User's Name", document.getElementById("Username").value)
		document.getElementById("NameOutput").innerHTML = "<p class='animated'>Username Has Been Changed!<p>"
		SendToPage()
	}
}

function SendToPage(){
	if (localStorage.getItem("User's Name") == "null" | localStorage.getItem("User's Name") == null){
		return
	}else{
		document.getElementById("Welcome").innerHTML = "Welcome " + localStorage.getItem("User's Name") + ", To Junior's Random Project Index"
	}
	setTimeout(ResetNameOutput, 3000)
}

function ResetNameOutput(){
	document.getElementById("NameOutput").innerHTML = ""
}
function DeleteUsername(){
	localStorage.removeItem("User's Name")
	document.getElementById("NameOutput").innerHTML = "<p class='animated'>Your Username Has Been Deleted!</p>"
	setTimeout(Reload, 2000)
}
function Reload(){
	location.reload()
}