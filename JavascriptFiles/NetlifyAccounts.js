var user = ""
var UglyTime = ""
function StartPage(){
	console.log("Starting Functions")
	netlifyIdentity.on('init', user => DetectUser())
}

function DetectUser(){
	user = netlifyIdentity.currentUser()
	if (user == undefined) {
		console.log("No User Detected. Checking again in 350ms")
		setTimeout(SortUser, 350)
	}else{
		console.log("User Found! - " + user.user_metadata.full_name)
		SetEasyDate()
		SetPage()
	}
}

function SortUser(){
	user = netlifyIdentity.currentUser()
	if (user == undefined) {
		console.log("Final Check. No User Detected")
	}else{
		console.log("User Found! - " + user.user_metadata.full_name)
		SetEasyDate()
		SetPage()
	}
}

function SetPage(){
	console.log(user)
	const username = user.user_metadata.full_name
	document.getElementById("Menu").innerHTML = `
	<h1>Welcome ${username}! To Junior's Random Project Index</h1>
	<p>Member Since <strong>${NewTime}</strong></p>
	<br>
	<input type="button" onclick="NetlifyLogout()" value="Logout">
	`
}
function NetlifyLogout(){
	netlifyIdentity.logout()
	location.reload()
}

function SecretFunction(){
	netlifyIdentity.gotrue.currentUser().update({
		data: {
			
		}
	}).then(user => console.log(user))
}

UglyTime = user.confirmed_at
var Year = ""
var Month = ""
var Day = ""
NewTime = []

function SetEasyDate(){


	UglyTime = user.confirmed_at
	var Year = ""
	var Month = ""
	var Day = ""

	//Adding Times
	Month = UglyTime.slice(5, 7)
	NewTime.push(Month)
	Day = UglyTime.slice(8, 10)
	NewTime.push(Day)
	Year = UglyTime.slice(0,4)
	NewTime.push(Year)
	//creation of new time
	NewTime = NewTime.join("/")
}