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
  const [charsLength, setCharsLength] = useState(5);
  const [gameState, setGameState] = useState('config');
  const [start, setStart] = useState(false);
  
/*
    useEffect(() => {
    const loadWord = async () => {
      const res = await fetch("https://github.com/dwyl/english-words");
      const data = await res.json();
      setCorrectWord(data.word);
    };
 */

  const letterSubmit = (e) => {   
    setGameState('play');
    setStart(true);
  };

 const words = ["", "cykla", "polis", "hallå"];
  const test = (e) => {
    setWord(word[e.target.value]);
    console.log(test)
  };
  
  console.log(words)

  const handleChangeConfig = (e) => {
    setCharsLength(e.target.value);
  };

  useEffect(() => {
    window.addEventListener("keydown", (e) => {
      if (e.key === 's'){
        console.log("Hello")
      }
      
    });
  }, []);

  const handleSubmit = (e) => {
    
    setGameState('play');
  }

  

  if (gameState === 'play'){
    return (
      <>
      
      </>
    )
  };

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
