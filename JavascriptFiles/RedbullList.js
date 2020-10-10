//Defining Of Variables
	//Variable Carrying Requested Array Data
window.RequestedData = []
	//Eaiser Way To Read File Directory
var Location = "/JSONfiles/Redbull.JSON"
	//ArrayVariable
var Output = []
	//Math Variables
var CostPerOz = []
var CostPerCan = []
var FinalCost = []
var Rounding = 2 //Rounds to Two Decimals


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
	//Math For The Cans
	var FlavorPrice = [RequestedData[0].Cost / RequestedData[0].Size]
	var FlavoringCost = []
	for (let i = 1; i < RequestedData.length; i++){
		FlavoringCost[i] = RequestedData[i].Size * FlavorPrice
	}
	for (let i = 1; i < RequestedData.length; i++){
		CostPerOz[i] = RequestedData[i].Cost / RequestedData[i].CaseCount / RequestedData[i].Size
	}
	for (let i = 1; i < RequestedData.length; i++){
		CostPerCan[i] = RequestedData[i].Cost / RequestedData[i].CaseCount
	}
	for (let i = 1; i < RequestedData.length; i++){
		FinalCost[i] = RequestedData[i].Cost / RequestedData[i].CaseCount + FlavoringCost[i]
	}
	//Rounding of Numbers
	CostPerOz = CostPerOz.map(function(elements){
		return (elements.toFixed(Rounding))
	})
	CostPerCan = CostPerCan.map(function(elements){
		return (elements.toFixed(Rounding))
	})
	FinalCost = FinalCost.map(function(elements){
		return (elements.toFixed(Rounding))
	})
	FlavoringCost = FlavoringCost.map(function(elements){
		return (elements.toFixed(Rounding))
	})
	for (let i = 0; i < RequestedData.length; i++) {
		RequestedData[i].Cost = RequestedData[i].Cost.toFixed(Rounding)
	}
	FlavorPrice = (+FlavorPrice).toFixed(Rounding)

	//Posting Data To Array
	Output.push(`
		<fieldset>
			<a href="${RequestedData[0].Link}">
				<strong>${RequestedData[0].Size}ml ${RequestedData[0].Item}</strong>
			</a>
			<br>
			Cost per Bottle: $${RequestedData[0].Cost}
			<br><br>
			Amount Per Redbull fl oz: ${RequestedData[0].ServingML}ml
			<br>
			Cost Per Redbull Fl oz: ~$${FlavorPrice}
		</fieldset>
	`)
	for (let i = 1; i < RequestedData.length; i++) {
		Output.push(`
			<fieldset>
				<a href="${RequestedData[i].Link}">
					<strong>${RequestedData[i].Size} Fl oz ${RequestedData[i].Item}</strong>
				</a>
				<br>
				${RequestedData[i].CaseCount} Cans Per Case
				<br>
				Costs $${RequestedData[i].Cost} Per Case
				Costs $${CostPerCan[i]}
				<br><br>
				Final Costs
				<br>
				Redbull Costs $${CostPerCan[i]}
				<br>
				Flavoring Costs: $${FlavoringCost[i]}
				<br><br>
				<strong>Final Cost For The ${RequestedData[i].Size} Fl oz Drink is: $${FinalCost[i]}</strong>
			</Fieldset>
		`)
	}

	//Posting Array To Page
		//.join("") is Important to Remove "," Between Arrays
		//Insert Any Text Between To Change Seperator
	document.getElementById("Output").innerHTML = Output.join("<br>")
}


