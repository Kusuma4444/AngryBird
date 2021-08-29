class Slingshot{
    constructor(bodyA,pointB){
       var options ={
           bodyA : bodyA,
           pointB:pointB,
           length:10,
           stiffness:0.4

       }
       this.body=Constraint.create(options)
       this.pointB=pointB 
       World.add(world,this.body)
    }
     fly(){
         this.body.bodyA=null
     }
    display(){
        if(this.body.bodyA!==null){
        var pointA=this.body.bodyA.position
        var pointB=this.pointB
        push()
        //line(x1,y1,x2,y2)
        strokeWeight(4)
        line(pointA.x,pointA.y,pointB.x,pointB.y)
        pop();
    }
    }
}