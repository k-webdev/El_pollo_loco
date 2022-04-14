class DrawableObject {
    img;
    imageCache = {};
    currentImage = 0;
    x = 0;
    y = 100;
    percentage = 0;


    loadImage(path) {
        this.img = new Image(); // new Image() ist wie: document.getElementById('image').innerHTML = '<img id="image" src="">'
        this.img.src = path; // Übernimmt den übergebenen Parameter path aus der loadImage(path) function und übergibt ihn an img. 
    }

    collect(){
        if(this instanceof CollectableBottle){
            this.y += 200;
        }
        if(this instanceof CollectableCoins){
            this.y += 500;
        }
    }

    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);//methode wird genutzt um das Bild darzustellen. drawImage() ist eine vordefinierte Methode.
    }

    loadImages(array) {
        array.forEach((path) => { // path kann hier auch anders heißen. hier wird der Relative Pfad übergeben.
            let img = new Image(); // Varriable mit neuem Bild wird angelegt 
            img.src = path;         // Bild-Pfad wird in das Image() object geladen (der Pfad wird in das Bild geladen!!!) FRAGE WIRD ES JETZT ANGEZEIGT???
            this.imageCache[path] = img; // path wird als schlüssel genutzt. Jeder Pfad ist als path in hinterlegt und wird durch forEach abgefragt.
            
        });
    }

    drawFrame(ctx) {

        if (this instanceof Character || this instanceof Chicken || this instanceof ThrowableObjects || this instanceof CollectableBottle || this instanceof Endboss || this instanceof CollectableCoins) {
            ctx.beginPath();
            ctx.lineWidth = '1';
            ctx.strokeStyle = 'blue';
            ctx.rect(this.x, this.y, this.width, this.height); // 
            ctx.stroke();
        }
    }

}