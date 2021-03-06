import React from "react";
import Header from "./components/Headers/Header";
import Navbar from "./components/Headers/Navbar"
import CharacterCard from "./components/CharacterCard";
import Characters from "./characters.json"

var clicked = []


class App extends React.Component{
  state={
    characters: Characters,
    highscore: 0,
    score: 0,
    message: "Click an image to begin."
  };

  


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


  render(){
    return(
      <div>
      <Navbar
      score={this.state.score}
      highscore={this.state.highscore}
      />
      <Header
      message={this.state.message}
      />
      <div className="container mt-5" style={{backgroundColor: "lightblue"}}>
      <div className="row mt-3 mb-3">
      {this.state.characters.map(character =>(
        <CharacterCard
        name={character.name}
        image={character.image}
        handleClick={this.handleClick}
        id={character.id}
        />
      ))}
      </div>
      </div>
      </div>
    )
  }
}

export default App;