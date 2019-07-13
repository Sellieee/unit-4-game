$(document).ready(function () {
    var character = "";
    var enemy = "";
    var wins = 0;
    var losses = 0;
    var isEnemySelected = false;
    var chosenCharacter = {};
    var chosenEnemy = {};
    var isdefeated = false;

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
        }

    )
})