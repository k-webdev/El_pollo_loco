class CollectableCoins extends DrawableObject{
    x = 0;
    y = 0;
    height = 100;
    width = 100;

    
    IMAGE_COIN = [
        'img/8.Coin/Moneda1.png'
    ];

    constructor(x,y) {
        super().loadImage('img/8.Coin/Moneda1.png');
        this.loadImages(this.IMAGE_COIN);
        this.x = x;
        this.y = y;
    }

    
}