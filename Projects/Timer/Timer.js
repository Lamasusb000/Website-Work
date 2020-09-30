//Starting Times 
function Test(){
	setTimeout(1000)
	console.log("Test Code was Ran")
	//Starting Times
	var SHour = document.getElementById("SHour").value
	var StartM = document.getElementById("SMinute").value
	var StartAMorPM = document.getElementById("StartAMorPM").value
	console.log("Testing Code Start Time is: " + SHour + ":" + StartM + StartAMorPM)
	if(StartAMorPM === "PM"){
		if(SHour === "12"){
			StartH = SHour
		}else{
			StartH = + SHour + 12
		}
	}else{
		if(StartAMorPM === "12"){
			SHour = "0"
		}else{
		StartH = SHour 
	}
}
if(StartH > 12){
	var StartTwelveH = + StartH + 12
	} else{
	var StartTwelveH = StartH
	}
var StartTime = StartTwelveH + ":" + StartM

//Ending Times
	var EHour = document.getElementById("EHour").value
	var EMinute = document.getElementById("EMinute").value
	var EndAMorPM = document.getElementById("EndAMorPM").value
	window.SemiM = EMinute
	console.log("Testing Code End Time is: " + EHour + ":" + SemiM + EndAMorPM)
	if(EndAMorPM === "PM"){
		if(EHour === "12"){
			EndH = EHour
		}else{
			EndH = + EHour + 12
		}
	}else{
		if(EndAMorPM === "12"){
			EHour = "24"
		}else{
		EndH = EHour
	}
	}
	window.SemiH = EndH
if(EndH > 12){
	var EndTwelveH = EndH - 12
	} else{
	var EndTwelveH = EndH
	}
var EndTime = EndTwelveH + ":" + SemiM

//Total Time Between Points
if(StartM > SemiM){
	TotalH = EndH - StartH - 1
	TotalM = SemiM - 60
	} else{
	TotalH = EndH - StartH
	TotalM = SemiM - StartM
	}
console.log("Total Length is " + TotalH + " Hours and " + TotalM +" Minutes")
	CumulativeMinutes = TotalH * 60 +  + TotalM
console.log("The Total Amount of Minutes is " + CumulativeMinutes)

//One Time Time Check For Console Log
var TimeCheck = new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
console.log("Current Time is " + TimeCheck)

//Console Information Insertion
window.Intervals = document.getElementById("Intervals").value
console.log("Refresh Interval is: " + Intervals)
window.Display = document.getElementById("Display").value
console.log("The Display is: " + Display)

//Time Starter
StartTimer()
}

//Loop Function Priming
function StartTimer(){
	console.log("Timer is Primed")
	TimerMath()
}
//Function In Depth Commands
function TimerMath(){
	setTimeout(function (){
		var CurrentHour = new Date().toLocaleTimeString('en-GB', {hour: '2-digit'});
		var CurrentMinute = new Date().toLocaleTimeString([], {minute:'2-digit'});

		HoursLeft = +SemiH - CurrentHour
		MinutesLeft = +SemiM - CurrentMinute
			if(MinutesLeft < 0){
				MinutesLeft = (+ MinutesLeft + 60)
				HoursLeft = + HoursLeft - 1
				}

			if(HoursLeft <= 0){
				HoursLeft = 0
			}
		CurrentTotalMinutes = HoursLeft * 60 + MinutesLeft
		var PercentageRemaining = (CurrentTotalMinutes / CumulativeMinutes - 1) * -100
		var OutputPercent = PercentageRemaining.toFixed(2)
		var CountdownMinutes = + CurrentTotalMinutes % 60
		console.log("Current Time is: " + CurrentHour + ":" + CurrentMinute + " Math Was Complete: " + CurrentTotalMinutes + " Minutes Remaining" + " " + OutputPercent + "% Complete")
		if(Display === "Percent"){
			document.getElementById("CenterText").innerHTML = "<h1 id='countdown'>" + OutputPercent + "% <br> Complete</h1>"
			document.getElementById("countdown").innerHTML = "<h1 id='countdown'>" + OutputPercent + "% <br> Complete</h1>"
			}
		if(Display === "Countdown"){
			document.getElementById("CenterText").innerHTML = "<h1 id='countdown'>" + HoursLeft + " Hours <br> " + CountdownMinutes + " Minutes</h1>"
			document.getElementById("countdown").innerHTML = "<h1 id='countdown'>" + HoursLeft + " Hours <br> " + CountdownMinutes + " Minutes</h1>"
			}
		if(Display === "Both"){
			document.getElementById("CenterText").innerHTML = "<h1 id='countdown'>" + HoursLeft + " Hours <br> " + CountdownMinutes + " Minutes<br>" + OutputPercent + "% <br> Complete</h1>"
			document.getElementById("countdown").innerHTML = "<h1 id='countdown'>" + HoursLeft + " Hours <br> " + CountdownMinutes + " Minutes<br>" + OutputPercent + "% <br> Complete</h1>"
			}
		if(CurrentTotalMinutes <= 0){
			document.getElementById("countdown").innerHTML = "<h1>All Finished!</h1>"
			return;
			}
		TimerMath()
	}, window.Intervals)
}