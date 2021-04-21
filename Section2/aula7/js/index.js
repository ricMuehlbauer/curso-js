//Aula Arrays


let alunos = ["Ricardo", "Maria", "Josiel"];

console.log(alunos);

//adicionando no array

alunos[alunos.length] = "Egbert";
alunos.push("Gabriel");             //funcao para incluir item no fim do array, faz o mesmo da linha acima

alunos.unshift("Suelen");           //inclui item no inicio do array. Unshuft acaba sendo mais pesado pois altera o indice de todos os dados dentro do array

console.log(alunos);

//removendo do array

//delete alunos[1]                  //vai limpar o conteúdo desse índice porém não vai removelo do array. Ex: 1, 2, nulo, 4, 5

alunos.pop()                        //remove sempre o último

alunos.shift()                        //remove sempre o primeiro

console.log(alunos);