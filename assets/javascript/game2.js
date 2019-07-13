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
    var attacker = {};
    var defender = {};

    // Displaying the HP of each character
    $("#obihp").html(characters.Obi.healthPoints);
    $("#lukehp").html(characters.Luke.healthPoints);
    $("#sidioushp").html(characters.Sidious.healthPoints);
    $("#maulhp").html(characters.Maul.healthPoints);

    // Allowing the user to select a character
    $("#choose-character .image").click(function () {
        if (character == "") {
            console.log(this);
            $(this).appendTo(".chosen-character");
            character = $(this);
            chosenCharacter = $(character).attr("value");
            var attacker = characters[chosenCharacter];
            console.log(attacker);
            AHP = attacker.healthPoints;
            AAP = attacker.attackPower;
            ACAP = attacker.counter;
            Aname = attacker.name;

            $("#choose-character .image").appendTo(".fight-section");

            // Hide other characters when character has been selected
            $("#choose-character").hide();
            $(".character-selection").hide();



            // Allowing the user to select an enemy
        }
        $(".enemies .image").click(function () {
            if (enemy == "") {
                console.log(this);
                $(this).appendTo(".defender-area");
                enemy = $(this);
                chosenEnemy = $(enemy).attr("value");
                var defender = characters[chosenEnemy];
                console.log(defender);
                DHP = defender.healthPoints;
                DAP = defender.attackPower;
                DCAP = defender.counter;
                Dname = defender.name;
                $(".enemy-text").hide();
            }
        })


        // Attack button
        $("#attack-button").click(function () {
            if ($(".chosen-character").children().length == 0) {
                $(".attack-note").html("Please select a character first.")
            } else {
                DHP = DHP - AAP;
                AHP = AHP - DCAP;

                $(".attack-note").html("You attacked " + chosenEnemy + " for " + AAP + " damage. ");
                $(".attack-note").append(chosenEnemy + " counter attacked you for " + DCAP + " damage.");

                // Playing sound on click - issue: plays on every click after attack button is pressed
                const sound = new Audio();
                addEventListener('click', playSound);

                function playSound() {
                    sound.src = "./assets/star-wars.mp3";
                    sound.play();
                }

                // Need to modify the character's health points as they are attacked/counter attacked
                // if (chosenCharacter == Obi) {

                // }
            };

            // Increasing the base attack of the selected character
            for (var i = 0; i < characters.healthPoints; i++)
                AAP += AAP;
        })
        // // If character has won 
        // var wins = 0;
        // var losses = 0;

        // var wins {
        //     if (chosenCharacter.length == 0 && chosenCharacter.healthPoints > 0) {
        //         $(".attack-note").html("You win! The force is strong with you!");
        //         wins++;
        //     } else {
        //         return false
        //     };
        // }

        // // If character has lost
        // var losses {
        //     if (attacker.healthPoints < 0 && defender.healthPoints > 0) {
        //         $(".attack-note").html("You lose! The force is weak within you, try again!");
        //         losses++;
        //     } else {
        //         return false
        //     }
        // };

    })

    // Restart Button
    $("#restart-button").click(function () {
        window.location.reload();
    });

})