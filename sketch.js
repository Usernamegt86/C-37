var ball;
var database;
var gameState = 0
var playerCount =0
var form, game, player; 
var allplayers

function setup(){
    createCanvas(500,500);
    database = firebase.database()
     game = new Game()
     game.getState() 
     game.Start()  
}

function draw(){
    background("white");
    if(playerCount===4){
        game.update(1)
        
    }
    if(gameState===1){
        clear()
            game.Play()
        
    }
}
