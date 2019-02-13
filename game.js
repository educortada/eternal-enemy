'use strict';

class Game{
  constructor(canvas){
    this.canvas = canvas
    this.ctx = this.canvas.getContext('2d')
    this.player
    this.enemies = []
  }

  startLoop(){
    console.log('loop')
    const loop = () => {
      console.log('in the loop')
      
      // Update
      this.updateCanvas()
      // Clear
      this.clearCanvas()
      // Draw
      this.drawCanvas()
      window.requestAnimationFrame(loop)
    }
    window.requestAnimationFrame(loop)
  }

  updateCanvas(){

  }

  clearCanvas(){
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
  }

  drawCanvas(){

  }
}
