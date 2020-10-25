var user = ""
var UglyTime = ""
function StartPage(){
	console.log("Starting Functions")
	netlifyIdentity.on('init', user => DetectUser())
}

function DetectUser(){
	user = netlifyIdentity.currentUser()
	if (user == undefined) {
		console.log("No User Detected. Checking again in 400ms")
		setTimeout(SortUser, 400)
	}else{
		console.log("User Found! - " + user.user_metadata.full_name)
		SetEasyDate()
		DarkCheck()
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
		DarkCheck()
		SetPage()
	}
}

function SetPage(){
	console.log(user)
	const username = user.user_metadata.full_name
	document.getElementById("Menu").innerHTML = `
	<h1>Welcome ${username}! To Junior's Random Project Index</h1>
	<p>You've been a Member Since <strong>${NewTime}!</strong></p>
	<p>This is Barebones Website To Allow Quick Navigation of Random Projects</p>
	`
	document.getElementById("Login").innerHTML = `
	<span><h1>Account</h1><p>Beta: Changes are Not Life fed</p></span>
	<p>Previous Sessions Take Effect Upon Logging in</p>
	<p>lotout and Back in To Request Changes.</p>
	<input type="button" onclick="NetlifyLogout()" value="Logout">
	`
}
function NetlifyLogout(){
	//Does Not work With Firefox!!!!
	netlifyIdentity.logout()
	location.reload()
}

function SecretFunction(){
	netlifyIdentity.gotrue.currentUser().update({
		data: {
			SecretFunction: "You Found The Secret Function"
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

window.RootDataSet = document.documentElement.dataset

function DarkCheck(){
	var User = netlifyIdentity.currentUser()
	Theme = User.user_metadata.Theme
	if(Theme == "Light"){
		window.RootDataSet.theme = "Light"
		return
	}
	if(Theme == "Dark"){
		window.RootDataSet.theme = "Dark"
		return
	}
	if(Theme == undefined | Theme == ""){
		window.RootDataSet.theme = "Light"
		netlifyIdentity.gotrue.currentUser().update({
			data: {
				Theme: "Light"
			}
		})
		return
	}
}

function DarkSwitch(){
	var User = netlifyIdentity.currentUser()
	if (RootDataSet.theme == "Light" | RootDataSet.theme == "" | RootDataSet.theme == undefined){
		window.RootDataSet.theme = "Dark"
		netlifyIdentity.gotrue.currentUser().update({
			data: {
				Theme: "Dark"
			}
		})
		return
	}
	if (RootDataSet.theme == "Dark"){
		window.RootDataSet.theme = "Light"
		netlifyIdentity.gotrue.currentUser().update({
			data: {
				Theme: "Light"
			}
		})
		return
	}
	console.log("Could Not Change Colors")
}

//testing commands
function SDF(){
	netlifyIdentity.gotrue.currentUser().update({
		data: {
			Theme: "Dark"
		}
	}).then(user => console.log(user))
}
function SLF(){
	netlifyIdentity.gotrue.currentUser().update({
		data: {
			Theme: "Light"
		}
	}).then(user => console.log(user))
}
function STDF(){
	netlifyIdentity.gotrue.currentUser().update({
		data: {
			Theme: ""
		}
	}).then(user => console.log(user))
}