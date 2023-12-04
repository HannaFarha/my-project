class Game {
    constructor() {
      this.startScreen = document.getElementById("game-intro");
      this.gameScreen = document.getElementById("game-screen");
      this.gameEndScreen = document.getElementById("game-end");
      this.player = new Player(
<<<<<<< HEAD
        this.gameScreen,
        200,
        500,
        100,
        150,
        "./images/car.png"
      );
      this.height = 600;
      this.width = 500;
      this.obstacles = [];
      this.score = 0;
      this.lives = document.getElementById("lives").innerText;
      this.gameIsOver = false;
    }
  
=======
        
        this.gameScreen,
        this.left= 200,
        this.top=500,
        this.width=90,
        this.height=130,
        this.imgSrc="./images/man.png",
        

      );
      
      this.height =570;
      this.width = 700;
      this.obstacles = [];
      this.obstacles2 = [];
      this.score = 0;
      this.lives = 4;
      this.gameIsOver = false;
    
    }
   
   
>>>>>>> af4f1ca9283a1752cca6ec39bd202c6ef044ed98
    start() {
      // Set the height and width of the game screen
      this.gameScreen.style.height = `${this.height}px`;
      this.gameScreen.style.width = `${this.width}px`;
<<<<<<< HEAD
  
=======
     
>>>>>>> af4f1ca9283a1752cca6ec39bd202c6ef044ed98
      // Hide the start screen
      this.startScreen.style.display = "none";
      // Show the game screen
      this.gameScreen.style.display = "block";
<<<<<<< HEAD
  
=======
     
>>>>>>> af4f1ca9283a1752cca6ec39bd202c6ef044ed98
      // Start the game loop
      this.gameLoop();
    }
  
    gameLoop() {
<<<<<<< HEAD
      console.log("in the game loop");
  
      if (this.gameIsOver) {
        return;
      }
  
      this.update();
  
=======
      //console.log("in the game loop");
      
      if (this.gameIsOver) {
        return;
      }
      
      this.update();
      document.getElementById("lives").innerHTML ="lives: "+ this.lives;
      document.getElementById("score").innerHTML ="score: "+ this.score;
      
>>>>>>> af4f1ca9283a1752cca6ec39bd202c6ef044ed98
      window.requestAnimationFrame(() => this.gameLoop());
    }
  
    update() {
<<<<<<< HEAD
      this.player.move();
  
=======
    
      this.player.move();
     
>>>>>>> af4f1ca9283a1752cca6ec39bd202c6ef044ed98
      // Check for collision and if an obstacle is still on the screen
      for (let i = 0; i < this.obstacles.length; i++) {
        const obstacle = this.obstacles[i];
        obstacle.move();
  
<<<<<<< HEAD
        // If the player's car collides with an obstacle
=======
        // If the player's collides with an obstacle
>>>>>>> af4f1ca9283a1752cca6ec39bd202c6ef044ed98
        if (this.player.didCollide(obstacle)) {
          // Remove the obstacle element from the DOM
          obstacle.element.remove();
          // Remove obstacle object from the array
          this.obstacles.splice(i, 1);
          // Reduce player's lives by 1
          this.lives--;
          // Update the counter variable to account for the removed obstacle
          i--;
        } // If the obstacle is off the screen (at the bottom)
        else if (obstacle.top > this.height) {
          // Increase the score by 1
<<<<<<< HEAD
          this.score++;
=======
          
>>>>>>> af4f1ca9283a1752cca6ec39bd202c6ef044ed98
          // Remove the obstacle from the DOM
          obstacle.element.remove();
          // Remove obstacle object from the array
          this.obstacles.splice(i, 1);
          // Update the counter variable to account for the removed obstacle
          i--;
        }
      }
<<<<<<< HEAD
  
=======
      for (let i = 0; i < this.obstacles2.length; i++) {
        const obstacle = this.obstacles2[i];
        obstacle.move();
  
        // If the player's car collides with an obstacle
        if (this.player.didCollide(obstacle)) {
          // Remove the obstacle element from the DOM
          obstacle.element.remove();
          // Remove obstacle object from the array
          this.obstacles2.splice(i, 1);
          // Reduce player's lives by 1
          this.score++;
          // Update the counter variable to account for the removed obstacle
          i--;
        } // If the obstacle is off the screen (at the bottom)
        else if (obstacle.top > this.height) {
          // Increase the score by 1
          this.lives--;
          // Remove the obstacle from the DOM
          obstacle.element.remove();
          // Remove obstacle object from the array
          this.obstacles2.splice(i, 1);
          // Update the counter variable to account for the removed obstacle
          i--;
        }
      }
      
      
>>>>>>> af4f1ca9283a1752cca6ec39bd202c6ef044ed98
      // If the lives are 0, end the game
      if (this.lives === 0) {
        this.endGame();
      }
  
      // Create a new obstacle based on a random probability
      // when there is no other obstacles on the screen
<<<<<<< HEAD
      if (Math.random() > 0.98 && this.obstacles.length < 1) {
        this.obstacles.push(new Obstacle(this.gameScreen));
      }
    }
=======
      if (Math.random() < 0.08 && this.obstacles.length < 1.5) {
        this.obstacles.push(new Obstacle(this.gameScreen));
      }
      if (Math.random() < 0.98 && this.obstacles2.length < 1) {
        this.obstacles2.push(new Obstacle2(this.gameScreen));
      }
    }
    
>>>>>>> af4f1ca9283a1752cca6ec39bd202c6ef044ed98
  
    // Create a new method responsible for ending the game
    endGame() {
      this.player.element.remove();
      this.obstacles.forEach(function (obstacle) {
        obstacle.element.remove();
<<<<<<< HEAD
      });
=======
        
      });
      this.obstacles2.forEach(function (obstacle2) {
        obstacle2.element.remove();});
>>>>>>> af4f1ca9283a1752cca6ec39bd202c6ef044ed98
  
      this.gameIsOver = true;
      // Hide game screen
      this.gameScreen.style.display = "none";
      // Show end game screen
      this.gameEndScreen.style.display = "block";
    }
  }
  