class Dustbin {
constructor(){
   var options ={
    isStatic:true
   }

   this.body = Bodies.rectangle(640, 675, 200, 20,options);
   this.img = loadImage("dustbingreen.png");
   
   left.body = Bodies.rectangle(530, 635, 20, 100,options);
   
   right.body = Bodies.rectangle(750, 635, 20, 100,options);

 this.width = width;
 this.height = height;


        World.add(world,this.body);
        World.add(world,left.body);
        World.add(world,right.body);


}

display(){
 var pos = this.body.position;
 push();
 translate(pos.x,pos.y);
    imageMode(CENTER);

    image(this.img,0,0,this.width,this.height);
    pop();
}



}