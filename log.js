class log
{
  constructor(xpos,ypos, height1,angle)
  {

    var options = {
        'restitution':0.8,
        'friction':1.2,
        'density':1.0};
   this.body = Bodies.rectangle(xpos,ypos,20,height1, options);
   this.width = 20;
   this.height = height1;
   Matter.Body.setAngle(this.body,angle);

   World.add(world,this.body);


  }
    

display()
{
    var position = this.body.position;
    var angle = this.body.angle;


    push();
    translate(position.x,position.y);
    rotate(angle);
    stroke("brown");
    strokeWeight(4);

    rectMode(CENTER)
    rect(0,0, this.width,this.height)

    pop();

}


}