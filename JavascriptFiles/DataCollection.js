var DataCollection = []

function FindData(){
	if (localStorage.getItem("Theme") != undefined){
		DataCollection.push("Theme Data is Set To: " + localStorage.getItem("Theme"))
	}
	if (localStorage.getItem("User's Name",) != undefined){
		DataCollection.push("User's Name is Set To: " + localStorage.getItem("User's Name"))
	}
	if (DataCollection.length > 0){
	document.getElementById("DataOutput").innerHTML = "<p class='animated'>" + DataCollection.join("<br>") + "</p>"
	}else{
	document.getElementById("DataOutput").innerHTML = "<p class='animated'>Currently, No Data is Stored in Your Browser</p>"
	}
	DataCollection = []
	setTimeout(HideData, 3000)
}

function HideData(){
	document.getElementById("DataOutput").innerHTML = "<p class='animated'></p>"
}

function DeleteData(){
	localStorage.clear()
	document.getElementById("DataOutput").innerHTML = "<p class='animated'>Your Data has been Deleted!</p>"
	setTimeout(HideData, 3000)
}