class Chicken extends MovableObject { // Chicken enthält alles was in MovableObject definiert ist!!!

    y = 375;
    height = 50;
    width = 50;


    IMAGES_DEAD = [
        'img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/4.G_muerte.png'
    ];

    IMAGES_WALKING = [
        'img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/1.Ga_paso_derecho.png',
        'img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/2-Ga_centro.png',
        'img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/1.Ga_paso_derecho.png',
        'img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/3.Ga_paso izquierdo.png'
    ];



    // super()..... wird nur benutzt wenn man methoden aus der übergeordneten Klasse aufrufen will. 
    constructor() {// der constructor wird immer als erstes dann ausgeführt wenn dieses Element ausgeführt wird.
        super().loadImage('img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/1.Ga_paso_derecho.png');// Der Pfad wird an movable-objects.loadImage(path) übergeben.
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_DEAD);
        this.x = 1000 + Math.random() * 500;// (-- Math.random() = 0,0 - 1,0 --) <== Math.random hat einen wert zwischen 0,0 und 1,0 --- 

        this.speed = 0.15 + Math.random() * 0.25; // speed wird unterschiedlich berechnet damit die chicken unterschiedliche Geschwindigkeiten haben!

        this.animate();
    }


    animate() {

        setInterval(() => { // EIn Intervall wird ausgeführt
            this.moveLeft();
        }, 1000 / 60);

        setInterval(() => {
            if(this.energy == 100){
                this.playAnimation(this.IMAGES_WALKING);
            }else if(this.energy == 0){
                this.playAnimation(this.IMAGES_DEAD);
                this.y += 20;
            }
            
        }, 150);

        setInterval(() => {
            this.x -= Math.random() * 0.25; //varriable wird random verändert
        }, 1000 / 60); // das entspricht ca 60 FPS

        
    }

}




