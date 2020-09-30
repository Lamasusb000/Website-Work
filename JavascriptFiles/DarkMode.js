window.RootDataSet = document.documentElement.dataset

function DarkSwitch(){
	if (RootDataSet.theme == "light") {
		window.RootDataSet.theme = "dark"
		localStorage.setItem("Theme", "dark")
	}else{
		if (RootDataSet.theme == "dark"){
			window.RootDataSet.theme = "light"
			localStorage.setItem("Theme", "light")
		}else{
			console.log("An Error Has Occured")
		}
	}
}

function DarkCheck(){
	if (localStorage.getItem("Theme") == undefined) {
		window.RootDataSet.theme = "light"
		localStorage.setItem("Theme", "light")
		return
	}
	if (localStorage.getItem("Theme") == "light"){
		window.RootDataSet.theme = "light"
		localStorage.setItem("Theme", "light")
		return
	}
	if (localStorage.getItem("Theme") == "dark"){
		window.RootDataSet.theme = "dark"
		localStorage.setItem("Theme", "dark")
		return
	}
}