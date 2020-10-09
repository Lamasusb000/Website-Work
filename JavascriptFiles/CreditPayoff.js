//Function To Do All The C
function Getinfo(){
	//Collection of Info
	var Balance = document.getElementById("Balance").value
	var Rate = document.getElementById("Rate").value
	var Paid = document.getElementById("Paid").value
	
	if(Rate != null){
		Rate = Rate / 12
	}else{
		Rate = 0
	}

	//Defining Variables
	var StartBalance = Balance
	var Leftover = 0
	var Balances = []
	var Output = []
	var Interest = Rate / 100 + 1
	var PaidInterest = []
	var Rounding = 2
	var DisplayRate = Rate.toFixed(Rounding)
	var MaxCycles = 120 //Please Don't move higher than 600

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
			PaidInterest.push(0)
		}else{
			PaidInterest.push(Balance * Rate / 100)
			Balance = Balance * Interest
			Balances.push(Balance)
		}
		Cycles++
		if (Cycles > MaxCycles){
			alert(`
				More Than ${MaxCycles} Payments Is Not Allowed
				Increase Payment Amounts
				Or 
				Reduce Interest Rate`)
			return
		}
	}

	//Rounding The Balances Array (Var Determines How Many Decimals)
	Balances = Balances.map(function(elements){
		return (elements.toFixed(Rounding))
	})
	PaidInterest = PaidInterest.map(function(elements){
		return (elements.toFixed(Rounding))
	})
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

	//Starting Table
	Output.push(`
		<table class="center">
			<tr>
				<td>
					Payment Count
				</td>
				<td>
					Balance 
				</td>
				<td>
					Interest Charged
				</td>
			</tr>
			<tr>
				<td>
					Pre-Statement
				</td>
				<td>
					$${StartBalance}
				</td>
				<td>
					Monthly: ${DisplayRate}%
				</td>
			</tr>
	`)

	//Adding Month Summary To Output
	let CycleTimes = Cycles
	let Month = 1
	let Count = 0
	while(CycleTimes > 0){
		Output.push(`
			<tr>
				<td>
					${Month}
				</td>
				<td>
					$${Balances[Count]}
				</td>
				<td>
					$${PaidInterest[Count]}
				</td>
			</tr>
		`)
		CycleTimes = CycleTimes - 1
		Month++
		Count++
	}

	//Capping off Table
	Output.push(`
		</table>
	`)
	
	//Adding Paid off Count To Output
	if (Cycles > 0){
		if(Cycles > 1){
			Output.push(`
			<br>
			Balance Paid off in ${Cycles} Months!
		`)
		}else{
			Output.push(`
			<br>
			Balance Paid off in ${Cycles} Month!
			`)
		}
	}
	//Adding Leftover to Output
	if (Leftover > 0){
		Output.push(`
			<br>
			Final Payment had $${Leftover} Leftover
		`)
		}
	
	//Adding Total Interest to Output
	PaidInterest = PaidInterest.splice(",").map(Number)
    PaidInterest = PaidInterest.reduce(function(a, b){
        return a + b;
	}, 0);
	PaidInterest = PaidInterest.toFixed(Rounding)
	Output.push(`
		<br>
		Total Interest Paid: $${PaidInterest}
	`)

	//Adding Restart Button
	Output.push(`
		<br><br>
		<button onClick="window.location.reload();">Restart</button>
	`)

	//Logging for Debugging
	console.log(`Array Information
	Interest Paid is: ${PaidInterest} 
	`)

	//Writing To Page
	document.getElementById("Output").innerHTML = Output.join("")
}