import WebpackLoader from 'phaser-webpack-loader';
import AssetManifest from '../AssetManifest';

class PreloadState extends Phaser.State {

    create() {
        this.game.plugins.add(WebpackLoader, AssetManifest)
        .load()
        .then(() => {
          this.game.state.start('MainState');
        });
    }
}

export default PreloadState;