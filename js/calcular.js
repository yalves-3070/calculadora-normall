/*
Operadores Aritméticos:
+ soma
- subtração
* multiplicação
/ divisão
++ incremento (soma mais 1)
-- decremento (subtrai menos 1)


Operadores de Atribuição:
= igual
+= mais ou igual
-= menos ou igual
/= dividido ou igual
*= multiplicado ou igual


Operadores de sequência:
+ (serve para concatenar valores
     (string ou váriaveis))
  ( serve para subtrair valores
   (string ou variáveis))


Operadores de Comparação:
RETORNA TRUE (VERDADEIRO) OU FALSE (FALSO)
== (comparar 2 valores)
=== (comparar valores e tipo de dado)
!= (diferente) de valores apenas
!== (comparar a diferença de valores
e tipo de dado)

< menor   >maior
<= menor ou igual      >= maior ou igual
*/

function somar() {
    let n1 = Number(document.getElementById("num1").value);
    let n2 = Number(document.getElementById("num2").value);
    let resultado = n1 + n2;

    document.getElementById("resultado").innerHTML = resultado;
    mudarCorResultado(resultado);
}

function subtrair() {
    let n1 = Number(document.getElementById("num1").value);
    let n2 = Number(document.getElementById("num2").value);
    let resultado = n1 - n2;

    document.getElementById("resultado").innerHTML = resultado;
    mudarCorResultado(resultado);
}

function multiplicar() {
    let n1 = Number(document.getElementById("num1").value);
    let n2 = Number(document.getElementById("num2").value);
    let resultado = n1 * n2;

    document.getElementById("resultado").innerHTML = resultado;
    mudarCorResultado(resultado);
}

function dividir() {
    let n1 = Number(document.getElementById("num1").value);
    let n2 = Number(document.getElementById("num2").value);

    if (n2 == 0) {
        document.getElementById("resultado").textContent = "Não é possível dividir por 0.";
        return;
    }
    else{
         let resultado = n1 / n2;
    document.getElementById("resultado").innerHTML = resultado;
    mudarCorResultado(resultado);
    }
}

function limpar() {
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
    document.getElementById("resultado").innerHTML = "---";

    document.getElementById("resultado").style.backgroundColor = "#e8def8";
    document.getElementById("resultado").style.borderColor = "#cfc3e8";
    document.getElementById("resultado").style.color = "#66558c";
}

function mudarCorResultado(resultado) {
    let caixa = document.getElementById("resultado");

    if (resultado < 0) {
        caixa.style.backgroundColor = "#f8d7da";
        caixa.style.borderColor = "#e6a8ad";
        caixa.style.color = "#a94442";
    } else {
        caixa.style.backgroundColor = "#e8def8";
        caixa.style.borderColor = "#cfc3e8";
        caixa.style.color = "#66558c";
    }
}







