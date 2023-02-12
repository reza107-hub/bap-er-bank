document.getElementById('btn-submit').addEventListener('click', function(){
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    if(email === 'reza' && password === 'reza'){
        window.location.href = 'bank.html'
    } else {
        alert('Input valid email address');
    }
})