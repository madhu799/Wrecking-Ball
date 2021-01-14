class Box{
    constructor(x,y){
        var options={
            'friction': 1,
            'restitution':0.1,
            'density':1
        }
 this.body=Bodies.rectangle(x,y,50,50,options);
     this.width=50;
     this.height=50;
     World.add(world,this.body);
    }

    display(){
        var angle = this.body.angle;
        push ()
        translate(this.body.position.x, this.body.position.y);
        rotate (angle)
        rectMode(CENTER); 
        fill ("skyblue");
        rect(0,0,this.width,this.height);
        pop ()
    }
};
