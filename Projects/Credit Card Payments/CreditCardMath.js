//Credit Card Amount Selector
function CreditQ(){
    window.CreditQuestion = document.getElementById("CreditQuestion").value
    console.log("There Are "+ window.CreditQuestion + " Credit Cards")
    if(window.CreditQuestion === "1"){
        document.getElementById("Info").innerHTML = "<form action='javascript:void(0);' method='post' enctype='text/plain'><h1>Amount Payable To Credit Cards</h1><h3>Amount To Nearest Dollar</h3><input type='number' id='Payable'><br><br><h1>Credit Card Balance To The Nearest Dollar</h1><h3>Credit Card One's Balance</h3><input type='number' id='Credit1'><br><br><input type='submit' onclick='Primer()'></form>"
    }
    if(window.CreditQuestion === "2"){
        document.getElementById("Info").innerHTML = "<form action='javascript:void(0);' method='post' enctype='text/plain'><h1>Amount Payable To Credit Cards</h1><h3>Amount To Nearest Dollar</h3><input type='number' id='Payable'><br><br><h1>Credit Card Balance To The Nearest Dollar</h1><h3>Credit Card One's Balance</h3><input type='number' id='Credit1'><br><h3>Credit Card's Two Balance</h3><input type='number' id='Credit2'><br><br><input type='submit' onclick='Primer()'></form>"
    }
    if(window.CreditQuestion === "3"){
        document.getElementById("Info").innerHTML = "<form action='javascript:void(0);' method='post' enctype='text/plain'><h1>Amount Payable To Credit Cards</h1><h3>Amount To Nearest Dollar</h3><input type='number' id='Payable'><br><br><h1>Credit Card Balance To The Nearest Dollar</h1><h3>Credit Card One's Balance</h3><input type='number' id='Credit1'><br><h3>Credit Card's Two Balance</h3><input type='number' id='Credit2'><br><h3>Credit Card Three's Balance</h3><input type='number' id='Credit3'><br><br><input type='submit' onclick='Primer()'></form>"
    }
}
//Selector of Function To Use
function Primer(){
    CreditCardAmount = window.CreditQuestion
    if(CreditCardAmount === "1"){
        window.Payable = document.getElementById("Payable").value
        window.StartCC1 = document.getElementById("Credit1").value
        document.getElementById("Info").innerHTML = "<h1 id='BalanceOne'></h1>"
        OneCreditCard()
    }
    if(CreditCardAmount === "2"){
        window.Payable = document.getElementById("Payable").value
        window.StartCC1 = document.getElementById("Credit1").value
        window.StartCC2 = document.getElementById("Credit2").value
        document.getElementById("Info").innerHTML = "<h1 id='BalanceOne'></h1><h1 id='BalanceTwo'></h1>"
        TwoCreditCards()
    }
    if(CreditCardAmount === "3"){
        window.Payable = document.getElementById("Payable").value
        window.StartCC1 = document.getElementById("Credit1").value
        window.StartCC2 = document.getElementById("Credit2").value
        window.StartCC3 = document.getElementById("Credit3").value
        document.getElementById("Info").innerHTML = "<h1 id='BalanceOne'></h1><h1 id='BalanceTwo'></h1><h1 id='BalanceThree'></h1>"
        ThreeCreditCards()
    }
}

//Credit Card Math Functions
function OneCreditCard(){
    //Declaration of Variables
    PayableBalance = window.Payable
    CCB1 = window.StartCC1
    
    //Balance Finding Math
    CCF1 = +PayableBalance - +CCB1
    console.log("Balance One is: $" + CCF1)
    
    //Wording Finder
    if(CCF1 > 0){
        document.getElementById("BalanceOne").innerHTML = "Credit Card One Paid Off in Full"
    }else{
        CCF1 = CCF1 * -1
        document.getElementById("BalanceOne").innerHTML = "Credit Card One's Remaining Balance is: $" + CCF1
    }
    }
function TwoCreditCards(){
    //Declaration of Variables
    PayableBalance = window.Payable
    CCB1 = window.StartCC1
    CCB2 = window.StartCC2
    
    //Balance Finding Math
    CCF1 = +PayableBalance - +CCB1
    console.log("Balance One is: $" + CCF1)
    if(CCF1 <= "0"){
        CCR1 = "0"
    }else{
        CCR1 = CCF1
    }
    CCF2 = +CCR1 - +CCB2
    console.log("Balance Two is: $" + CCF2)
    
    //Wording Finder
    if(CCF1 > 0){
        document.getElementById("BalanceOne").innerHTML = "Credit Card One Paid Off in Full"
    }else{
        CCF1 = CCF1 * -1
        document.getElementById("BalanceOne").innerHTML = "Credit Card One's Remaining Balance is: $" + CCF1
    }
    if(CCF2 > 0){
        document.getElementById("BalanceTwo").innerHTML = "Credit Card Two Paid Off in Full"
    }else{
        CCF2 = CCF2 * -1
        document.getElementById("BalanceTwo").innerHTML = "Credit Card One's Remaining Balance is: $" + CCF2
    }
    }
function ThreeCreditCards(){
//Declaration of Variables
PayableBalance = window.Payable
CCB1 = window.StartCC1
CCB2 = window.StartCC2
CCB3 = window.StartCC3

//Balance Finding Math
CCF1 = +PayableBalance - +CCB1
console.log("Balance One is: $" + CCF1)
if(CCF1 <= "0"){
    CCR1 = "0"
}else{
    CCR1 = CCF1
}
CCF2 = +CCR1 - +CCB2
console.log("Balance Two is: $" + CCF2)
if(CCF2 <= "0"){
    CCR2 = "0"
}else{
    CCR2 = CCF2
}
CCF3 = +CCR2 - +CCB3
console.log("Balance Three is: $" + CCF3)

//Wording Finder
if(CCF1 > 0){
    document.getElementById("BalanceOne").innerHTML = "Credit Card One Paid Off in Full"
}else{
    CCF1 = CCF1 * -1
    document.getElementById("BalanceOne").innerHTML = "Credit Card One's Remaining Balance is: $" + CCF1
}
if(CCF2 > 0){
    document.getElementById("BalanceTwo").innerHTML = "Credit Card Two Paid Off in Full"
}else{
    CCF2 = CCF2 * -1 
    document.getElementById("BalanceTwo").innerHTML = "Credit Card Two's Remaining Balance is: $" + CCF2
}
if(CCF3 > 0){
    document.getElementById("BalanceThree").innerHTML = "Credit Card Three Paid Off in Full"
}else{
    CCF3 = CCF3 * -1 
    document.getElementById("BalanceThree").innerHTML = "Credit Card Three's Remaining Balance is: $" + CCF3
}
}