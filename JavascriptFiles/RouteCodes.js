
function Primer(){
	routes = document.getElementById("Routes").value
	window.TotalCV = document.getElementById("CVcount").value
	window.IntroPages = document.getElementById("IntroPages").value
	window.AllowedRoutes = ["CV","CX","MX"]
	if (routes == ""){
		document.getElementById("ErrorCodes").innerHTML = "<h2 id='ErrorMessage'> You Must Enter Route Codes Before Hitting Submit.</h2>"
		return
	}
	if (TotalCV == ""){
		window.TotalCV = 0
	}
	if (IntroPages == ""){
		window.IntroPages = 1
	}
	console.log("Total CV Routes- " + TotalCV)
	console.log("Total Intro Pages- " + IntroPages)
	DataMod()
}
function DataMod(){
	var routearray = routes.split(" ")
	var SortedRoutes = routearray.sort()
	console.log("Sorted Routes are " + SortedRoutes)
	console.log("The Total Route Count is " + SortedRoutes.length)
	var CVroutes = []
	var CXroutes = []
	var MXroutes = []
	window.ErrorCount = 0
	window.ErrorRouteCodes = []
	window.ErrorRouteNumbers = []
	window.ErrorRouteCodesCount = 0
	for (var i = 0; i < SortedRoutes.length; i++) {
		var RouteCode = SortedRoutes[i].slice(0, 2)
		var RouteNumber = + SortedRoutes[i].slice(2)
		console.log(SortedRoutes[i] + " - " + RouteCode + " " + RouteNumber)
		if (RouteCode == "CV"){
			if (Number.isInteger(RouteNumber) == false){
				window.ErrorCount ++
				window.ErrorRouteNumbers.push(RouteCode + RouteNumber)
			}else{
				CVroutes.push(RouteNumber)
			}
		}else{
			if (RouteCode == "CX"){
				if (Number.isInteger(RouteNumber) == false){
					window.ErrorCount ++
					window.ErrorRouteNumbers.push(RouteCode + RouteNumber)
				}else{
					CXroutes.push(RouteNumber)
				}
			}else{
				if (RouteCode == "MX"){
					if (isNaN(RouteNumber) == true){
						window.ErrorCount ++
						window.ErrorRouteNumbers.push(RouteCode + RouteNumber)
					}else{
						MXroutes.push(RouteNumber)
					}
			}else{
				ErrorRouteCodes.push(RouteCode + RouteNumber)
				window.ErrorCount ++ 
			}
			
		}
	}
}
	if (CVroutes.length > 0){
		console.log("CV Routes are " + CVroutes)
	}
	if (CXroutes.length > 0){
		console.log("CX Routes are " + CXroutes)
	}
	window.CVpages = []
	window.CXpages = []
	window.MXpages = []
	for (var i = 0; i < CVroutes.length; i++) {
		CVpages.push(+ CVroutes[i] + +IntroPages)
	}
	for (var i = 0; i < CXroutes.length; i++) {
		CXpages.push(+ CXroutes[i] + +TotalCV + +IntroPages)
	}
	for (var i = 0; i < MXroutes.length; i++){
		MXpages.push(+ MXroutes[i] + + IntroPages)
	}
	if(CVpages.length > 0){
		console.log("CV Page List is " + CVpages)
	}
	if (CXpages.length > 0){
		console.log("CX Page List is " + CXpages)
	}
	if (MXpages.length > 0){
		console.log("MX Page List is " + MXpages)
	}
	WriteToPage()
}
function WriteToPage(){
	var CVpages = window.CVpages
	var CXpages = window.CXpages
	var MXpages = window.MXpages
	var ErrorCount = window.ErrorCount
	var ErrorRouteCodes = window.ErrorRouteCodes
	var ErrorRouteNumbers = window.ErrorRouteNumbers
	var Masslist = CVpages.concat(CXpages, MXpages)
	var SortedList = Masslist.sort()
	document.getElementById("Centered").innerHTML = "<h1>Pages To Be Printed Are:</h1<br><br><h2>" + SortedList.join(', ') + "</h2>"
	if (ErrorCount > 0){
		if (ErrorRouteCodes.length > 0){
			if (ErrorRouteNumbers.length > 0){
			document.getElementById("ErrorCodes").innerHTML = "<h3>These Routes Could Not Be Sorted:</h3><h4>Invalid Route Codes: " + ErrorRouteCodes.join(', ') + "</h4><h4>Invalid Route Numbers: " + ErrorRouteNumbers.join(', ') + "</h4>"
			}else{
				document.getElementById("ErrorCodes").innerHTML = "<h3>These Routes Could Not Be Sorted:</h3><h4>Invalid Route Codes: " + ErrorRouteCodes.join(', ') + "</h4>"
			}
		}else{if(ErrorRouteNumbers.length > 0){
			document.getElementById("ErrorCodes").innerHTML = "<h3>These Routes Could Not Be Sorted:</h4><h4>Invalid Route Numbers: " + ErrorRouteNumbers.join(', ') + "</h4>"
			}
		}
	}
}