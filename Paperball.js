class Paperball
{
	constructor(x,y,r)
	{
		var options={
			isStatic:false,
            restitution:0.3,
            friction:0,
            density:1.2			
			}
            this.x=x;
            this.y=y;
            this.r=r
            this.width = 100;
            this.height =100;
            this.image=loadImage("paper.png");
		this.body=Bodies.circle(this.x, this.y, (this.r-20)/2, options)
        
 		World.add(world, this.body);

	}
	display()
	{
        var paperballpos=this.body.position;
        push()
        translate(paperballpos.x, paperballpos.y);
        rectMode(CENTER)
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
       
        fill("red");
       
        
        pop()
	
			
	}

};