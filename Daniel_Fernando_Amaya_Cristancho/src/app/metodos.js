function idusuario_vali(idusuario){
    alert("metodo js "+idusuario)
    if(isNaN(idusuario)){
        alert("el valor " + idusuario + " NO es valido");
        return "el valor " + idusuario + " NO es valido";
    }
    else{
        alert("el valor "+ idusuario + " es valido");
        return "";
    }
}