class BootState extends Phaser.State {

    create() {
        this.state.start('PreloadState');
    }
}

export default BootState;