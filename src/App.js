import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header'
import WordLenght from './components/WordLenght';
import Userinput from './components/UserInput';

function App() {  
  
  const [letter, setLetter] = useState([]);
  const [word, setWord] = useState([]);
  const [guesses, setGuess] = useState([]);
  const [text, setText] = useState("");
  const [box, setBox] = useState("")
  const [gameState, setGameState] = useState('config');
  const [start, setStart] = useState(false);

  const onTextChange = (event) => {
    setText(event.target.value);
  };


  const letterSubmit = (e) => {
    e.preventDefault();
    setGameState('play');
    setStart(true);
  };

 const words = ["", "test", "polis", "hallå"];
  const test = (e) => {
    setWord(word[e.target.value]);
    console.log(test)
  };
  
  console.log(words)

  const checkGuess = () => {
    setGuess([...guesses, text.toUpperCase()]);
    setText('');
  };



  useEffect(() => {
    window.addEventListener("keydown", (e) => {
      if (e.key === 's'){
        console.log("Hello")
      }
      
    });
  }, []);

 


  return (
    <>
      <Header />
      <h1>Wordle clone react</h1>
      <WordLenght 
      letterSubmit={letterSubmit}
        />
      <Userinput />
      <div className="App">    
     <div className="wordleGuess">     
      <ul>          
      </ul>
     <span></span>
     </div>
    
    </div>
   
    </>
  
  )}

export default App;
