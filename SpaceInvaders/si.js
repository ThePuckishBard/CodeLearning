console.log('hello');

class Alien extends GraphicObject {
    move() {
        throw new Error('You have to implement the method doSomething!');
    }
    attack() {
        throw new Error('You have to implement the method doSomething!');
    }
    applyDamage() {
        throw new Error('You have to implement the method doSomething!');
    }
}
;

class BasicAlien extends Alien {

}
;

class FastAlien extends Alien {

}
;

class ShootingAlien extends Alien {

}
;

class TankyAlien extends Alien {

}
;

class Building {
    applyDamage() {
    }
    draw() {
    }
    position() {
    }
}

class Fighter extends GraphicObject {
    move() {
        throw new Error('You have to implement the method doSomething!');
    }
    attack() {
        throw new Error('You have to implement the method doSomething!');
    }
    draw() {
        throw new Error('You have to implement the method doSomething!');
    }
    applyDamage() {
        throw new Error('You have to implement the method doSomething!');
    }
}
;

class GraphicObject {
    draw() {
        throw new Error('You have to implement the method doSomething!');
    }
}

class GameField {
    redraw() {
        throw new Error('You have to implement the method doSomething!');
    }
    init(){
        
    }
}