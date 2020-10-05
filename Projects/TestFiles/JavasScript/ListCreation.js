let url = "JSON/data.json"
let response = ""
let commits = ""

async function fetchText() {
    let response = await fetch(url);

    console.log(response.status); // 200
    console.log(response.statusText); // OK

    if (response.status === 200) {
        let data = await response.text();
        // handle data
    }
}