class boid{
    constructor(x,y,dx,dy,q){
      this.loc = createVector(x, y);
      this.vel = createVector(dx, dy);
      this.acc = createVector (random(-1,1),0.2);
      this.clr = color(random(255),random(255),random(255));
      this.id = q;
    }
    run(){//use this so you dont have to run all of these for each ball
      this.checkEdges();
      this.update();
      this.render();
    }
    checkEdges(){//check if touching edge, if so reverse direction
      if(this.loc.x < 0){
        this.vel.x = -this.vel.x;
        this.acc.x = -this.acc.x;
      }
      if(this.loc.x > width){
        this.vel.x = -this.vel.x;
        this.acc.x = -this.acc.x;
      }
      if(this.loc.y < 0){
        this.vel.y = -this.vel.y;
        this.acc.y = -this.acc.y;
      }
      if(this.loc.y > height){
        this.vel.y = -this.vel.y;
        this.acc.y = -this.acc.y;
      }
    }
    update(){//update location
      this.vel.add(this.acc);
      this.loc.add(this.vel);
      this.vel.limit(5);
    }
    render(){//render one frame
      fill('red');

      //for(var i=0;i<10;i++){
      push();
      translate(this.loc.x, this.loc.y);
      noStroke();
      for (let z = 0; z < 40; z ++) {
        ellipse(0, 6, 4, 16);
        rotate(PI/5);
      }
      pop();

      for(let i=0;i<40;i++)
      if((this.loc.x < boids[i].loc.x + 100&&this.loc.x > boids[i].loc.x - 100)&&(this.loc.y < boids[i].loc.y + 100&&this.loc.y > boids[i].loc.y - 100)){
        fill('red');
        line(this.loc.x, this.loc.y, boids[i].loc.x, boids[i].loc.y);
      }
      }
    }