var user = ""
var UglyTime = ""
var FirstName = ""

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
		SetFirstName()
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
		SetFirstName()
		DarkCheck()
		SetPage()
	}
}

function LogUser(){
	User = netlifyIdentity.currentUser()
	console.log(User)
	return "User Array Listed Above"
}

function SetPage(){
	const Menu = document.getElementById("Menu")
	if (Menu != undefined){
		Menu.innerHTML = `
		<h1>Welcome ${FirstName}! To Junior's Random Project Index</h1>
		<p>You've been a Member Since <strong>${NewTime}!</strong></p>
		<p>This is Barebones Website To Allow Quick Navigation of Random Projects</p>
		`
	}
	const Login = document.getElementById("Login")
	if (Login != undefined){
		Login.innerHTML = `
		<h1 class="span">Account</h1>
		<p class="span">(Beta Feature)</p>
		<p>Previous Sessions Take Effect Upon Logging in</p>
		<p>logout and Back in To Request Changes.</p>
		<input type="button" onclick="NetlifyLogout()" value="Logout">
		`
	}
	return "Set Page Function Complete"
}
function NetlifyLogout(){
	//Does Not work With Firefox!!!!
	netlifyIdentity.logout()
	location.reload()
	return "Loging out of Netlify Account"
}

function SecretFunction(){
	netlifyIdentity.gotrue.currentUser().update({
		data: {
			SecretFunction: "You Found The Secret Function"
		}
	}).then(user => console.log(user))
	return "Secret Function was Found!"
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

function SetFirstName(){
	var User = netlifyIdentity.currentUser()
	var NameArray = User.user_metadata.full_name.split(" ")
	FirstName = NameArray[0]
	netlifyIdentity.gotrue.currentUser().update({
		data: {
			FirstName: `${FirstName}`
		}
	})
	return "First Name was Set"
}

window.RootDataSet = document.documentElement.dataset

function DarkCheck(){
	var User = netlifyIdentity.currentUser()
	Theme = User.user_metadata.Theme
	if(Theme == "Light"){
		window.RootDataSet.theme = "Light"
		return "Theme set to Light"
	}
	if(Theme == "Dark"){
		window.RootDataSet.theme = "Dark"
		return "Them set to Dark"
	}
	if(Theme == undefined | Theme == ""){
		window.RootDataSet.theme = "Light"
		netlifyIdentity.gotrue.currentUser().update({
			data: {
				Theme: "Light"
			}
		})
		return "Theme set to Light"
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
		return "Theme set to Dark"
	}
	if (RootDataSet.theme == "Dark"){
		window.RootDataSet.theme = "Light"
		netlifyIdentity.gotrue.currentUser().update({
			data: {
				Theme: "Light"
			}
		})
		return "Theme set to Light"
	}
	console.log("Could Not Change Colors")
}