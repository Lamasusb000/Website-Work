netlifyIdentity.on('init', User => StartData())
var User = ""
var Output = ""

function StartData(){
	User = netlifyIdentity.currentUser()
	Output = `
	<ul
		${AppMeta()}
		${Creation()}
	</ul>
	`
	Output = Output.join("")
	console.log(Output)
	document.getElementById("Data").innerHTML = Output
}

function AppMeta(){
	var Request = []
	//starting request
	Request.push(`
	<li>
		App Metadata
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
		return Request
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
		return Request
	}else{
		return ""
	}

}