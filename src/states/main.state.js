import LogoImage from '../objects/logo.image';

class MainState extends Phaser.State {

    preload() {
        
    }

    create() {
        let Logo = new LogoImage(this.game, this.game.world.centerX, this.game.world.centerY, 'gamedevmania-logo');
    }

}

export default MainState;