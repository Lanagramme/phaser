export default class Scene1 extends Phaser.Scene {
    constructor() {
      super({ key: 'Scene1' });
    }

    preload() {
      this.load.image('sprite', "../../../src/assets/sprites/sprite.jpg") 
      this.load.image('surtr', "../../../src/assets/images/Surtr.webp") 
    }

    create() {
      // Add a white background
      this.cameras.main.setBackgroundColor('#90adc6');
      var button1 = {
        x: 650,
        y: 100,
        width: 200,
        height: 50,
        color: "0Xff0000",
      }
      var button2 = {...button1}
      button2.y = 200
      button1.gameObject = this.add.rectangle(button1.x, button1.y, button1.width, button1.height, button1.color)
      this.add.rectangle(button2.x, button2.y, button2.width, button2.height, button2.color)

      this.identify = (cible) => {
        this.add.rectangle(cible.x, cible.y, 10, 10, 0x000000)
      }

      this.identify(button2)

      var model = this.add.image(300, 300, "surtr")
      model.setScale(0.7)

      // Add text "lorem ipsum" inside the square
      var text = this.add.text(button1.x - 30, button1.y - 10, 'change scene', { fontFamily: 'Arial', fontSize: '12px', fill: '#000000' });

      // Set interactive property to true to enable input events
      button1.gameObject.setInteractive();

      // Define behavior when the square is clicked
      button1.gameObject.on('pointerdown', function () {
        // Transition to Scene2
        this.scene.start('Scene2');
      }, this);
    }
}
