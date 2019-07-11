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
    var character;
    var enemy;
    var roundNumber = 1;
    var enemiesKilled = 0;

    // Selecting character
    $("#character-image").click(function () {
        if (character == "") {
            console.log(this);
            $(this).appendTo(".chosen-character");
            character = $(this);
            chosenCharacter = $(character).attr("value");
        }
        if (chosenCharacter == characters.Obi.name) {
            HP = characters.Obi.healthPoints;
            AP = characters.Obi.attackPower;
            CAP = characters.Obi.counter;
            name = characters.Obi.name;
        } else if (chosenCharacter == characters.Luke) {
            HP = characters.Luke.healthPoints;
            AP = characters.Luke.attackPower;
            CAP = characters.Luke.counter;
            name = characters.Luke.name;
        } else if (chosenCharacter == characters.Sidious) {
            HP = characters.Sidious.healthPoints;
            AP = characters.Sidious.attackPower;
            CAP = characters.Sidious.counter;
            name = characters.Sidious.name;
        } else if (chosenCharacter == characters.Maul) {
            HP = characters.Maul.healthPoints;
            AP = characters.Maul.attackPower;
            CAP = characters.Maul.counter;
            name = characters.Maul.name;
        }

    })

    // Base Attack Power
    function baseAttack() {
        baseAttack = attackPower;
    }

    // Attack button
    $(".attack-button").click(function () {
        if ($(".enemies").children().length == 0) {
            $(".attack-note").html("Please select a character first.")
        }
    })
})