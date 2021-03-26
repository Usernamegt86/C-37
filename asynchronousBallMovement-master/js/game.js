class Game{
    constructor(){}
    getState(){
        var gameStateref = database.ref('gameState');
        gameStateref.on("value" ,function(data){
        gameState = data.val()    
        })
    }
    update(state){
        database.ref('/').update({
            gameState: state
        })

    }
    
    async Start(){

        if(gameState===0){
            player = new Player()
            var playerCountref=await database.ref('playerCount').once("value")
            if(playerCountref.exists()){
                playerCount = playerCountref.val()
                player.getCount()
            } 
            form= new Form()
            form.display()
        }
    }
    Play(){
        console.log("Hi")
        form.hide()
        textSize(30)
        text("GAME START", 120, 100)
        Player.getplayerinfo()
        if(allplayers!==undefined){
            var displayPosition = 130
            for(var plr in allplayers){
                if(plr==="player"+player.index)
                fill("red")
                else
                fill("black")
            }
            displayPosition+=20
            textSize(15)
            text(allplayers[plr].name+":"+ allplayers [plr].distance, 120, displayPosition)
        }
    if(keyIsDown(UP_ARROW)&&player.index!==null){
        player.distance+=50
        player.update()
    }
    }
}