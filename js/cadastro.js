const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const passwordConfirmation = document.getElementById("password-confirmation");


/* EVENTO CRIADO PARA QUE A PAG NÃO RECARREGUE QUANDO O BOTÃO "CRIAR CONTA" FOR CLICADO */
form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();
});

function checkInputs() {
    const usernameValue = username.value;
    const emailValue = email.value;
    const passwordValue = password.value;
    const passwordConfirmationValue = passwordConfirmation.value;

    if (usernameValue === "") {
        setErrorFor(username, "O nome de usuário é obrigatório.");
    } else {
        setSuccessFor(username);
    }

    if (emailValue === "") {
        setErrorFor(email, "O email é obrigatório");
    } else if (!checkEmail(emailValue)) {
        setErrorFor(email, "Insira um email válido.")

    } else {
        setSuccessFor(email);
    }

    if (passwordValue === "") {
        setErrorFor(password, "Crie uma senha.");
    } else if (passwordValue.length < 6) {
        setErrorFor(password, "A senha deve ter no mínimo 6 caracteres.")
    } else {
        setSuccessFor(password);
    }


    if (passwordConfirmationValue === "") {
        setErrorFor(passwordConfirmation, "A confirmação de senha é obrigatória.")
    } else if (passwordConfirmationValue != passwordValue) {
        setErrorFor(passwordConfirmation, "Senhas não conferem!");
    } else {
        setSuccessFor(passwordConfirmation);
    }

    // CONFIRMAÇÃO DE SENHA: OPERADOR DD COMPARAÇÃO DIFERENTE (!=) 



    //EVENTO CRIADO PARA QUANDO O FORMULÁRIO ESTIVER TODO VÁLIDO

    const formControls = form.querySelectorAll('.form-control')

    const formIsValid = [...formControls].every((formControl) => {
        return (formControl.className === "form-control success");
    });


    if (formIsValid) {
        swal({
            title: "Cadastro Realizado!",
            icon: "success",
        });
    } else if (formIsValid == "") {
        swal({
            title: "Cadastro incompleto!",
            icon: "warning",
        });

    }



    // PARA FAZER ESSA FUNÇÃO DE VALIDAÇÃO DOS FORMS, USANDO O "EVERY", FOI NECESSÁRIO TRANSFORMAR O (form.controls) EM UMA LISTA ARRAY [...formControls] PQ ELE NÃO É UM ARRAY PADRÃO DO JS E SIM UM NODE LIST. (QUE JÁ FOI EXPLICADO NA AULA 07 DO MÓDULO 02)

    //PESQUISAR SOBRE NODE LIST
}


function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector("small");

    // ADICIONANDO MENSAGEM DE ERRO

    small.innerText = message;

    formControl.className = "form-control error";

}

function setSuccessFor(input) {
    const formControl = input.parentElement;

    formControl.className = "form-control success";

    //ADICIONANDO CLASSE DE SUCESSO AO INPUT USERNAME



}

function checkEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email
    );

}