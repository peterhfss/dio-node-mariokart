import { player1, player2 } from "./player.js";
import { ICharacters } from "./utils/characters.js";

// Retorna o valor do dado
async function rollDice(){
    return Math.floor(Math.random() * 6) + 1;
}

// Sortea aleatoriamente uma pista 
async function getRandomRace(){
    let valueRandom = Math.random();
    let race ;

    switch(true){
        case valueRandom < 0.33:
            race = "RETA"
            break;
        case valueRandom < 0.66:
            race = "CURVA"
            break;
        default:
            race = "CONFRONTO"
    }

    return race;
}

// Exibi o resultado de cada jogador após o dado ser lançado
async function logRollResult(character: ICharacters, block:string, diceResult: number, attribute:number){
    console.log(
        `${character.name} 🎲 rolou um dado de ${block} ${diceResult} + ${attribute} = ${diceResult + attribute}`
    );
}

// Retorna a interação em cada rodada dos jogadores durante os rounds
async function playRaceEngine(player1:ICharacters , player2:ICharacters){
    for (let round = 1; round <= 5; round++){
        console.log(`🎌 Rodada: ${round} \n`);

        // Obter os valores do dados para cada jogador em cada rodada
        let valueDicePlayer1 = await rollDice();
        let valueDicePlayer2 = await rollDice();

        // Total da habilidade
        let totalSkillPlayer1 = 0;
        let totalSkillPlayer2 = 0;

        let block = await getRandomRace();
        console.log(`Bloco: ${block}`);
        
        if(block == "RETA"){
            totalSkillPlayer1 = valueDicePlayer1 + player1.speed;
            totalSkillPlayer2 = valueDicePlayer2 + player1.speed;

            await logRollResult(player1, block, valueDicePlayer1, player1.speed);
            await logRollResult(player2, block, valueDicePlayer2, player2.speed);
        }
        if(block == "CURVA"){
            totalSkillPlayer1 = valueDicePlayer1 + player1.maneuverability;
            totalSkillPlayer2 = valueDicePlayer2 + player1.maneuverability;

            await logRollResult(player1, block, valueDicePlayer1, player1.maneuverability);
            await logRollResult(player2, block, valueDicePlayer2, player2.maneuverability);
            
        }
        if(block == "CONFRONTO"){
            let powerSkillPlayer1 = valueDicePlayer1 + player1.power;
            let powerSkillPlayer2 = valueDicePlayer2 + player2.power;

            console.log(`${player1.name} confrontou com ${player2.name}! 🥊`)

            await logRollResult(player1, block, valueDicePlayer1, player1.power);
            await logRollResult(player2, block, valueDicePlayer2, player2.power);

            if(powerSkillPlayer1 > powerSkillPlayer2 && player2.score > 0){
                console.log(
                    `${player1.name} venceu o confronto! ${player2.name} perdeu 1 ponto 🐢`
                );
                player2.score--;
            }
            if(powerSkillPlayer2 > powerSkillPlayer1 && player1.score > 0){
                console.log(
                    `${player2.name} venceu o confronto! ${player1.name} perdeu 1 ponto 🐢`
                );
                player1.score--;
            }
            
            console.log(
                powerSkillPlayer2 === powerSkillPlayer1 ? 'Confronto empatado! Nenhum player perde ponto': ''
            );
        }

        // Verifica o vencedor da rodada
        if( totalSkillPlayer1 > totalSkillPlayer2){
            console.log(`${player1.name} marcou um ponto!`);
            player1.score++;
        }else if(totalSkillPlayer2 > totalSkillPlayer1){
            console.log(`${player2.name} marcou um ponto!`);
            player2.score++;
        }

        console.log('---------------------------------------------------')
    }
}

async function declareWinner(player1:ICharacters, player2:ICharacters) {
    console.log("Resultado final:");
    console.log(`${player1.name}: ${player1.score} ponto(s)`);
    console.log(`${player2.name}: ${player2.score} ponto(s)`);
  
    if (player1.score > player2.score)
      console.log(`\n${player1.name} venceu a corrida! Parabéns! 🏆`);
    else if (player2.score > player1.score)
      console.log(`\n${player2.name} venceu a corrida! Parabéns! 🏆`);
    else console.log("A corrida terminou em empate");
  }

// Iniciar o game
export async function game(){
    console.log(' 🏁 Mario Kart.js 🏁 \n');
    console.log(
        ` 🚦 A corrida entre ${player1.name} e ${player2.name} estará começando...! 🚦 \n`
    );

    await playRaceEngine(player1, player2);
    await declareWinner(player1, player2);
}


game();