window.People = ""
var URL = "/JSONfiles/People.JSON"
async function fetchText() {
    let response = await fetch(URL);

    console.log(response.status); // 200
    console.log(response.statusText); // OK

    if (response.status === 200) {
        let data = await response.json();
		window.People = data
		console.log(People)
		Post()
    }
}
fetchText();

function Template(People){
	return`
		<h3>${People.Name}</h3>
		<ul>
			<li>
				<strong>
					Age: 
				</strong>
				${People.Age}
			</li>
			<li>
				<strong>
					Car: 
				</strong>
				${People.Car}
			</li>
			<li>
				<strong>
					Job: 
				</strong>
				${People.Job}
			</li>
		</ul>
	`
}
function Post(){
	People = window.People
	document.getElementById("Output").innerHTML = `
	<h1>List of People</h1>

	${People.map(Template).join("")}
`
}