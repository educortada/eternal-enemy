'use strict';

const main = () => {

  const buildDom = (html) => {
    const main = document.querySelector('main')
    main.innerHTML = html
    return main
  }

  // Splash
  const buildSplashScreen = () => {
    const splashScreen = buildDom(`
    <section class="splash-screen">
      <h1>Eternal Enemies</h1>
      <button>Start</button>
    </section>
    `)

    const startButton = document.querySelector('button')
    startButton.addEventListener('click', buildGameScreen)
  }

  // Game
  const buildGameScreen = () =>  {
    const gameScreen = buildDom(`
      <section class="game-screen">
        <canvas></canvas>
      </section>
    `)

    const width = document.querySelector('.game-screen').offsetWidth
    const height = document.querySelector('.game-screen').offsetHeight

    const canvasElement = document.querySelector('canvas')

    canvasElement.setAttribute('width', width)
    canvasElement.setAttribute('height', height)



    //setTimeout(buildGameOver, 3000)

    const game = new Game(canvasElement)

    game.gameOverCallback(buildGameOver)

    game.startLoop()

    const setPlayerDirection = (event) => {
      if(event.code === 'ArrowUp'){
        game.player.setDirection(-1)
      } else if(event.code === 'ArrowDown'){
        game.player.setDirection(1)
      }
    }

    document.addEventListener('keydown', setPlayerDirection)

  }

  // Game Over
  const buildGameOver = () => {
    const gameOverScreen = buildDom(`
      <section class="game-over">
        <h1>Game Over</h1>
        <button>Restart</button>
      </section>
    `)

    
    const restartButton = document.querySelector('button')
    restartButton.addEventListener('click', buildGameScreen)
  }

  buildSplashScreen()
}

window.addEventListener('load', main)