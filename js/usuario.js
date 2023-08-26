const btnRegister = document.getElementById("btn__register")
const formRegister = document.getElementById("user__register")
const formLogin = document.getElementById("user__login")
const btnLogin = document.getElementById("btn__logearse")


let usuarios = JSON.parse(localStorage.getItem("usuarios"))


class NewUser{
    constructor(user, pass) {
        this.id = usuarios.length + 1
        this.user = user
        this.pass = pass
        this.admin = false;
    }
}

btnLogin.addEventListener("click", (e) => {
    e.preventDefault()

    const user = formLogin.children[0].children[1].value
    const pass = formLogin.children[1].children[1].value

    validarYLogear(user, pass)

})

const validarYLogear = (user, pass) => {

    const userExist = usuarios.find((usuario) => usuario.user === user)

    if(userExist === undefined || userExist.pass !== pass){
        alert("error en usuario o contraseÃ±a")
    }else{
        alert(`Bienvenido ${user}`)

        let usuario = {
            user: userExist.user,
            pass: userExist.pass,
            admin: userExist.admin
        }

        sessionStorage.setItem("usuario", JSON.stringify(usuario))
        location.href = "../index.html"
    }
}

btnRegister.addEventListener("click", (e) => {
    e.preventDefault()

    const user = formRegister.children[0].children[1].value
    const pass = formRegister.children[1].children[1].value

    const nuevoUsuario = new NewUser(user, pass)

    validarYRegistrar(nuevoUsuario)

})


const validarYRegistrar = (nuevoUsuario) => {

    const userNuevo = usuarios.find((usuario) => usuario?.user === nuevoUsuario.user)

    if(userNuevo === undefined){
        usuarios.push(nuevoUsuario)
        localStorage.setItem("usuarios", JSON.stringify(usuarios))
        sessionStorage.setItem("usuario", JSON.stringify(nuevoUsuario))
        alert(`Gracias ${nuevoUsuario.user} por registrarte... usted serÃ¡ redirigido a la pag principal`)
        location.href = "../index.html"
    }else{
        alert("El usuario ya existe")

        sessionStorage.setItem("usuario", JSON.stringify(usuario))
        location.href = "../index.html"
    }

}