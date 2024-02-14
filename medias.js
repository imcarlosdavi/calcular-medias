let nomeAluno = []
let notaAluno = []
let continuar = true
let contador = 0
//Fiz os arrays para receber o nomes e notas dos alunos.

while(continuar){
    let aluno = prompt(`Qual é seu nome? ${contador + 1}`) // Usei o while para perguntar o nome e nota repetidamente.
    let nota = parseInt(prompt("Qual é a sua nota?"))
    nomeAluno[contador] = aluno
    notaAluno[contador] = nota
    contador++
    let parar = prompt("Desaja inserir outro aluno? sim/não") //Usei essa pergunta que encerra o Loop para o usuário
    if(parar === "não"){
        continuar = false
    }
}

for(i = 0; i < nomeAluno.length; i++){
    document.body.innerHTML+= `${nomeAluno[i]} , Nota:  ${notaAluno[i]}` //usei esse Loop que percorre nos nomes e notas dos alunos. printando eles.
}


let todasNotas = 0
for(i = 0; i < notaAluno.length; i++){ //Esse Loop soma todas às notas  
    todasNotas += notaAluno[i]
}

let media = todasNotas / 5
console.log("Total das notas: "+todasNotas) //Printei todas às notas
console.log(media) //mostrei a média da turma