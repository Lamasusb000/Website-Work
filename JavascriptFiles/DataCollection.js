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
		Website Metadata
		<ul>
	`)
	if (User.app_metadata.provider != undefined){
		Request.push(`
		<li>
			Account Provider: ${User.app_metadata.provider}
		</li>
		`)
	}
	if (User.app_metadata.roles != undefined){
		Request.push(`
		<li>Roles:
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
		Account Creation
		<ul>
	`)
	if (User.created_at != undefined){
		Request.push(`
		<li>
			Created at: ${User.created_at}
		</li>
		`)
	}
	if (User.confirmation_sent_at != undefined){
		Request.push(`
		<li>
			Confirmation Sent at: ${User.confirmation_sent_at}
		</li>
		`)
	}
	if (User.confirmed_at != undefined){
		Request.push(`
		<li>
			Confirmed at: ${User.confirmed_at}
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
	<li>User Information
		<ul>
	`)
	if (User.email != undefined){
		Request.push(`
		<li>
			Email: ${User.email}
		</li>
		`)
	}
	if (User.id != undefined){
		Request.push(`
		<li>
			Id Token (Do Not Share): ${User.id}
		</li>
		`)
	}
	if (User.user_metadata.length > 1){
		Request.push(`
		<li>
			User Metadata
			<ul>
		`)
		if (User.user_metadata.full_name != undefined){
			Request.push(`
			<li>
				Full Name: ${User.user_metadata.full_name}
			</li>
			`)
		}
		if (User.user_metadata.FirstName != undefined){
			Request.push(`
			<li>
				First Name: ${User.user_metadata.FirstName}
			</li>
			`)
		}
		if (User.user_metadata.SecretFunction != undefined){
			Request.push(`
			<li>
				You've Found The Secret Function in The Code!
			</li>
			`)
		}
		if (User.user_metadata.Theme != undefined){
			Request.push(`
			<li>
				Theme: ${User.user_metadata.Theme}
			</li>
			`)
		}
		Request.push(`
			</ul>
		</li>
		`)
	}
}