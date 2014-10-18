// the Game object used by the phaser.io library
var stateActions = { preload: preload, create: create, update: update };

// Phaser parameters:
// - game width
// - game height
// - renderer (go for Phaser.AUTO)
// - element where the game will be drawn ('game')
// - actions on the game state (or null for nothing)
var game = new Phaser.Game(850, 400, Phaser.AUTO, 'game', stateActions);

/*
 * Loads all resources for the game and gives them names.
 */
function preload() {
 game.load.image("playerImg", "assets/flappy_batman.png");

}

/*
  Initialises the game. This function is only called once.
 */
function create() {
    game.stage.setBackgroundColor("#19FFFF");
    game.add.text(30,30,"What a ", { font: "60px verdana", fill: "#666FFF"});
    game.add.sprite(30,270, "playerImg");
        // set the background colour of the scene
}

/*
 * This function updates the scene. It is called for every new frame.
 */
function update() {
    
}
