class Paper {
constructor(x,y,r) {
    var options ={
        isStatic:false,
        restitution:0.3,
        friction:0.5,
        density:1.2
   }

   this.x=x;
   this.y=y;
   this.r=r;

    this.body = Bodies.circle(this.x,this.y,(this.r-20/2),options);
    this.img = loadImage("paper.png");
    World.add(world,this.body);

}
display(){
    
    var paperpos=this.body.position;

    push()
    translate(paperpos.x, paperpos.y);
    imageMode(CENTER)
    image(this.img,0,0,this.r,this.r);
     pop()
}


}