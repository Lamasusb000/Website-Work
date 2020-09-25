function PageSelector(){
    window.PeriodLength = document.getElementById("PayPeriod").value
    console.log(window.PeriodLength)
    if(window.PeriodLength == 1){
        window.location.href = "PageForOne.htm"
    }else{
        window.location.href = "PageForTwo.htm"
    }
}