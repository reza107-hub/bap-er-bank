document.getElementById('btn-deposit').addEventListener('click', function(){
    
    const inputAmount = parseFloat(document.getElementById('deposit').value);
    document.getElementById('deposit').value = '';
    if (isNaN(inputAmount)){
        alert('Input a valid number')
        return;
    }

    const depositAmount = parseFloat(document.getElementById('deposit-amount').innerText);
    
    const totalDepositAmount = inputAmount + depositAmount;
    document.getElementById('deposit-amount').innerText = totalDepositAmount;

    document.getElementById('Balance').innerText = parseFloat(document.getElementById('Balance').innerText) + inputAmount;
})