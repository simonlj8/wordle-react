import React, { useState } from 'react';



const Userinput = () => {

    const OnClickOk = () => {

                
        let guess = 'hallå'
        let word = 'cykla'
        
            
        
        const check = (guess, word) => {

            let g = guess.toUpperCase().split('');
            let w = word.toUpperCase().split('');
            let output = [];
            let output2 = [];
            let tmpWord = word.toUpperCase().split('');


            for (let i = 0; i < w.length; i++) {
                if (g[i] === w[i]) {
                    output[i] = {
                        letter: g[i],
                        result: "Correct",
                        color: "green"
                    };

                    tmpWord[i] = "!"
                    output2.push(i)
                }
            }
            for (let i = 0; i < w.length; i++) {
                if (!output2.includes(i)) {
                    if (tmpWord.includes(g[i])) {
                        output[i] = {
                            letter: g[i],
                            result: "Missplaced",
                            color: "Yellow"
                        }
                    }
                    if (!tmpWord.includes(g[i])) {
                        output[i] = {
                            letter: g[i],
                            result: "Incorrect"
                        }
                    }
                }
            }

            console.log(output)
            
                      
        };
        check(guess, word);


    }
    const [word, setWord] = useState([]);

    const test = (e) => {
        setWord(word[e.target.value]);
        console.log(test)
      };



      

   return (

        <div className="wordle">

            <label>
                Din gissning:
                <input className="userWord" type="text" />
            </label>
            <button className="userInput" onClick={OnClickOk}>OK!</button>
            <h1>&#128526;</h1>
            <ul>
                <span>
                </span>
            </ul>
           
            
        
        </div>


  //  )
   )
   }
export default Userinput;