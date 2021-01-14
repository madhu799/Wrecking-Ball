class Ball{
    constructor(x,y,r){
        var options={
            'friction': 1,
            'restitution':0.1,
            'density':1
        }
 this.body=Bodies.circle(x,y,r,options);
     this.width=2*r;
     this.height=2*r;
     World.add(world,this.body);
    }

    display(){
        var angle = this.body.angle;
        push ()
        translate(this.body.position.x, this.body.position.y);
        rotate (angle)
        ellipseMode(CENTER); 
        fill ("skyblue");
        ellipse(0,0,this.width,this.height);
        pop ()
    }
};
