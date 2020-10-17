var RequestedData = ""
var Location = "/JSONfiles/Crewmates.JSON"
var CheckBoxes = []
var SelectedColors = []
var Tiles = []
var TileArray = []
var TileCount = 0
var ImposterChance = 0

async function FetchData() {
    let response = await fetch(Location);
    if (response.status === 200) {
        let data = await response.json();
		RequestedData = data
		CreateBoxes()
    }
}

//Requested Data On Loading of Script
FetchData()

function CreateBoxes(){
	CheckBoxes.push(`<div class="Container" id="Container">`)
	for (let i = 0; i < RequestedData.length; i++) {
		CheckBoxes.push(`
		<div class="Tile" id="${i}Tile">
			<img src="${RequestedData[i].Link}">
			<br>
			<input type="checkbox" id="${i}" checked="true">${RequestedData[i].Color}</input>
		</div>
		`)
	}
	CheckBoxes.push(`
		</div>
		<div class="Center">
			<input type="button" value="Submit" onclick="CollectData()">
		</div>
	`)
	document.getElementById("Container").innerHTML = CheckBoxes.join("")
}

function CollectData(){
	SelectedColors = []
	for (let i = 0; i < RequestedData.length; i++) {
		if (document.getElementById(`${i}`).checked == true){
			SelectedColors.push(i)
			TileArray.push(i)
		}
	}
	TileCount = SelectedColors.length
	ImposterChance = (100 / TileCount).toFixed(0)
	CreateTiles()
}

function CreateTiles(){
	document.getElementById("Container").setAttribute("Class", "Container")
	for (let i = 0; i < SelectedColors.length; i++) {
		Tiles.push(`
		<button onclick="Check(${i})" id="${i}Tile">
		<div class="Tile">
			<h1>
				${RequestedData[SelectedColors[i]].Color}
			</h1>
			<p id="${i}Percent">
				Chance of Being Imposter ${ImposterChance}%
			</p>
			<img src="${RequestedData[SelectedColors[i]].Link}">
			<br>
		</div>
		</button>
		`)
	}
	document.getElementById("Container").innerHTML = Tiles.join("")
}

function Check(TileNumber){
	SelectedTile = document.getElementById(`${TileNumber}Tile`)
	SelectedTile.remove()
	--TileCount
	delete TileArray[TileNumber]
	TileList = TileArray.filter(function(element){
		return element !== undefined
	})
	ImposterChance = (100 / TileList.length).toFixed(0)
	console.log(TileList)
	console.log(ImposterChance)
	UpdatePercent()
}

function UpdatePercent(){
	for (let i = 0; i < TileList.length; i++) {
		document.getElementById(`${TileList[i]}Percent`).innerHTML = `Chance of Being Imposter ${ImposterChance}%`
	}
}