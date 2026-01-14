const usuario = document.getElementById('myuser');
const contrasena = document.getElementById('mypss');
const boton = document.getElementById('btnEmviar');

const usuarioReal = "root";
const contrasenaReal = "1234567";
let intentos = 3;

boton.addEventListener('click', () => {
    let userAlma = usuario.value;
    let contrasenaAlma = contrasena.value;
    while(intentos > 0){
        if (userAlma === ""){
            alert("Favor ingrese todos los campos")
            break;
        } else if(contrasenaAlma === ""){
            alert("Favor ingrese todos los campos")
            break;
        }else if(userAlma === "" && contrasenaAlma === ""){
            alert("Favor ingrese todos los campo")
            break;
        }else if (userAlma === usuarioReal && contrasenaAlma === contrasenaReal){
            alert("Sesión iniciada de forma correcta")
            document.body.style.backgroundColor = "rgba(123, 255, 0, 1)"
            break;
        }else{
            intentos --;
            alert("Usuario u Contraseña incorrecta, Quedan " + intentos + " Intentos")
            break;
        }
    }
    if(intentos === 0) {
        alert("Usuario Bloqueado")
        return;
    }
})