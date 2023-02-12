document.getElementById('btn-deposit').addEventListener('click', function(){
    const inputAmount = parseFloat(document.getElementById('deposit').value);
    

    const depositAmount = parseFloat(document.getElementById('deposit-amount').innerText);
    
    const totalDepositAmount = inputAmount + depositAmount;
    document.getElementById('deposit-amount').innerText = totalDepositAmount;

    document.getElementById('Balance').innerText = parseFloat(document.getElementById('Balance').innerText) + inputAmount;

    document.getElementById('deposit').value = '';
})