class World {


    character = new Character(); // initialisiert die Klasse Character 
    statusBar = new StatusBar();
    bottleBar = new BottleBar();
    collectableB = [
        new CollectableBottle(),
        new CollectableBottle(),
        new CollectableBottle(),
        new CollectableBottle(),
        new CollectableBottle(),
        new CollectableBottle(),
        new CollectableBottle(),
        new CollectableBottle(),
        new CollectableBottle(),
        new CollectableBottle(),
        new CollectableBottle()
    ];
    collectableC = [
        new CollectableCoins(300,100),//wert 1 ist der x wert. wert 2 ist der y wert.
        new CollectableCoins(400,50),
        new CollectableCoins(500,100),
        new CollectableCoins(900,100),
        new CollectableCoins(1000,50),
        new CollectableCoins(1100,100),
        new CollectableCoins(900,300),
        new CollectableCoins(1000,300),
        new CollectableCoins(1100,300),
        new CollectableCoins(1200,300),
        new CollectableCoins(1300,300),

    ];
    coinBar = new CoinBar();
    level = level1;
    throwableObject = [new ThrowableObjects()];

    gameOver = 'img/9.Intro _ Outro Image/_Game over_ screen/4.Game over!.png';

    canvas; //kommt aus dem constructor
    ctx;    //kommt aus dem constructor
    keyboard; //kommt aus dem constructor
    camera_x = 0;
    bottles = 0;
    coins = 0;

    constructor(canvas, keyboard) { // bekommt seine definition aus game.js übergeben.(-- new World(canvas); --)
        this.ctx = canvas.getContext('2d'); // canvas wird aus der game.js übernommen und zu ctx.
        this.canvas = canvas; // canvas wird hier global gespeichert. in der canvas variablen.
        this.keyboard = keyboard; // keyboard wird zu einer globalen Variable.
        this.draw(); // die draw() methode wird ausgeführt.
        this.setWorld();
        this.run();
    }

    run() {
        setInterval(() => {
            this.checkThrowObjects();
            this.checkCollisions();
        }, 150);
    }

    checkThrowObjects() {
        if (this.keyboard.T && this.bottles > 0) {
            this.pushObjectToArray();
            this.bottles -= 1;
        }
        if (this.bottles < 10) {
            this.collectableB.forEach((o) => {
                this.bottleBar.setPercentage(this.bottles);
                if (this.character.isColliding(o)) {
                    o.collect();
                    this.bottles += 1;
                }
            });
        }
    }

    // Testfunktion
    test() {
        
    }

    pushObjectToArray() {
        let bottle = new ThrowableObjects(this.character.x + 100, this.character.y + (this.character.height / 2), this.character.otherDirection);
        this.throwableObject.push(bottle);
    }

    checkCollisions() {
        this.level.enemies.forEach((enemy) => {
            if (this.character.isColliding(enemy)) {
                this.character.hit();
                this.character.isHurt();
                this.statusBar.setPercentage(this.character.energy);
            }
        });

        this.collectableC.forEach((coin)=>{
            if(this.character.isColliding(coin)){
                this.coins += 1;
                coin.collect();
                this.coinBar.setPercentage(this.coins);
            }
        });


        this.throwableObject.forEach((o) => {
            this.level.enemies.forEach((enemy) => {
                if (o.isColliding(enemy)) {
                    enemy.hit();
                }
            });
        });
    }

    setWorld() {
        this.character.world = this; //VErknüpft character und World damit die World klasse auf character zugreifen kann. this greift auf die aktuelle Instanz der welt zu
    }


    draw() {

        
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);// leert das canvas bevor es neu gezeichnet wird. clearRect( (x-achse=0), (y-achse=0), width, height);

        this.ctx.translate(this.camera_x, 0); // Der 0 Wert ist die y-achse. der Translatebefehl benötigt 2 parameter. Der Wert wird um 100 verschoben.

        this.addObjectsToMap(this.level.backgroundObjects); //addObjectsToMap() übergibt die Parameter des jeweiligen elements  an die funktion addToMap() weiter...




        this.ctx.translate(-this.camera_x, 0);//Back
        //----------Space for fixed objects------------
        this.addToMap(this.statusBar);
        this.addToMap(this.bottleBar);
        this.addToMap(this.coinBar);
    
        
        

        this.ctx.translate(this.camera_x, 0);//Forward


        this.addObjectsToMap(this.collectableB);
        this.addObjectsToMap(this.collectableC);

        this.addToMap(this.character);

        this.addObjectsToMap(this.throwableObject);//addObjectsToMap

        this.addObjectsToMap(this.level.enemies);
        this.addObjectsToMap(this.level.clouds);

        this.ctx.translate(-this.camera_x, 0);

        let self = this; // this functioniert in der requestAnimationFrame() methode nicht mehr(ist einfach so...). deswegen wird this an self übergeben.
        requestAnimationFrame(function () {// requestAnimationFrame() ruft jedesmal nachdem die Bilder geladen wurden wieder die draw() methode auf. je besser die graka desto schneller läd requestAnimationFrame() die draw() methode.
            self.draw(); // this wurde als self übergeben und tut nun das selbe wie this
        });
    }

    addObjectsToMap(objects) { //hier werden die elemente in die forEach schleife übergeben...
        objects.forEach(o => {
            this.addToMap(o);// hier wird die funktion addToMap() für jedes Element das an die schleife übergeben wird ausgeführt...
        });
    }

    addToMap(mo) {// hier werden die von addToMap() übergebenen Elemente weiter verarbeitet....
        if (mo.otherDirection) {
            this.flipImage(mo);
        }
        mo.draw(this.ctx);
        /* mo.drawFrame(this.ctx); */


        if (mo.otherDirection) {
            this.flipImageBack(mo);
        }
    }

    flipImage(mo) {
        this.ctx.save(); //Die aktuelle einstellung wird gespeichert.
        this.ctx.translate(mo.width, 0);//
        this.ctx.scale(-1, 1);
        mo.x = mo.x * -1;
    }

    flipImageBack(mo) {
        this.ctx.restore();
        mo.x = mo.x * -1; // Die x koordinate wird umgedreht
    }
}