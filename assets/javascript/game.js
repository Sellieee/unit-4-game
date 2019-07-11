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
            image: "assets/images/obi-wan-kenobi.jpg",
            healthPoints: 120,
            attackPower: 11,
            counter: 12,
        },

        Luke: {
            name: "Luke Skywalker",
            image: "assets/images/luke-skywalker.jpg",
            healthPoints: 100,
            attackPower: 10,
            counter: 6
        },

        Sidious: {
            name: "Darth Sidious",
            image: "assets/images/darth-sidious.jpg",
            healthPoints: 150,
            attackPower: 15,
            counter: 21
        },

        Maul: {
            name: "Darth Maul",
            image: "assets/images/darth-maul.jpg",
            healthPoints: 180,
            attackPower: 13,
            counter: 30
        }
    }
})

// Variables:
var character;
var enemy;
var roundNumber = 1;
var enemiesKilled = 0;

// Inserting character images in #character-image
$("#character-image").append("<img})

        $(".choose-character").click(function () {
                $("#chosen-character").fadeOut("slow", function () {

                });

                // Base Attack Power
                function baseAttack() {
                    baseAttack = attackPower;
                }

                // Attack button