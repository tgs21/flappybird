// the Game object used by the phaser.io library
var stateActions = { preload: preload, create: create, update: update };
var game_width = 850;
var game_height= 400;
// Phaser parameters:
// - game width
// - game height
// - renderer (go for Phaser.AUTO)
// - element where the game will be drawn ('game')
// - actions on the game state (or null for nothing)
var game = new Phaser.Game(game_width, game_height, Phaser.AUTO, 'game', stateActions);
var scores = 0;
var player;
var x
var y
x = 100;
y = 100;
var pipes;
var pipe_interval = 1;
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

  //  player.checkWorldBounds = true;
 //   game.input.onDown.add(clickHandler3);
    var leftkey = game.input.keyboard.addKey(Phaser.Keyboard.LEFT);
    var rightkey = game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
    var upkey = game.input.keyboard.addKey(Phaser.Keyboard.UP);
    var downkey = game.input.keyboard.addKey(Phaser.Keyboard.DOWN);
    leftkey.onDown.add(moveLeft);
    rightkey.onDown.add(moveRight);
    upkey.onDown.add(moveUp);
    downkey.onDown.add(moveDown);

    pipes = game.add.group();
/*
for(var county = 0; county <=15; county += 3)
{
    var hole = Math.floor(Math.random()*5)+1;
    for(var count = 0; count <= hole-1; count++)
    {
        game.add.sprite(county * 50, count * 50, "pipe");
        //game.add.text(20,20+20*count,"Clap")}
    }
    for (var count = hole + 2; count <= 7; count++)
    {
        game.add.sprite(county * 50, count * 50, "pipe");
    }
}
*/
    game.physics.startSystem(Phaser.Physics.ARCADE);
    game.stage.setBackgroundColor("#19FFFF");
   // game.add.text(50,50,"Where is this");
    game.add.text(50,50,scores.toString());
    player = game.add.sprite(game_width/2, game_height/2, "playerImg")
    //player = game.add.sprite(game_width/2, game_height/2, "playerImg");
    player.anchor.setTo(0.5,0.5);
    player.checkWorldBounds = true;
    game.physics.arcade.enable(player);
    player.body.gravity.y = 300;
    player.body.velocity.y = -150;
  //  player.body.velocity.x = 50;
    game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR).onDown.add(spaceHandler);
//generate_pipes();
    game.time.events.loop(pipe_interval*Phaser.Timer.SECOND, generate_pipes);


/*    game.add.text(20,40,"Clap");
    game.add.text(20,60,"Clap");
    game.add.text(20,80,"Clap");
    game.add.text(20,100,"Clap");
*/
}

function generate_pipes(){
    var hole = Math.floor(Math.random()*5)+1;
    for(var count = 0; count <= hole-1; count++)
    {
        add_pipe_part(game_width+50, count * 50, "pipe");
        //game.add.text(20,20+20*count,"Clap")}
    }
    for (var count = hole + 2; count <= 7; count++)
    {
        add_pipe_part(game_width+50, count * 50, "pipe");
    }
  //  scores = 500;
}

function add_pipe_part(x, y, pipe_part){
    var pipe = pipes.create(x, y, pipe_part);
    game.physics.arcade.enable(pipe);
    pipe.body.velocity.x = -200;
}

/*
 * This function updates the scene. It is called for every new frame.
 */
function update() {
game.physics.arcade.overlap(player,pipes,game_over);
}

function game_over(){
location.reload();
}

function player_jump(){
    player.body.velocity.y = -1*jump_height;
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
//game.sound.play("score")
    player.body.velocity.y = -200;
}
function moveLeft()
{
    player.x -= 20;
}
function moveRight()
{
    player.x += 20;
}

function moveUp()
{
    player.y -= 20;
}
function moveDown()
{
   player.y += 20;
   // player.y++;
}
