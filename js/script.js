const form = document.querySelector('#form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const jobSelect = document.querySelector('#job');
const messageTextarea = document.querySelector('#message');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    if(nameInput.value === '') {
        alert('Por favor, preencha o seu nome');
        return;
    }

    if(emailInput.value === '') {
        if(emailInput === '') {
            alert('Por favor, preencha o seu email');
            return
        }
    }
    

// Se todos os campos estiverem corretos, enviar
    form.submit();
});