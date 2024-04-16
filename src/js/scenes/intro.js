export default class Intro extends Phaser.Scene {
  constructor() {
    super({ key: "Intro"})
  }
  preload() {
    this.load.image('bg', "../../../src/assets/images/Intro_background.jpg") 
  }

  create() {
    this.cameras.main.setBackgroundColor('#000000');
    var background = this.add.image(400,300, "bg")
    background.displayWidth = 800
    background.displayHeight = 600
    var start = {
      x: 400,
      y: 400,
      width: 200,
      height: 50,
      color: "0xfad02c" ,
    }
    start.gameObject = this.add.rectangle(start.x, start.y, start.width, start.height, start.color)
    start.gameObject.alpha = 0.7
    
    start.text = this.add.text(start.x, start.y, 'Start', {
      fontFamily: 'Arial',
      fontSize: '24px',
      color: '#000',
      wordWrap: { width: start.width }
    }).setFixedSize(start.width, start.height);
    start.text.setOrigin(0.13, 0.1)
    
    start.gameObject.setInteractive()
    start.gameObject.on('pointerdown', () => {
      this.scene.start('Scene1')
    }, this)
  }
}
