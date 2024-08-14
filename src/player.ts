import select from '@inquirer/select';
import { characters, ICharacters } from "./utils/characters.js"

 export const player1 =  await select({
    message: 'Selecione o seu personagem',
    choices:[
        {
            name: 'Mario',
            value:characters[0],
        },
        {
            name: 'Peach',
            value:characters[1],
        },
        {
            name: 'Yoshi',
            value:characters[2],
        },
        {
            name: 'Bowser',
            value:characters[3],
        },
        {
            name: 'Luigi',
            value:characters[4],
        },
        {
            name: 'Donkey Kong',
            value:characters[5],
        },
    ]
})

// Cria novo array excluindo o personagem escolhido pelo player1
const newArrayOfCharacters = characters.filter(function(character:ICharacters){
    if (character.name !== player1.name)
    return character
})

// Retorna um número aletório baseado no tamanho do novo array dos personagens
function chooseAleatoryCharacter(){
    return Math.floor(Math.random() * newArrayOfCharacters.length) 
}

let indexCharacter = chooseAleatoryCharacter()

// Player2 é escolhido de forma randomica 
export const player2 = newArrayOfCharacters[indexCharacter]