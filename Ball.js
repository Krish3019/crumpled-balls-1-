class Ball {
    constructor(x,y,radius) {
      var options = {
          isStatic: false,
          restitution:0.3,
          friction:0.5,
          density:1.2

      }
      this.x= x;
      this.y = y;
      this.r = radius;
      this.body = Matter.Bodies.circle(this.x,this.y,this.r/2,options);
      //ellipse(x, y, w, [h])
     
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push()
      translate(pos.x,pos.y)
      ellipse(0,0,this.r,this.r)
      pop()
      fill("cyan");
      
    }
  };