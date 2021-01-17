class Monster {
    constructor(x, y, w,h) {
      var options = { 
        density: 2, 
        frictionAir: 0.001};
      this.x=x; 
      this.y=y; 
      this.width=w;
      this.height=h;
      this.image = loadImage("Monster-01.png");
      this.body = Bodies.rectangle(this.x, this.y, this.width,this.height, options);
      World.add(world, this.body);
    }
    display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width,this.height);
        pop();
      }
    }