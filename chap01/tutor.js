

let teams = ["Arsenal", "Aston Villa", "Brentford", "Brighton", "Burnley", "Chelsea", "Crystal Palace", "Everton", "Leeds United", "Leicester City", "Liverpool", "Manchester City", "Manchester United", "Newcastle United", "Norwich City", "Southampton", "Tottenham Hotspur", "Watford", "West Ham United", "Wolverhampton Wanderers"];
const searchTeam = (input) =>
    teams.filter(team =>
        team.toLowerCase().startsWith(input.toLowerCase()))


let results = searchTeam("Che");
console.log(results);
