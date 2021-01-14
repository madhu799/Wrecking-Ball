class Rope{
    constructor(bodyA, bodyB){
        var options={
            bodyA:bodyA,
            bodyB:bodyB,
            stiffness:0.1,
            length:300
        }
        this.rope=Constraint.create(options);
        World.add(world, this.rope);
    }
    display(){
        var pointA=this.rope.bodyA.position;
        var pointB=this.rope.bodyB.position;
        fill ("skyblue")
        stroke ("skyblue")
        line (pointA.x,pointA.y,pointB.x,pointB.y);
 }
}