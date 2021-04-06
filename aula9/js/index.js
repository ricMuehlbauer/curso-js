//aula Objetos

function criaPessoa(nome, sobrenome, idade){
    return {
        nome,
        sobrenome,
        idade
    };
}

const pessoa1 = criaPessoa('Luiz', 'Santos', 25);

const pessoa2 = criaPessoa('Ricardo', 'Muehlbauer', 20);

//console.log(pessoa1.nome, pessoa2.nome)

//Objetos e métodos

const pessoa3 = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 23,

    fala() {
        console.log(`A minha idade atual é ${this.idade}.`);
    },

    incrementaIdade() {
        this.idade++;
    }
};

pessoa3.fala();
pessoa3.incrementaIdade();
pessoa3.fala();