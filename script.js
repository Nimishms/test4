class Script{
constructor(){
this.button = createButton("Play");

}

display(){
    background(scriptImg)
    this.button.position(displayWidth/2,displayHeight-200)
this.button.mousePressed(()=>{
this.button.hide();
playState = 1;
   
})
}
}