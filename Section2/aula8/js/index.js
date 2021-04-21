//Aula Functions

function soma(x, y) {
    let resultado = x + y;
    return resultado;
    //tudo o que está abaixo de return não sera executado
}

console.log(soma(2, 5));

//Exemplo de arrow function de uma linha

const raiz = n => n ** 0.5;

console.log(raiz(9));