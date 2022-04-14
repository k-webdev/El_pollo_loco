class MovableObject extends DrawableObject { //Definiert alles was ein MovableObject ist z.B. Character oder Chicken!!!
        
    speed = 0.15;
    otherDirection = false;
    speedY = 0;
    acceleration = 2.5; // wie schnell fällt der Character
    energy = 100;
    lastHit = 0; 


    
    applyGravity() {
        setInterval(() => {
            if (this.isAboveGround() || this.speedY > 0) {
                this.y -= this.speedY;
                this.speedY -= this.acceleration;
            }

        }, 1000 / 25);
    }

    isAboveGround() {
        if(this instanceof ThrowableObjects){
            return true;
        }else{
            return this.y < 180;    
        }
    }
    

    hit(){
        if(this instanceof Chicken){
            this.energy -= 100;
        }
        if(this instanceof Endboss){
            this.energy -= 12.5;
            if(this.energy == 0){
                
                setTimeout(()=>{
                    this.loadEndScreen();
                },2000);
                document.getElementById('start-image').src = `./img/9.Intro _ Outro Image/_Game over_ screen/4.Game over!.png`;
            }
        }
        if(this instanceof Character){
            this.energy -= 5;   
            if(this.energy == 0){
                setTimeout(()=>{
                    this.loadEndScreen();
                    document.getElementById('start-image').src = `./img/9.Intro _ Outro Image/_Game over_ screen/2.oh no you lost!.png`;
                },2000);
            }
        }
        if (this.energy < 0){
            this.energy = 0;
        } else{
            this.lastHit = new Date().getTime();
        }
    }

    isHurt(){
        let timePassed = new Date().getTime() - this.lastHit; //differenz in ms 
        timePassed = timePassed / 1000;  // differenz in s
        return timePassed < 0.75;  // rückgabewert true oder false!!
    }

    isDead(){
        return this.energy == 0;
    }

    // character.isColliding(chicken);
    isColliding(mo){
        return this.x + this.width > mo.x && 
            this.y + this.height > mo.y && 
            this.x < mo.x &&
            this.y < mo.y + mo.height;
    }

    

    playAnimation(images) {
        let i = this.currentImage % images.length; // 0%6=0 ... 1%6=1 .... 2%6=2 ... 3%6=3 und immer so weiter... 6%6=0
        let path = images[i]; // der Pfad wird immer wieder verändert
        this.img = this.imageCache[path]; // der Pfad wird an das img übergeben.
        this.currentImage++; // Variable liegt in MovableObjects
    };


    jump() {
        this.speedY = 30;
    }


    moveRight() {
        this.x += this.speed; //Beim drücken der rechten Pfeiltaste wird die x Koordinate des character geändert.
    }

    moveLeft() {
        this.x -= this.speed; //Beim drücken der linken Pfeiltaste wird die x Koordinate des character geändert.
    }

    loadEndScreen(){
        document.getElementById('canvas').classList.remove('canvas');
        document.getElementById('canvas').classList.add('d-none');
        document.getElementById('container-load-image').classList.remove('d-none');
        document.getElementById('container-load-image').classList.add('container-load-image');
        /* document.getElementById('start-image').src = `./img/9.Intro _ Outro Image/_Game over_ screen/4.Game over!.png`; */
        document.getElementById('start-image').classList.remove('d-none');
        document.getElementById('start-image').classList.add('start-image');
    }
}