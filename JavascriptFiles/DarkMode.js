window.RootDataSet = document.documentElement.dataset


function DarkSwitch(){
	console.log(RootDataSet.theme)
	if (RootDataSet.theme == undefined) {
		window.RootDataSet.theme = "dark"
		localStorage.setItem("Theme", "dark")
	}else{
		if (RootDataSet.theme == "dark"){
			window.RootDataSet.theme = ""
			localStorage.clear("Theme")
		}else{
			console.log("An Error Has Occured")
		}
	}
}

function DarkCheck(){
	if (localStorage.getItem("Theme") == ""){
		window.RootDataSet.theme = ""
		localStorage.clear("Theme")
		return
	}
	if (localStorage.getItem("Theme") == "dark"){
		window.RootDataSet.theme = "dark"
		localStorage.setItem("Theme", "dark")
		return
	}
}