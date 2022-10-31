const form = document.getElementById("form");
const email = document.getElementById("email");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    checkInputs();
});


function checkInputs() {
    const emailValue = email.value;

    if (emailValue === "") {
        setErrorFor (email, "O email é obrigatório");
    } else if (!checkEmail(emailValue)) {
        setErrorFor(email, "Insira um email válido.")
        
    } else {
        setSuccessFor (email,
            swal({
                title: "Email enviado com sucesso!",
                icon: "success",
                text: "Verifique sua caixa de entrada ou a caixa de spam.",
                button: "Ok!",
            }));
    }
    
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