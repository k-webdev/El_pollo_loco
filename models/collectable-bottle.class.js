class CollectableBottle extends DrawableObject {

    IMAGE_BOTTLE = ['img/6.botella/2.Botella_enterrada1.png'];

    x = 0;
    y = 365;
    height = 60;
    width = 40;
    

    constructor() {
        super().loadImage('img/6.botella/2.Botella_enterrada1.png');
        /* this.loadImages(this.IMAGE_BOTTLE); */
        this.x =  500 + Math.random() * 1000;
        
    }
}