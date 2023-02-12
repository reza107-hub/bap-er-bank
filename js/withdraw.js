document.getElementById('btn-withdraw').addEventListener('click', function(){
    const inputAmount = parseFloat(document.getElementById('withdraw').value);
    document.getElementById('withdraw').value = '';
    if ((isNaN(inputAmount))){
        alert('Input a valid number')
        return;
    }

    const withdrawAmount = parseFloat(document.getElementById('withdraw-amount').innerText);
    const totalBAlance = parseFloat(document.getElementById('Balance').innerText);

    if(inputAmount > totalBAlance){
        alert('You does not have that balance')
        return;
    }


    const totalWithdrawAmount = inputAmount + withdrawAmount;
    document.getElementById('withdraw-amount').innerText = totalWithdrawAmount;

    document.getElementById('Balance').innerText = parseFloat(document.getElementById('Balance').innerText) - inputAmount;

    
})