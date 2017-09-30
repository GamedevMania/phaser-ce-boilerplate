import MainState from './states/main.state';

class Game extends Phaser.Game {

    constructor() {
        super(800, 600, Phaser.AUTO, '');
        this.state.add('MainState', MainState);
        this.state.start('MainState');
    }
}

new Game();