'use strict';

class Game{
  constructor(canvas){
    this.canvas = canvas
    this.ctx = this.canvas.getContext('2d')
    this.player
    this.enemies = []
    this.isGameOver = false
  }

  startLoop(){
    
    this.player = new Player(this.canvas, 3)

    const loop = () => {

      if(Math.random() > 0.9){
        const y = Math.random() * this.canvas.height
        this.enemies.push(new Enemy(this.canvas, y))
      }

      this.checkAllCollisions()
      // Update
      this.updateCanvas()
      // Clear
      this.clearCanvas()
      // Draw
      this.drawCanvas()
      if(!this.isGameOver){
        window.requestAnimationFrame(loop)
      }
    }
    window.requestAnimationFrame(loop)
  }

  updateCanvas(){
    this.player.update()
    this.enemies.forEach(enemy => {
      enemy.update()
    })
  }

  clearCanvas(){
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
  }

  drawCanvas(){
    this.player.draw()
    this.enemies.forEach(enemy => {
      enemy.draw()
    })
  }

  checkAllCollisions(){
    this.player.checkScreen()
    this.enemies.forEach((enemy, index) => {
      if(this.player.checkCollisionEnemy(enemy)){
        console.log('dead')
        this.player.lostLive()
        this.enemies.splice(index, 1)
        console.log(index)
        console.log(this.player.lives)
        if(this.player.lives === 0){
          this.onGameOver()
          this.isGameOver = true
        }
      }
    })
    this.player.checkScreen()
  }

  gameOverCallback(callback){
    this.onGameOver = callback
  }
}
