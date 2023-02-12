document.getElementById('btn-withdraw').addEventListener('click', function(){
    const inputAmount = parseFloat(document.getElementById('withdraw').value);

    const withdrawAmount = parseFloat(document.getElementById('withdraw-amount').innerText);
    
    const totalWithdrawAmount = inputAmount + withdrawAmount;
    document.getElementById('withdraw-amount').innerText = totalWithdrawAmount;

    document.getElementById('Balance').innerText = parseFloat(document.getElementById('Balance').innerText) - inputAmount;

    document.getElementById('withdraw').value = '';
})