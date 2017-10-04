import BootState from './states/boot.state';
import PreloadState from './states/preload.state';
import MainState from './states/main.state';

class Game extends Phaser.Game {

    constructor() {
        super(800, 600, Phaser.AUTO, '');

        this.state.add('BootState', BootState);
        this.state.add('PreloadState', PreloadState);
        this.state.add('MainState', MainState);

        this.state.start('BootState');
    }
}

new Game();