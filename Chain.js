class Chain {

constructor(bodyA,bodyB,offsetX,offsetY){

//this.offsetX = offsetX;
//this.offestY = offsetY;

var option = {

    bodyA:bodyA,
    bodyB:bodyB,
    stiffness : 2,
    length : 50
  //  PointB :{x:this.offsetX,y:this.offsetY}

}

this.chain = Constraint.create(option);
World.add(world,this.chain);


}
display(){

var PointA = this.chain.bodyA.position;
var PointB = this.chain.bodyB.position;

//var Anchor1X = PointA.x;
//var Anchor1Y = PointA.y;

//var Anchor2X = PointB.x + this.offsetX;
//var Anchor2Y = PointB.y + this.offsetY;

strokeWeight(2);

line(PointA.x,PointA.y,PointB.x,PointB.y);



}





}

