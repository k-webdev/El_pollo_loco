class MovableObject {
    x = 120;
    y = 230;
    img;
    width = 100;
    heigth = 200;

    loadImage(path){
        this.img = new Image();
        this.img.src = path;
    }

    moveRight() {
        console.log('moving right');
    }

    moveLeft(){
        console.log('moving left');
    }
}