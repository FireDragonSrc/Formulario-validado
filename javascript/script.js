const form = document.querySelector('#form');
form.addEventListener('submit',(e) => {
    e.preventDefault();
    const nome = document.querySelector('.nome');
    const idade = document.querySelector('.idade');
    const peso = document.querySelector('.peso');
    const altura = document.querySelector('.altura');
    const email = document.querySelector('.email');
    const senha = document.querySelector('.senha');
    const cidade = document.querySelector('.cidade');
    const motivo = document.querySelector('.motivo');

    const pessoa = {
        nome: nome,
        idade: idade,
        peso:peso,
        altura:altura,
        email:email,
        senha:senha,
        cidade:cidade,
        motivo:motivo
    }
})