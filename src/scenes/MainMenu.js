import Phaser from "phaser";

let graphics;
let cursors;

class MainMenu extends Phaser.Scene {
  constructor() {
    super("mainmenu");
  }
  
  create() {
    cursors = this.input.keyboard.createCursorKeys();

    graphics = this.add.graphics();
    graphics.fillStyle(0x000000, 1);
    graphics.fillRect(0, 0, 800, 600);

    this.add.text(270, 300, "Press space to start.")
    this.add.text(270, 315, "Move with up, down, left, right.")
    this.add.text(270, 330, "Press spacebar to shoot.")
    this.add.text(270, 345, "Kill all enemies to win.")
  }

  update() {
    if (cursors.space.isDown) {
      this.scene.start('game');
    }
  }
}

export default MainMenu;