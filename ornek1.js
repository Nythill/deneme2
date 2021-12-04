var enchant = ["blazing " , "frozen " , "glowing "];

var weapon = ["axe " , "sword " , "spear "];

var ident = ["of serhat" , "of murat" , "of eftal"]

function Randomize(arr)
{
    var RandomizedData = arr[Math.floor(Math.random() * arr.length)];
    return RandomizedData;
} 

var randomed = Randomize(enchant) + Randomize(weapon) + Randomize(ident);

console.log(randomed) 
