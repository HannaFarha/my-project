class Player extends Component {
<<<<<<< HEAD
    constructor(gameScreen, left, top, width, height, imgSrc) {
      super(gameScreen, left, top, width, height, imgSrc);
=======
    constructor(gameScreen, left, top, width, height,imgSrc) {
      super(gameScreen, left, top, width, height,imgSrc);
>>>>>>> af4f1ca9283a1752cca6ec39bd202c6ef044ed98
  
      this.directionX = 0;
      this.directionY = 0;
    }
<<<<<<< HEAD
=======

    change(elm){
      if(this.elm>=1){
        // this.player.imgSrc ="./images/health.png"
        console.log(this.imgSrc)
       this.imgSrc="./images/health.png";
       console.log(this.imgSrc)
      }else {this.imgSrc="./images/man.png";

      }
    }
>>>>>>> af4f1ca9283a1752cca6ec39bd202c6ef044ed98
  
    move() {
      // Update player's car position based on directionX and directionY
      this.left += this.directionX;
      this.top += this.directionY;
  
      // Ensure the player's car stays within the game screen
      if (this.left < 10) {
        this.left = 10;
      }
      if (this.top < 10) {
        this.top = 10;
      }
      if (this.left > this.gameScreen.offsetWidth - this.width - 10) {
        this.left = this.gameScreen.offsetWidth - this.width - 10;
      }
      if (this.top > this.gameScreen.offsetHeight - this.height - 10) {
        this.top = this.gameScreen.offsetHeight - this.height - 10;
      }
  
      // Update the player's car position on the screen
      this.updatePosition();
    }
  
    didCollide(obstacle) {
      const playerRect = this.element.getBoundingClientRect();
      const obstacleRect = obstacle.element.getBoundingClientRect();
  
      if (
        playerRect.left < obstacleRect.right &&
        playerRect.right > obstacleRect.left &&
        playerRect.top < obstacleRect.bottom &&
        playerRect.bottom > obstacleRect.top
      ) {
        console.log("Crash!");
  
        return true;
      } else {
        return false;
      }
    }
  
    updatePosition() {
      this.element.style.left = `${this.left}px`;
      this.element.style.top = `${this.top}px`;
    }
  }
  