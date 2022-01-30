class World {

    character = new Character();
    endboss = new EndBoss();
    terains = [
        new Terain('img/5.Fondo/Capas/5.cielo_1920-1080px.png'),
        new Terain('img/5.Fondo/Capas/3.Fondo3/1.png'),
        new Terain('img/5.Fondo/Capas/2.Fondo2/1.png'),
        new Terain('img/5.Fondo/Capas/1.suelo-fondo1/1.png'),
    ];
    enemies = [
        new Chicken(),
        new Chicken(),
        new Chicken(),
    ];
    clouds = [
        new Cloud(),
        new Cloud(),
        new Cloud(),
        new Cloud(),
    ];

    canvas;
    ctx;

    constructor(canvas) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.draw();
    }


    draw() {

        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.addObjectsToMap(this.terains);
        this.addToMap(this.character);
        this.addToMap(this.endboss);
        this.addObjectsToMap(this.enemies);
        this.addObjectsToMap(this.clouds);

        let self = this;
        requestAnimationFrame(function () {

            self.draw();

        });
    }

    addObjectsToMap(objects) {
        objects.forEach(o => {
            this.addToMap(o);
        });
    }

    addToMap(mo) {
        this.ctx.drawImage(mo.img, mo.x, mo.y, mo.width, mo.heigth);
    }

}