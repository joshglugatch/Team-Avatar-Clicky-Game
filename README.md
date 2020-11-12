# Team-Avatar-Clicky-Game
[![MIT License](https://img.shields.io/badge/License-MIT-blue.svg)](https://www.mit.edu/~amini/LICENSE.md)
<br>
A memory game built with react.js themed around Avatar: The Last Airbender

 <br>

![demogif](clickgamedemo.gif)


<br>

 ## Built With
* React.js
* HTML
* CSS


## Installation
To install dependencies run
```
npm install
```

## Features
Try to click all the images without repeating. The images will shuffle with each click, and a message will display corresponding to your game status. Your current score is displayed in the top right along with your high score.
<br>



<br>

## Code Example
The handleClick function uses react and does the majority of the app's work. The ID of each image is grabbed when clicked in order to check if we have clicked it already or not. This is done by storing the ID of each clicked image in an array, and checking if clicked images have an ID that is already inside of the array. If the ID does not already exist in our "clicked" array then we continue by pushing the new ID, updating the score to +1, and updating the state of the message displayed to be one that fits the user's game status.
On each click the array of images is shuffled in order to display them in a new order every time.

<br>  

```javaScript

handleClick = (event) => {
      event.preventDefault();
      
      const id = event.target.getAttribute("data-id")
     
      if(!clicked.includes(id)){
        clicked.push(id)
        const newScore = this.state.score + 1
        this.setState({score: newScore })
        if(newScore>this.state.highscore){
          this.setState({highscore: newScore})
        }
        this.setState({message:"Keep going! Defeat the Fire Lord!"})
        if(newScore === 12){
          this.setState({message:"You did it! Team Avatar wins again! Your score was "+ newScore})
          clicked=[]
          this.setState({score: 0})
        }
      }else{
        clicked=[]
        this.setState({score: 0})
        this.setState({message:"Game Over... Click an image to try again."})
      }

      const arr = this.state.characters;
      for (let i = arr.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * arr.length);
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }


      this.setState({characters:arr});
  };

```

<br>
<br>

# Deployed Link:
https://joshglugatch.github.io/Team-Avatar-Clicky-Game/

# Repository Link:
https://github.com/joshglugatch/Team-Avatar-Clicky-Game

<br>

### Author:
Josh Glugatch  

Porfolio Link: https://joshglugatch.herokuapp.com/

[![GitHub](https://img.shields.io/badge/github-%23100000.svg?&style=for-the-badge&logo=github&logoColor=white)](https://github.com/joshglugatch)
<br>
[![LinkedIn](https://img.shields.io/badge/linkedin-%230077B5.svg?&style=for-the-badge&logo=linkedin&logoColor=white)](www.linkedin.com/in/joshua-glugatch)



