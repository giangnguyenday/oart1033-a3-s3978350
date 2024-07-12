class Particle {
    constructor(x,y) {

        blendMode(ADD);
        this.pos = createVector(x,y);
        // this.vel = createVector(0,0);
        this.vel = p5.Vector.random2D(0,-1)
        this.vel.mult(random(0,8))
        this.acc = createVector(0,0);
        this.sat = this.lifetime
        this.r = 40;
        this.lifetime = 350
        this.overtime = 1
        this.clrR = 235
        this.turbulance = p5.Vector.random2D(0,1)
        this.turbulance.setMag(.1)

        this.hor = createVector(5,0)
        this.ver = createVector(0,10)
    }

    applyForce(force){
        this.acc.add(force);
    }

    update() {
        
        this.vel.add(this.acc);
        this.vel.add(this.turbulance);
        this.pos.add(this.vel);
        this.acc.set(0,0);
        this.lifetime -= 10 
        this.r -= 1
        if (this.r < 0){
            this.r = 0
        }

        // if (keyIsDown(65)) {
        //     this.pos.add(this.hor)
        // }

        // if (keyIsDown(83)) {
        //     this.pos.sub(this.ver)
            
            
        // }

        // if (keyIsDown(87)) {
        //     this.pos.add(this.ver.mult(1.5))
        // }

        if (keyIsDown(85)) {
            stroke(this.clrR)
            fill (this.clrR, 0,0,this.r-80)
        }

        if (keyIsDown(73)) {
            this.clrR = 230
            this.turbulance = p5.Vector.random2D(0,1)
            this.turbulance.setMag(5)
                this.vel = p5.Vector.random2D(0,-1)
                this.vel.mult(random(0,0))
                this.vel.add(this.turbulance)
                 this.r += 1
                 if (this.r < .01){
                    this.r = 0.1}
    
                if (this.r > 40){
                    this.r = 40
                 }
        }
        
        if (keyIsDown(74)) {
            this.clrR = 110;
            
            this.vel = p5.Vector.random2D(0,1);
            this.vel.mult(random(0,10));
            
        }

        if (keyIsDown(75)) {
            this.clrR = 250

            this.vel = p5.Vector.random2D(0,-1)
            this.vel.mult(random(0,1))
            
             this.r += 1
            if (this.r < .01){
                this.r = 0.1}

            if (this.r > 40){
                this.r = 40
             }

             fill (this.clrR, this.lifetime +=50, this.r,this.r)
            
        }

        // if (keyIsDown(75) && keyIsDown(65) && keyIsDown(68)) {
        //     this.vel = p5.Vector.random2D(0,-1)
        //     this.vel.mult(random(0,10))
        //     this.lifetime += 50

        // }
    }

    
    show() {
        
        // fill (100,250,150)
        // noStroke ()
        noStroke ()
        fill (this.clrR, this.lifetime, this.pos.y,this.r)
        rectMode(CENTER)
        rect(this.pos.x, this.pos.y, this.r*2)
        // imageMode (CENTER)
        // image(img,this.pos.x, this.pos.y, this.r*2, this.r*2)
        // ellipse(this.pos.x, this.pos.y, this.r*3);
        
    }

    pKill(){
        return (this.lifetime < 0, this.r < 0.001)
    }

} 