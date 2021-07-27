var nextBtn = document.getElementById("next");
var checkBtn = document.getElementById("check");

nextBtn.addEventListener("click", function(){
    if(!document.getElementById("bill-amount").value)
        alert("Enter the bill amount");
    else 
        document.getElementById("cash").style.display = "block";
})

checkBtn.addEventListener("click",function(){
    let billAmt = parseInt(document.getElementById("bill-amount").value);
    let cashGiven = parseInt(document.getElementById("cash-given").value);

    if(!cashGiven)
    {
        alert("Enter the cash given");
        return;
    }
    else if(cashGiven < billAmt)
    {
        alert("Cash given should be greater than or equal to bill amount");
        return;
    }

    if(cashGiven === billAmt)
    {
        document.getElementById("no-return").style.display = "block";
        return;
    }
    else
    {
        document.getElementById("no-return").style.display = "none";
    }
    
    
    let den = [2000, 500, 100, 20, 10, 5, 1]
    let balance  = cashGiven - billAmt;
    for(let i=0;i<den.length;i++){
        if(balance > 0 && balance >= den[i] )
        {
            let numOfNotes = Math.floor( balance/den[i] );
            document.getElementById(den[i]).innerText = numOfNotes;      
            balance = balance - (den[i] *numOfNotes);
        }
    }

    document.getElementById("denominations").style.display = "block";
});