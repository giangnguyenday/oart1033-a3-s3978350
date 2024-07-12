
class Emitter {
    constructor(x,y) {
        this.position=createVector(x,y);
        this.particles = [];
        this.hor = createVector(10,0)
        this.ver = createVector(0,10)
    }
    
    emit(num) {
        for( let i = 0; i<num; i++){
        this.particles.push (new Particle(this.position.x, this.position.y))
        };
    }

    applyForce(force){
        for (let particle of this.particles) {
            particle.applyForce(force);
            }
    }


    update() {
        for (let particle of this.particles) {
            particle.update();
            }

        for ( let i= this.particles.length - 1; i>=0; i--){
            if (this.particles[i].pKill()){
              this.particles.splice(i,1)}
            }
        
        //Keybinds
            if (keyIsDown(65)) {
                this.position.sub(this.hor)
            }

            if (keyIsDown(68)) {
                this.position.add(this.hor)
            }

            if (keyIsDown(87) || keyIsDown(32) ) {
                this.position.sub(this.ver)
            }

            if (keyIsDown(83)) {
                this.position.add(this.ver)
            }
         }



     show() {
         for (let particle of this.particles) {
        particle.show();
     }
} 
}