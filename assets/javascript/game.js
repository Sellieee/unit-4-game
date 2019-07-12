// Create individual characters stating HP, AP and CAP
// Obi-Wan Kenobi, Luke Skywalker, Darth Sidious, Darth Maul
// Allow user to select enemy (only has CAP - stays constant)
// Upon Selection, enemy moves to defender area
// User clicks 'Attack button' to attack enemy (AP increases by base AP)
// Decrease enemy's HP (shown under enemy picture)
// Decrease selected character's HP as enemy counters attack
// If enemy <=0 HP, enemy disappears from defender area
// User to select new enemy
// Repeat until all enemies defeated
// User loses when selected character's HP <=0
// Ensure unique HP, AP and CAP for each character
// No increase in HP allowed
// Give hints to player - "First Round: Choose the enemy with the lowest CAP"
// User should be able to win regardless of character selected

// Side Notes:
// If User has not selected character and clicks attack - say "No enemy here"
// When user is on the last enemy, "Enemies Available to Attack" seciton disappears

$(document).ready(function () {

    // Character creation - the higher the HP, the more counter attack they can tolerate
    var characters = {
        Obi: {
            name: "Obi-Wan Kenobi",
            healthPoints: 120,
            attackPower: 11,
            counter: 12,
        },

        Luke: {
            name: "Luke Skywalker",
            healthPoints: 100,
            attackPower: 10,
            counter: 6
        },

        Sidious: {
            name: "Darth Sidious",
            healthPoints: 150,
            attackPower: 15,
            counter: 21
        },

        Maul: {
            name: "Darth Maul",
            healthPoints: 180,
            attackPower: 13,
            counter: 30
        }
    }

    // Variables:
    var character = "";
    var enemy;
    var roundNumber = 1;
    var enemiesKilled = 0;
    var wins = 0;
    var chosenCharacter = {};
    var chosenEnemy = {};

    // Attack button
    $("#attack-button").click(function () {
        if ($(".enemies").children().length == 0) {
            $(".attack-note").html("Please select a character first.")
        }
    })

    // Selecting character
    $(".image").click(function () {
        if (character == "") {
            console.log(this);
            $(this).appendTo(".chosen-character");
            character = $(this);
            chosenCharacter = $(character).attr("value");
            var attacker = characters[chosenCharacter];
            console.log(attacker);
            HP = attacker.healthPoints;
            AP = attacker.attackPower;
            CAP = attacker.counter;
            name = attacker.name;

            $("#choose-character .image").appendTo(".enemies");

            // Hide other characters when character has been selected
            $("#choose-character").hide();
            $(".attack-note").html("Choose your enemy")
        }
    })
    // choose enemy to fight
    $(".enemies").click(function () {
        if (character == "") {
            console.log(this);
            $(this).appendTo("#selected-enemy");
            character = $(this);
            chosenEnemy = $(character).attr("value");
            var defender = characters[chosenEnemy];
            console.log(defender);
            HP = defender.healthPoints;
            AP = defender.attackPower;
            CAP = defender.counter;
            name = defender.name;
        }
    })


    // Base attack
    function baseAttack() {
        baseAttack = chosenCharacter.attackPower
    }
    // Increasing AP after each attack
    chosenCharacter.attackPower = function () {
        this.attackPower += attackPower;
    }
    // if character successfully attacks
    $(".attack-note").html("You attacked " + enemy + "for " + this.attackPower + " points.");

    // Decreasing HP from counter attack
    chosenCharacter.counter = function () {
        this.healthPoints -= this.counter;
        $(".attack-note").append(this.name + "counter attacked you for " + this.counter + " points.");
    }

    // If character has won 
    function wins() {
        if (chosenCharacter.length == 0 && chosenCharacter.healthPoints > 0)
            return true;
        else return false;
    }



    // Restart Button
    $("#restart-button").click(function () {
        window.location.reload();
    })
})