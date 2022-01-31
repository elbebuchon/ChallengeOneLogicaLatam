
let textoencriptar = document.getElementById("input-texto").value;
textoencriptar.addEventListener('click' , () => {
    let textoencriptar = document.getElementById("input-texto").value;
    textoencriptar.classList.style = red
})

//   funcion para encriptar

function encriptador() {
        
    let textoencriptar = document.getElementById("input-texto").value;
    textoencriptar = textoencriptar.toLowerCase();
    textoencriptar = textoencriptar.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
       
    if (!textoencriptar) {
      alert("Algo paso... Verificar");
    } else {
      let encriptando = textoencriptar.replace(/e/g, "enter");
  
      encriptando = encriptando.replace(/i/g, "imes");
      
      encriptando = encriptando.replace(/a/g, "ai");
      
      encriptando = encriptando.replace(/o/g, "ober");
      
      encriptando = encriptando.replace(/u/g, "ufat");
      
  
      document.getElementById("msg").value=encriptando;
      document.getElementById("input-texto").value="";
      
      textoencriptar.preventDeafult();
    }
}  

//  Desencriptador


function desencriptar() {
let textodesencriptar = document.getElementById("input-texto").value;
textodesencriptar = textodesencriptar.toLowerCase();
textodesencriptar = textodesencriptar.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

if (!textodesencriptar) {
    alert("Ingrese valores validos");
}else {
  let encriptando = textodesencriptar.replace(/enter/g, "e");
  encriptando = encriptando.replace(/imes/g, "i");
  encriptando = encriptando.replace(/ai/g, "a");
  encriptando = encriptando.replace(/ober/g, "o");
  encriptando = encriptando.replace(/ufat/g, "u");

  document.getElementById("msg").value=encriptando;
  document.getElementById("input-texto").value="";
 
}
}


// Funcion de copiado

function copiar() {

    var content = document.getElementById('msg');
    
    content.select();
    document.execCommand('copy');

    

    alert("Texto copiado");
}