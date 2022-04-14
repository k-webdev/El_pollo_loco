class BottleBar extends DrawableObject {
    IMAGES = [
        'img/7.Marcadores/Barra/Marcador_botella/Azul/0_.png',
        'img/7.Marcadores/Barra/Marcador_botella/Azul/20_.png',
        'img/7.Marcadores/Barra/Marcador_botella/Azul/40_.png',
        'img/7.Marcadores/Barra/Marcador_botella/Azul/60_.png',
        'img/7.Marcadores/Barra/Marcador_botella/Azul/80_.png',
        'img/7.Marcadores/Barra/Marcador_botella/Azul/100_.png',
    ];

    constructor() {
        super();
        this.loadImages(this.IMAGES);
        this.x = 230;
        this.y = 0;
        this.width = 200;
        this.height = 50;
        this.setPercentage(0);
    }

    setPercentage(percentage) {
        this.percentage = percentage * 10;
        let path = this.IMAGES[this.resolveImageIndex()];
        this.img = this.imageCache[path];
    }

    resolveImageIndex() {
        if (this.percentage <= 100 && this.percentage > 80) {
            return 5;
        } else if (this.percentage <= 80 && this.percentage > 60) {
            return 4;
        } else if (this.percentage <= 60 && this.percentage > 40) {
            return 3;
        } else if (this.percentage <= 40 && this.percentage > 20) {
            return 2;
        } else if (this.percentage >= 1 && this.percentage <= 20) {
            return 1;
        } else {
            return 0;
        }
    }

}