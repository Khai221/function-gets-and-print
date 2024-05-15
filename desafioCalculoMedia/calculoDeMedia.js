/* Faça um programa que receba a média de um aluno.
Caso a média seja < 5 imprima "Reprovado"
Caso a média seja >= e < 7 imprima "Recuperação" 
Caso a média seja >= 7 imprima "Aprovado"
*/

const { gets, print } = require('./desafioCalculoMedia/funcaoAuxiliarCalcMedia')

const media = gets()

if (media < 5){
    print("Você foi reprovado!")
} 
else if (media >= 5 && media < 7){
    print("Você esta de recuperação!")
}
else if (media >= 7){
    print('Aprovado')
} else {
    print('Numero invalido')
}

print(media)