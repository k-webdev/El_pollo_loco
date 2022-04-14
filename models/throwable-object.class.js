class ThrowableObjects extends MovableObject {
    IMAGES_BOTTLES_THROW = [
        'img/6.botella/Rotación/Mesa de trabajo 1 copia 3.png',
        'img/6.botella/Rotación/Mesa de trabajo 1 copia 4.png',
        'img/6.botella/Rotación/Mesa de trabajo 1 copia 5.png',
        'img/6.botella/Rotación/Mesa de trabajo 1 copia 6.png'
    ];
    width = 60;
    height = 50;
    otherDirection = false;

    constructor(x, y, otherDirection) {
        super().loadImage(this.IMAGES_BOTTLES_THROW[0]);
        this.loadImages(this.IMAGES_BOTTLES_THROW);
        this.x = x;
        this.y = y;
        this.otherDirection = otherDirection;
        this.throw();
    }

    throw() {
        this.speedY = 30;
        this.applyGravity();
        setInterval(() => {
            if(this.otherDirection == false){
            this.x += 5;
            }else{
                this.x -= 5;
            }
        }, 25);
        setInterval(() => {
            this.playAnimation(this.IMAGES_BOTTLES_THROW);
        }, 500 / 60);
    }
}