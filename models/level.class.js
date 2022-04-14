class Level {
    enemies;
    clouds;
    backgroundObjects;
    level_end_x = 2300;
    

    constructor(enemies, clouds, backgroundObjects) {
        this.enemies = enemies; // this.enemies greift auf die globale variable enemies zu. = enemies wird an den Constructor weiter gegeben.
        this.clouds = clouds;
        this.backgroundObjects = backgroundObjects;
    }
}