//Defining Of Variables
	//Variable Carrying Requested Array Data
window.RequestedData = []
	//Eaiser Way To Read File Directory
var Location = "/Test/Redbull.JSON"
	//ArrayVariable
var Output = []


async function FetchData() {
    let response = await fetch(Location);
    if (response.status === 200) {
        let data = await response.json();
		window.RequestedData = data
		CreateArray()
    }
}

//Requested Data On Loading of Script
FetchData()

//Creation and Posting of The Array
function CreateArray(){
	for (let i = 0; i < RequestedData.length; i++) {
		Output.push(`
			<p>
				Size ${RequestedData[i].Size} Fl oz
				<br>
				${RequestedData[i].CaseCount} Cans Per Case
				<br>
				Costs $${RequestedData[i].CaseCost} Per Case
			</p>
		`)
	}
	//Posting Array To Page
		//.join("") is Important to Remove "," Between Arrays
		//Insert Any Text Between To Change Seperator
	document.getElementById("Output").innerHTML = Output.join("")
}
