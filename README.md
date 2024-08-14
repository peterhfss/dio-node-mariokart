# DIO - Mario Kart.js

<br />
<p style="text-align:center">
    <img src="./src/assets/header.gif" width="150">
</p>

 <p style="text-align:center">Mario Kart é uma série de jogos de corrida desenvolvida e publicada pela Nintendo. O objetico desse desafio é criar uma lógica de um jogo de vídeo game para simular corridas de Mario Kart, levando em consideração as regras e mecânicas do projeto.</p>

<h2>Players</h2>
      <table style="border-collapse: collapse; width: 800px; margin: 0 auto;">
        <tr>
            <td style="border: 1px solid black; text-align: center;">
                <p>Mario</p>
                <img src="./src/assets/mario.gif" alt="Mario Kart" width="60" height="60">
            </td>
            <td style="border: 1px solid black; text-align: center;">
                <p>Velocidade: 4</p>
                <p>Manobrabilidade: 3</p>
                <p>Poder: 3</p>
            </td>
             <td style="border: 1px solid black; text-align: center;">
                <p>Peach</p>
                <img src="./src/assets/peach.gif" alt="Peach" width="60" height="60">
            </td>
            <td style="border: 1px solid black; text-align: center;">
                <p>Velocidade: 3</p>
                <p>Manobrabilidade: 4</p>
                <p>Poder: 2</p>
            </td>
              <td style="border: 1px solid black; text-align: center;">
                <p>Yoshi</p>
                <img src="./src/assets/yoshi.gif" alt="Yoshi" width="60" height="60">
            </td>
            <td style="border: 1px solid black; text-align: center;">
                <p>Velocidade: 2</p>
                <p>Manobrabilidade: 4</p>
                <p>Poder: 3</p>
            </td>
        </tr>
        <tr>
            <td style="border: 1px solid black; text-align: center;">
                <p>Bowser</p>
                <img src="./src//assets/bowser.gif" alt="Bowser" width="60" height="60">
            </td>
            <td style="border: 1px solid black; text-align: center;">
                <p>Velocidade: 5</p>
                <p>Manobrabilidade: 2</p>
                <p>Poder: 5</p>
            </td>
            <td style="border: 1px solid black; text-align: center;">
                <p>Luigi</p>
                <img src="./src/assets/luigi.gif" alt="Luigi" width="60" height="60">
            </td>
            <td style="border: 1px solid black; text-align: center;">
                <p>Velocidade: 3</p>
                <p>Manobrabilidade: 4</p>
                <p>Poder: 4</p>
            </td>
            <td style="border: 1px solid black; text-align: center;">
                <p>Donkey Kong</p>
                <img src="./src/assets/dk.gif" alt="Donkey Kong" width="60" height="60">
            </td>
            <td style="border: 1px solid black; text-align: center;">
                <p>Velocidade: 2</p>
                <p>Manobrabilidade: 2</p>
                <p>Poder: 5</p>
            </td>
        </tr>
    </table>

<h2>🕹️ Regras e mecânicas</h2>

<b>Jogadores</b>

Ao iniciar o jogo, cada personagem escolhido será informado para um objeto cada. Quando o player1 escolher, o computador irá realizar a escolhar de forma aleatoria com base nos demais personagens disponíveis.

<b>Pistas</b>

Serão 5 rodadas e em cada rodada uma pista é sorteada, essas são as regras e os tipos de pistas do jogo:

* Caso o bloco da pista seja uma RETA, o jogador deve jogar um dado de 6 lados e somar o atributo VELOCIDADE, quem vencer ganha um ponto

* Caso o bloco da pista seja uma CURVA, o jogador deve jogar um dado de 6 lados e somar o atributo MANOBRABILIDADE, quem vencer ganha um ponto

* Caso o bloco da pista seja um CONFRONTO, o jogador deve jogar um dado de 6 lados e somar o atributo PODER, quem perder, perde um ponto

<br />
<p style="text-align:center; font-size:1.2em">Nenhum jogador pode ter pontuação negativa (valores abaixo de 0)</p>

<b>Condição de vitória</b>
<p style="font-size:1.2em">O jogador com maior número de pontos é o vencedor</p>