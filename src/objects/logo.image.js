class LogoImage extends Phaser.Image {

    constructor(game, x, y, key) {
        super(game, x, y, key);

        this.anchor.setTo(0.5, 0.5);
        this.alpha = 0;

        this.game.add.tween(this).to( { alpha: 1 }, 2000, Phaser.Easing.Linear.None, true, 0, 1000, true);

        this.game.stage.addChild(this);
    }
}

export default LogoImage;