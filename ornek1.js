var enchant = ["shitty " , "frozen " , "glowing "];

var weapon = ["axe " , "sword " , "spear "];

var ident = ["of serhat" , "of bob" , "of eftal"]

var randenchant = enchant[Math.floor(Math.random() * enchant.length)];

var randweapon = weapon[Math.floor(Math.random() * weapon.length)];

var randident = ident[Math.floor(Math.random() * ident.length)];

var drop = randenchant+randweapon+randident

console.log(drop)