class Cloud extends MovableObject {

    width = 500;
    heigth = 250;
    y = 20;

    constructor() {
        super().loadImage('img/5.Fondo/Capas/4.nubes/1.png');

        this.x = Math.random() * 500;
        this.animate();

    }

    animate(){
        setInterval(() => {
            this.x -= 0.15;
        }, 1000 / 60);
    }

}