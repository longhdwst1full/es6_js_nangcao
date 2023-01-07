const team1 = ['player1', 'player2', 'player3'];
const [gk, ...fieldPlayers] = team1;
console.log(gk)
console.log(fieldPlayers)


const allPlayers = ['player1', 'player2', 'player3', ...team1];

const playerFinished = [...team1, 'Thiago', 'Coutinho', 'Perisic'];