class SlingShot
{
    constructor(bodyA, pointB)
    {
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);

        this.sling1 = loadImage("sprites/sling1.png");
        this.sling2 = loadImage("sprites/sling2.png");
        this.sling3 = loadImage("sprites/sling3.png");


        World.add(world, this.sling);
    }

    fly()
    {
        this.sling.bodyA = null;
    }

    display()
    {
        image(this.sling1,200,25);
    }

    display2()
    {
        image(this.sling2,170,25);

        if(this.sling.bodyA)
        {
            push();
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);

            line(pointA.x - 10, pointA.y, pointB.x - 15, pointB.y  + 10);
            

            pop();
        }
    }
    
}