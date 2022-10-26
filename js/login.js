function logar() {
    let email = document.getElementById('email').value;
    let senha = document.getElementById('password').value;

    if (email == "senac@resilia.com.br" && senha == "123456") {
        swal.fire({
            title: "Cadastro Realizado!",
            icon: "success",
        });
    } else {
        Swal.fire(
            'Good job!',
            'You clicked the button!',
            'success'
        )

    }
}