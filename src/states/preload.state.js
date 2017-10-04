class PreloadState extends Phaser.State {

    preload() {

    }

    create() {
        this.state.start('MainState');
    }
}

export default PreloadState;