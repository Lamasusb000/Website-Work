//Function To Do All The C
function Getinfo(){
	//Collection of Info
	var Balance = document.getElementById("Balance").value
	var Rate = document.getElementById("Rate").value / 12
	var Paid = document.getElementById("Paid").value
	
	//Defining Variables
	var Leftover = 0
	var Balances = []
	var Output = []
	var Interest = Rate / 100 + 1
	var PaidInterest = []

	//Logging for Debugging
	console.log(`Information is:
	Amount Paid is ${Balance}
	Montly Interest Rate is ${Rate}%
	Balance Change Per Cycle ${Interest}
	Amount Paid is ${Paid}
	`)
	
	//Calculating Cycles
	let Cycles = 0
	while (Balance > 0){
		Balance = Balance - Paid
		if(Balance < 0){
			var Leftover = Balance * -1
			Balances[Cycles] = 0
		}else{
			PaidInterest.push(Balance * Rate / 100)
			Balance = Balance * Interest
			Balances.push(Balance)
		}
		Cycles++
	}

	//Interest Addition
	PaidInterest = PaidInterest.reduce(function(a,b){
		return a + b
	})

	//Rounding The Balances Array (Var Determines How Many Decimals)
	var Rounding = 2
	Balances = Balances.map(function(elements){
		return (elements.toFixed(Rounding))
	})
	PaidInterest = PaidInterest.toFixed(Rounding)
	Leftover = Leftover.toFixed(Rounding)
	

	//Logging For Debugging
	console.log(`Cycle Information
	Paid off in ${Cycles} Cycles
	With $${Leftover} Leftover
	`)

	//Adding Header To Output
	Output.push(`
		<h1>Summary</h1>
	`)

	//Adding Month Summary To Output
	let CycleTimes = Cycles
	let Month = 1
	let Count = 0
	while(CycleTimes > 0){
		Output.push(`
			Month ${Month} Balance: $${Balances[Count]}
		`)
		CycleTimes = CycleTimes - 1
		Month++
		Count++
	}
	
	//Adding Paid off Count To Output
	if (Cycles > 0){
		Output.push(`
			<br>
			Balance Paid off in ${Cycles} Months!
		`)
	}
	//Adding Leftover to Output
	if (Leftover > 0){
		Output.push(`
			Final Payment had $${Leftover} Leftover
		`)
		}
		
	//Adding Total Interest to Output
	Output.push(`
		Total Interest Paid: $${PaidInterest}
	`)

	//Adding Restart Button
	Output.push(`
		<br><br>
		<button onClick="window.location.reload();">Restart</button>
	`)

	//Logging for Debugging
	console.log(`Array Information
	Output Data is: ${Output}
	Interest Paid is: ${PaidInterest} 
	`)

	//Writing To Page
	document.getElementById("Output").innerHTML = Output.join("<br>")
}