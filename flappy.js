// the Game object used by the phaser.io library
var stateActions = { preload: preload, create: create, update: update };

// Phaser parameters:
// - game width
// - game height
// - renderer (go for Phaser.AUTO)
// - element where the game will be drawn ('game')
// - actions on the game state (or null for nothing)
var game = new Phaser.Game(850, 400, Phaser.AUTO, 'game', stateActions);
var score;
var player;
var x
var y
x = 100;
y = 100;
//alert(score)
/*
 * Loads all resources for the game and gives them names.
 */
function preload() {
    game.load.image("playerImg", "assets/sheep.png");
    game.load.image("playerImg2", "assets/flappy_batman.png");
    game.load.audio("score", "assets/point.ogg");
    game.load.image("pipe", "assets/pipe_green.png")

}

/*
  Initialises the game. This function is only called once.
 */
function create() {
  //  game.physics.startSystem(Phaser.Physics.ARCADE)
    game.stage.setBackgroundColor("#19FFFF");
    //game.add.text(400,200,"What a ", { font: "30px verdana", fill: "#666FFF"});
    //game.add.sprite(30,30, "playerImg");
    //game.add.sprite(790,30, "playerImg2");
    //game.add.sprite(30,340, "playerImg2");
    //game.add.sprite(790,340, "playerImg");
        // set the background colour of the scene
  //  game.input.onDown.add(clickHandler1)
    //game.input.onUp.add(clickHandler2)
//    game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR).onDown.add(spaceHandler);
//    game.add.audio("score");
/*
    score = 500;
    alert(score);
    score += 1;
    alert(score);
    game.add.text(50,50,score)
*/

    /*
    game.input.keyboard.addKey(Phaser.Keyboard.LEFT).onDown.add(moveLeft);
    game.input.keyboard.addKey(Phaser.Keyboard.RIGHT).onDown.add(moveRight);
    game.input.keyboard.addKey(Phaser.Keyboard.UP).onDown.add(moveUp);
    game.input.keyboard.addKey(Phaser.Keyboard.DOWN).onDown.add(moveDown);

*/
    player = game.add.sprite(x, y, "playerImg")
    game.input.onDown.add(clickHandler3)
    var leftkey = game.input.keyboard.addKey(Phaser.Keyboard.LEFT);
    var rightkey = game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
    var upkey = game.input.keyboard.addKey(Phaser.Keyboard.UP);
    var downkey = game.input.keyboard.addKey(Phaser.Keyboard.DOWN);
    leftkey.onDown.add(moveLeft);
    rightkey.onDown.add(moveRight);
    upkey.onDown.add(moveUp);
    downkey.onDown.add(moveDown);

    for(var count = 0; count <= 7; count++) {
        //game.add.text(20,20+20*count,"Clap")
        game.add.sprite(20, count * 50, "pipe")
    }
/*
    game.add.text(20,20,"Clap");
    game.add.text(20,40,"Clap");
    game.add.text(20,60,"Clap");
    game.add.text(20,80,"Clap");
    game.add.text(20,100,"Clap");
*/
}


/*
 * This function updates the scene. It is called for every new frame.
 */
function update() {
    
}

function clickHandler1 (event)
{
    game.add.sprite(event.x,event.y, "playerImg");
}

function clickHandler2 (event)
{
    game.add.sprite(event.x,event.y, "playerImg2");
}

function clickHandler3(mouse){
    player.x = mouse.x
    player.y = mouse.y
}

function spaceHandler ()
{
game.sound.play("score")
}
function moveLeft()
{
    player.x -= 5;
}
function moveRight()
{
    player.x += 5;
}

function moveUp()
{
    player.y -= 5;
}
function moveDown()
{
   player.y += 5;
   // player.y++;
}
