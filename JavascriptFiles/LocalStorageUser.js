function ChangeUsername(){
	console.log(document.getElementById("Username").value)
	if (document.getElementById("Username").value == null | document.getElementById("Username").value == "null" | document.getElementById("Username").value == ""){
		DeleteUsername()
	}else{
		localStorage.setItem("User's Name", document.getElementById("Username").value)
		document.getElementById("NameOutput").innerHTML = "<p class='animated'>Username Has Been Changed!<p>"
		document.getElementById("Username").setAttribute("Placeholder", localStorage.getItem("User's Name"))
		SendToPage()
	}
}

function SendToPage(){
	if (localStorage.getItem("User's Name") == "null" | localStorage.getItem("User's Name") == null){
		return
	}else{
		document.getElementById("Welcome").innerHTML = "Welcome " + localStorage.getItem("User's Name") + ", To Junior's Random Project Index"
		document.getElementById("Username").setAttribute("Placeholder", localStorage.getItem("User's Name"))
	}
	setTimeout(ResetNameOutput, 3500)
}

function ResetNameOutput(){
	document.getElementById("NameOutput").innerHTML = "<br>"
}
function DeleteUsername(){
	if (localStorage.getItem("User's Name") != undefined){
		localStorage.removeItem("User's Name")
		document.getElementById("NameOutput").innerHTML = "<p class='animated'>Your Username Has Been Deleted!</p>"
		document.getElementById("Username").setAttribute("Placeholder", localStorage.getItem("User's Name"))
		document.getElementById("Welcome").innerHTML = "Welcome To Junior's Random Project Index"
		setTimeout(ResetNameOutput, 3500)
	}else{
		if (localStorage.getItem("User's Name") == undefined){
			document.getElementById("NameOutput").innerHTML = "<p class='animated'>Your Name is Currently Not Set. Nothing Could be Deleted.<p>"
			setTimeout(ResetNameOutput, 3500)
		}
	}
}
function Reload(){
	location.reload()
}