//... Capstone Project...

const readlineSync = require('readline-sync');
const name = readlineSync.question('Please Enter Your Name ');
readlineSync.question('Hello ' + name + ' Welcome to the Ultimate Battle! Try and Defeat your Enemies. Press Enter to Begin!!');

const enemies = ['Ninja ', 'Zombie ', 'Evil Doctor ', 'Dragon '];
const treasure = ['Health ', 'Ammo ', 'Strength ', 'Medical Kit '];
var prize = [];

let userHealth = 40;
const options = ['Walk ', 'Exit ', 'Print '];
let pickUp = treasure[Math.floor(Math.random() * treasure.length)];

function game(){
    const attackPower = Math.floor(Math.random() * (5 - 4 + 5) + 5);
    const enemy = enemies[Math.floor(Math.random() * enemies.length)];
    let enemiesHealth = 40;
    const enemiesPower = Math.floor(Math.random() * (5 - 3 + 2) + 5);
    
    const index = readlineSync.keyInSelect(options, 'What would you like to do next? ');

    if(options[index] == 'Exit '){
        return userHealth = 0;
    } else if (options[index] == 'Print '){
        console.log(name + ': \n' + userHealth + '\n Treasure: ' + pickUp);
    } else if(options[index] == 'Walk '){
        let key = Math.random();
        if (key >= .3){
            console.log('...Walking...');
        }else if (key <= .3){
            console.log(enemy + ' Showed Up! ');

            while (enemiesHealth > 0 && userHealth > 0){
                const user = readlineSync.question(name + ' What would you like to do? Enter "r" to RUN or "a" to ATTACK: ');

                switch (user){
                    case 'r': // runaway
                    const run = Math.random();
                    if(run < .5){
                        console.log('OH NO! ' + enemy + ' attacked you with ' + enemiesPower);
                    }else{
                        console.log('You Ran Away!!');
                    }

                    case 'a':
                        // attack the enemy
                        enemiesHealth -= attackPower;
                        console.log('You ATTACKED ' + enemy + ' with ' + attackPower + ' attack power ');

                        userHealth -= enemiesPower;
                        console.log('The enemy just attacked you with: ' + enemiesPower + ' attack power ');

                        if (enemiesHealth <= 0){
                            console.log('You have KILLED ' + enemy + ' .\n' + enemy + ' left: ' + pickUp);
                            let loot = Math.random();
                            if (loot <= .3){
                                prize.push(pickUp);
                            }
                        }else if(userHealth <= 0){
                            console.log(enemy + ' has defeated you!! You are DEAD!! GAME OVER!! ');
                        }
                        
                }
            }
        }
    }
}
while(userHealth > 0){
    userRestore = function(){
        userActive = true;
        userHealth = 40;
    };
    userRestore();
    game();
}


