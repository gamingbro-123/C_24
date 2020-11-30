class pig
{
  constructor(xpos,ypos)
  {
      var options = {

        'restitution':0.8,
        'friction':0.3,
        'density':1.0}

        this.body = Bodies.rectangle(xpos,ypos,50,50, options);
        this.width = 50;
        this.height = 50;

        World.add(world,this.body);
                  
      }

      display() 
      {
        var position = this.body.position;
        var angle= this.body.angle;
    
    
        push();
        translate(position.x,position.y);
        rotate(angle);

        fill("green");
    
    
        rectMode(CENTER)
        rect(0,0, this.width,this.height)
    
        pop();
      }
  }
