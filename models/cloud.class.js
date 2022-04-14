class Cloud extends MovableObject{

    y = 50;
    width = 500;
    height = 250;

    constructor(){// der constructor wird immer als erstes dann ausgeführt wenn dieses Element ausgeführt wird.
        super().loadImage('img/5.Fondo/Capas/4.nubes/1.png');// Der Pfad wird an movable-objects.loadImage(path) übergeben.

        this.x = 200 + Math.random() * 500;// (-- Math.random() = 0,0 - 1,0 --) <== Math.random hat einen wert zwischen 0,0 und 1,0 --- 

        this.animate(); // Hier wird die Funktion aufgerufen, jedesmal wenn der Construktor aufgerufen wird.

    }

    animate(){
        this.moveLeft();
    }

    
}