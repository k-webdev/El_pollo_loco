class Endboss extends MovableObject {

    y = 40;
    height = 400;
    width = 400;

    IMAGES_DEAD = [
        'img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/4.G_muerte.png'
    ];

    IMAGES_WALKING = [
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G5.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G6.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G7.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G8.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G9.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G10.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G11.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G12.png',
    ];

    IMAGES_HURT = [
        './img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/3.Herida/G21.png',
        './img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/3.Herida/G22.png',
        './img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/3.Herida/G23.png'
    ];

    IMAGES_WIN = [
        'img/9.Intro _ Outro Image/_Game over_ screen/4.Game over!.png'
    ];

    constructor() {
        super().loadImage(this.IMAGES_WALKING[0]);
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_HURT);
        this.loadImages(this.IMAGES_DEAD);
        this.loadImages(this.IMAGES_WIN);

        this.x = 2000;

        this.animate();
    }

    animate() {

        setInterval(() => {
            if (this.energy == 100) {
                this.playAnimation(this.IMAGES_WALKING);
            }else if (this.energy == 0) {
                this.playAnimation(this.IMAGES_DEAD);
                this.y += 50;
            }
        }, 150);

       
    }

}