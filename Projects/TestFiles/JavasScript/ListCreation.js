let url = "JSON/data.json"
window.FileOutput = ""
async function fetchText() {
    let response = await fetch(url);

    console.log(response.status); // 200
    console.log(response.statusText); // OK

    if (response.status === 200) {
        let data = await response.json();
		// handle data
		window.FileOutput = data
		Renaming()
    }
}

fetchText();

function Renaming(){
	var People = FileOutput.People
	console.log(People)
	console.log(People[0].John[0].age)
}