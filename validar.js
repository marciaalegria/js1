function validar(){
    var nombre;
    nombre = document.getElementById("nombre").value;

    if (nombre === ""){
        alert("Todos los campos son obligatorios");
        return false;
    }
    else if (nombre.length>30){
        alert("El nombre es muy largo");
        return false;
    }

    

    var apellidos;
    apellidos= document.getElementById("apellidos").value;

    if (apellidos === ""){
        alert("todos los campos son obligatorios");
        return false;
    }
    else if (nombre.lenght>80){
        alert("tus apellidos son muy largos sólo 30 caracteres");
        return false;
    }
    

    var correo;
    correo= document.getElementById("correo").value;

    expresion = /\w+@\w+\.+[a-z]/;
    if(correo===""){
        alert("campos obligatorios");
        return false;
    }
    else if(!expresion.test(correo)){
        alert("correo no válido");
        return false;
    }
    else if (correo.lenght>100){
        alert("correo muy largo");
        return false;
    }

    var usuario;
    usuario= document.getElementById("usuario").value;
    if(usuario===""){
        alert("campo requerido");
        return false;
    }
    else if (usuario.lenght>20){
        alert("usuario muy largo");
        return false;
    }
    

    var telefono;
    telefono= document.getElementById("telefono").value;
    if(telefono===""){
        alert("campo requerido");
        return false;
    }
    else if(telefono.lenght>15){
        alert("máximo 15 carácteres");
        return false;
    }
    else if( isNaN(telefono)){
        alert("sólo carácteres numéricos");
        return false;
    }
    var saludo="Hola"+" "+ usuario +" gracias por registrarte con nosotros!";

    alert(saludo);
}
