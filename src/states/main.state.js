import LogoImage from '../objects/logo.image';

class MainState extends Phaser.State {

    preload() {
        this.load.image('gamedevmania-logo', 'assets/images/gamedevmania-logo.png');
    }

    create() {
        let Logo = new LogoImage(this.game, this.game.world.centerX, this.game.world.centerY, 'gamedevmania-logo');
    }

}

export default MainState;