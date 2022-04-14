class BackgroundObject extends MovableObject {


    y = 0;
    width = 720;
    height = 480;
    

    constructor(path, x){// hier kann auch die x oder y Koordinate übergeben werden wenn Sie dynamisch sein sollen... constructor( x, y){...}
        super().loadImage(path);// der path kommt aus der MovableObjects klasse...
        this.x = x;

      /*  this.x = this.x; */ //für dynamische vergabe muss der x parameter an den constructor übergeben werden.
       // this.y = y; für dynamische vergabe muss der y parameter an den constructor übergeben werden.
    }
}