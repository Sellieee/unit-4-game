$(document).ready(function () {

    // Creating the characters and their characteristics
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

    // Defining the variables
    var character = "";
    var enemy = "";
    var wins = 0;
    var losses = 0;
    var chosenCharacter = {};
    var chosenEnemy = {};
    var isdefeated = false;
    var attacker = {};
    var defender = {};

    // Allowing the user to select a character
    $("#choose-character .image").click(function () {
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

            $("#choose-character .image").appendTo(".fight-section");

            // Hide other characters when character has been selected
            $("#choose-character").hide();
            $(".character-selection").hide();
            $(".attack-note").html("Choose your enemy")

            // Allowing the user to select an enemy
        }
        $(".enemies .image").click(function () {
            if (enemy == "") {
                console.log(this);
                $(this).appendTo(".defender-area")
            }
        })

    })

    // Attack button
    $("#attack-button").click(function () {
        if ($(".chosen-character").children().length == 0) {
            $(".attack-note").html("Please select a character first.")
        } else {
            var defenderHP = defender.healthPoints - attacker.attackPower;
            var attackerHP = attacker.healthPoints - defender.counter;
            defender.healthPoints = defenderHP;
            attacker.healthPoints = attackerHP


            $(".attack-note").html("You attacked " + defender + "for " + attacker.attackPower + " damage.");
            $(".attack-note").append(this.name + "counter attacked you for " + defender.counter + " damage.");
        };
    })

    // Restart Button
    $("#restart-button").click(function () {
        window.location.reload();
    });

})