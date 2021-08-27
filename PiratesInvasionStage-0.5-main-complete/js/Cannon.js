class Cannon{
    constructor(x,y,w,h){
        this.x=x;
        this.y=y;
        this.w=w;
        this.h=h;
        var option={
            isStatic:true
        }
        this.body=Bodies.rectangle(this.x,this.y,this.w,this.h)
        World.add(world,this.body)
    }
    display(){
        var pos=this.body.position;
        fill("#676e6a");
        push ();
        translate (this.x,this.y)
        rotate(-PI/4)
        
        rect(-10,-20,this.w,this.h)
        pop ()
        arc(this.x-30 , this.y +90, 140, 200, PI, TWO_PI);
       noFill();

    }
}