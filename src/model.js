//set player and enemy current pokemon
var playerCurrentPokemon = [0];
var enemyCurrentPokemon = [0];

//element boxes colors
var grassElement = {
    background:'#65bb69',
    border:'#43a047', 
}

var fireElement = {
    background:'#fe9100',
    border:'#fe5722', 
}

var waterElement = {
    background:'#1d88e4',
    border:'#0c47a1', 
}

//attacks
var tackle = {
    name: 'Tackle',
    power: '5'
}

var scratch = {
    name: 'Scratch',
    power: '6'
}

var vinewhip = {
    name: 'Vine Whip',
    power: '7'
}

var ember = {
    name: 'Ember',
    power: '10'
}

var bubble = {
    name: 'Bubble',
    power: '12'
}

//pokemon
var bulbasaur = {
    name: 'Bulbasaur',
    type: 'grass',
    lvl: 5,
    hp: 100,
    attack1: tackle,
    attack2: vinewhip,
    spritefront:'bulbasaur_front',
    spriteback:'bulbasaur_back',
    background: grassElement.background,
    border: grassElement.border,
};

var charmander = {
    name: 'Charmander',
    type: 'fire',
    lvl: 5,
    hp: 100,
    attack1: scratch,
    attack2: ember,
    spritefront:'charmander_front',
    spriteback:'charmander_back',
    background: fireElement.background,
    border: fireElement.border,
};

var squirtle = {
    name: 'Squirtle',
    type: 'water',
    lvl: 5,
    hp: 100,
    attack1: tackle,
    attack2: bubble,
    spritefront:'squirtle_front',
    spriteback:'squirtle_back',
    background: waterElement.background,
    border: waterElement.border,
};

var playerPokemon = [bulbasaur, charmander, squirtle];

var enemyPokemon = [bulbasaur, charmander, squirtle];

var playerCurrentHP = playerPokemon[1].hp;
var enemyCurrentHP = playerPokemon[0].hp;