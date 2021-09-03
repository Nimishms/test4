class Form {

    constructor() {
    
      this.input = createInput("Name");
      this.button = createButton('Next');
     
     this.reset = createButton('reset')
     this.image = loadImage("loadingScreen.png");
    }
    hide(){
   
      this.button.hide();
      this.input.hide();
      
      //this.charizard.hide();
    }
  
    display(){
      //background(this.image)
        
 
      this.reset.position(displayWidth-100,20)
      this.input.position(displayWidth/2 - 40 , displayHeight/2 - 80);
      this.button.position(displayWidth/2 + 30, displayHeight/2);
    
     this.button.mousePressed(()=>{
        this.input.hide();
        this.button.hide();
        
        
        player.name = this.input.value();
        playerCount+=1;
        player.index = playerCount;
        if(playerCount === 2){
          gameState = 1;
        }
        player.update();
        player.updateCount(playerCount);
        script = new Script()
        gameStateBg = 'script';
        script.display();
      });
      this.reset.mousePressed(()=>{
        player.updateCount(0)
        game.update(0)
      })
  
    }
    
  
  }
  