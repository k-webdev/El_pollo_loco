class MovableObject {
    x = 120;
    y = 230;
    speed = Math.random() * 0.15;
    img;
    currentImage = 0;
    width = 100;
    heigth = 200;
    imageCache = [];

    loadImage(path){
        this.img = new Image();
        this.img.src = path;
    }

    loadImages(arr){
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });
    }

    moveRight() {
        console.log('moving right');
    }

    moveLeft(){
        setInterval(() => {

            this.x -= 0.15 + this.speed;
        }, 1000 / 60);
    }
}