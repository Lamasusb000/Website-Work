window.People = ""
var URL = "/Test/Data.JSON"
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
		<ul>
			<li>
				Name:
				<ul>
					<li>
						${People.Name}
					</li>
				</ul>
			</li>
			<li>
				Age:
				<ul>
					<li>
						${People.Age}
					</li>
				</ul>
			</li>
			<li>
				Car:
				<ul>
					<li>
						${People.Car}
					</li>
				</ul>
			</li>
		</ul>
		<br>
	`
}
function Post(){
	People = window.People
	document.getElementById("Output").innerHTML = `
	<h1>List of People</h1>

	${People.map(Template).join("")}
`
}