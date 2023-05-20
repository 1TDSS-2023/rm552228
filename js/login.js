//O que é um evento?
//Um evento é uma ação que ocorre seja ela feita, pelo usuário ou sistema:

const inputUser = document.querySelector("#idUsuario");
const inputSenha = document.querySelector("#idSenha");
const userLabel = document.querySelector("label[for='idUsuario']");
const passLabel = document.querySelector("label[for='idSenha']");
const eyePass = document.querySelector(".fa-eye");

// input.addEventListener("focus", () => {
//   input.style.outlineColor = "red";
// })

inputSenha.addEventListener("keyup", () => {
  if(inputSenha.value.length < 5){
    inputSenha.setAttribute("style", "outline-color: red");
    userLabel.setAttribute("style", "color: red");
  } else {
    inputSenha.setAttribute("style", "outline-color: green");
    userLabel.setAttribute("style", "color: green");
  }
})



inputUser.addEventListener("keyup", () => {
  if(inputUser.value.length < 5){
    inputUser.setAttribute("style", "outline-color: red");
    userLabel.setAttribute("style", "color: red");
  } else {
    inputUser.setAttribute("style", "outline-color: green");
    userLabel.setAttribute("style", "color: green");
  }
})

eyePass.addEventListener("click", () => {
  // if(inputSenha.type == "password"){
  //   inputSenha.type = "text";
  // } else {
  //   inputSenha.type = "password";
  // }

  if(inputSenha.getAttribute("type") == "password"){
    inputSenha.setAttribute("type", "text");
    eyePass.setAttribute("class", "fa fa-eye-slash");
  } else {
    inputSenha.setAttribute("type", "password");
    eyePass.setAttribute("class", "fa fa-eye");
  }
})

//LISTA DE OBJETOS  
let listaDeUsuarios = [
  {
    nomeCompleto: "Cevilha da Silva",
    nomeUsuario: "Cevilha",
    senhaUsuario: "123456"    
  }
  ,
  {
    nomeCompleto: "Seba da Costa",
    nomeUsuario: "Seba",
    senhaUsuario: "123456"    
  }
  ,
  {
    nomeCompleto: "Zuleide Camacho",
    nomeUsuario: "zuzu",
    senhaUsuario: "123456"    
  }
  ,
  {
    nomeCompleto: "Ednaldo Sandro",
    nomeUsuario: "edi",
    senhaUsuario: "123456"    
  }
  ,
  {
    nomeCompleto: "Moscone Oswaldo",
    nomeUsuario: "mosca",
    senhaUsuario: "123456"    
  }
];



addEventListener("click", (evt)=>{


    //USUáRIO LOGADO
    const usuarioLogado = {
        nomeUsuarioLogado: inputUser.value,
        senhaUsuarioLogado: inputSenha.value 
    }


    let usuarioValidado = {};
    

        

       //   if(usuarioLogado.nomeUsuarioLogado == usuario.nomeUsuario && usuarioLogado.
       //   senhaUsuarioLogado == usuario.senhaUsuario){
       //       alert("VALIDADO");
       //   } else {
       //       alert("NÃO VALIDADO");
       //   }
       //
       if (evt.target.id == "btnSubmit"){
          for (let x = 0;x < listaDeUsuarios.length; x++){

              if(usuarioLogado.nomeUsuarioLogado == listaDeUsuarios[x].nomeUsuario &&
              usuarioLogado.senhaUsuarioLogado == listaDeUsuarios[x].senhaUsuario){
                  usuarioValidado = listaDeUsuarios[x];
                  break;
          }
        }
       }
      
      

      const msgStatus = document.querySelector("#status-info");


    if(usuarioValidado != null) {
      msgStatus.setAttribute("Style", "color:#00ff00");
      msgStatus.innerHTML = `<span><strong>O usuario ${usuarioValidado.
      nomeCompleto} efetuou o login com Sucesso!</strong></span>`;




      //Redirect
      setTimeout(()=>{

      }, 3000);
      Window.location.href = "../index.html";

    }else{
      msgStatus.setAttribute("Style", "color:#ff0000");
      msgStatus.innerHTML = `<span><>Nome de Usuario ou Senha inválidos!</
      strong></span>`;
    }


});