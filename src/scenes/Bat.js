import Phaser from "phaser";

class Bat extends Phaser.GameObjects.Sprite {
  constructor(scene, xCoord, yCoord) {

    let x = xCoord;
    let y = yCoord;

    super(scene, x, y, "beam");

    scene.add.existing(this);

    this.setScale(1.5);
    this.play("bat_animation");
    scene.physics.world.enableBody(this);
    this.body.velocity.x = -150;

    scene.enemies.add(this);
  }

  update() {
    if (this.x < 0) {
      console.log("out of bounds!");
      this.destroy();
    }
  }
}

export default Bat;