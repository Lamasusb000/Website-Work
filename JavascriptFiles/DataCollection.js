netlifyIdentity.on('init', User => StartData())
var User = ""
var Output = ""

function StartData(){
	User = netlifyIdentity.currentUser()
	Output = `
	<ul>
		${WebMeta()}
		${Creation()}
		${UserInfo()}
	</ul>
	`
	document.getElementById("Data").innerHTML = Output
}

function WebMeta(){
	var Request = []
	//starting request
	Request.push(`
	<li>
		<strong>Website Metadata</strong>
		<ul>
	`)
	if (User.app_metadata.provider != undefined){
		Request.push(`
		<li>
			<strong>Account Provider:</strong> ${User.app_metadata.provider}
		</li>
		`)
	}
	if (User.app_metadata.roles != undefined){
		Request.push(`
		<li>
			<strong>Roles:</strong>
			<ul>
		`)
		for (let i = 0; i < User.app_metadata.roles.length; i++) {
			Request.push(`
			<li>
				${User.app_metadata.roles[i]}
			</li>
			`)
		}
		Request.push(`
			</ul>
		</li>
		`)
	}
	//Capping request
	Request.push(`
		</ul>
	</li>
	`)
	//Conditional return
	if (Request.length > 2){
		return Request.join("")
	}else{
		return ""
	}
}
function Creation(){
	var Request = []
	//Starting Request
	Request.push(`
	<li> 
		<strong>Account Creation</strong>
		<ul>
	`)
	if (User.created_at != undefined){
		Request.push(`
		<li>
			<strong>Created at:</strong> ${DateConverter(User.created_at)}
		</li>
		`)
	}
	if (User.confirmation_sent_at != undefined){
		Request.push(`
		<li>
			<strong>Confirmation Sent at:</strong> ${DateConverter(User.confirmation_sent_at)}
		</li>
		`)
	}
	if (User.confirmed_at != undefined){
		Request.push(`
		<li>
			<strong>Confirmed at:</strong> ${DateConverter(User.confirmed_at)}
		</li>
		`)
	}
	if (User.updated_at != undefined){
		Request.push(`
		<li>
			<strong>Last Updated:</strong> ${DateConverter(User.updated_at)}
		</li>
		`)
	}
	//Capping Request
	Request.push(`
		</ul>
	</li>
	`)
	if (Request.length > 2){
		return Request.join("")
	}else{
		return ""
	}
}

function UserInfo(){
	var Request = []
	Request.push(`
	<li>
		<strong>Account Information</strong>
		<ul>
	`)
	if (User.email != undefined){
		Request.push(`
		<li>
			<strong>Email:</strong> ${User.email}
		</li>
		`)
	}
	if (User.id != undefined){
		Request.push(`
		<li>
			<strong>Id Token (Do Not Share)</strong>: ${User.id}
		</li>
		`)
	}
	
	//User Metadata
	Request.push(`
	<li>
		<strong>User Metadata</strong>
		<ul>
	`)
	if (User.user_metadata.full_name != undefined){
		Request.push(`
		<li>
			<strong>Full Name:</strong> ${User.user_metadata.full_name}
		</li>
		`)
	}
	if (User.user_metadata.FirstName != undefined){
		Request.push(`
		<li>
			<strong>First Name:</strong> ${User.user_metadata.FirstName}
		</li>
		`)
	}
	if (User.user_metadata.SecretFunction != undefined){
		Request.push(`
		<li>
			<strong>You've Found The Secret Function in The Code!</strong>
		</li>
		`)
	}
	if (User.user_metadata.Theme != undefined){
		Request.push(`
		<li>
			<strong>Theme:</strong> ${User.user_metadata.Theme}
		</li>
		`)
	}
	Request.push(`
		</ul>
	</li>
	`)
	if (Request.length > 2){
		return Request.join("")
	}else{
		return ""
	}
}

function DateConverter(Starter){
	var [Day, Month, Year, Hour, Minute, AorP] = [0,0,0,0,0,""]
	Year = Starter.slice(0,4)
	Month = Starter.slice(5, 7)
	Day = Starter.slice(8, 10)
	Hour = Starter.slice(11,13)
	Minute = Starter.slice(14,16)
	if (Hour > 12){
		Hour = Hour - 12
		AorP = "PM"
	}else{
		AorP = "AM"
	}
	return `${Hour}:${Minute}${AorP}  ${Month}/${Day}/${Year}`
}