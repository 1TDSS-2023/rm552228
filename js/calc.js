//Desafio 1
//inserir o value dos botões de números e operações no visor.
//É obrigatório utilizar funções parametrizadas...
//Pode ser utilizados eventos de inline.

//desafio 3
//evite a inserção de mais de um operador por vez no visor
function insereNumeroNoVisor(botao, visor) {
    
    if(botao.value == "+" || botao.value == "-" || botao.value == "*" || botao.value == "/") {
        if(visor.value[visor.value.length-1] == "+" || visor.value[visor.value.length-1] == "-" || visor.value[visor.value.length-1] == "*" || visor.value[visor.value.length-1] == "/"){
            visor.value.slice(visor.value.length-1);
        } else {
            visor.value += botao.value;
        }
    } else {
        visor.value += botao.value;
    }
        
}

//utilizando a função eval(expressão)
//crie uma nova função no formato ArrowFunction que receba um parâmetro e passe para 
// a função eval() realizar o calculo e devolva o resultado no visor

const calcula = (expressao) => {
    expressao.value = eval(expressao.value);
}