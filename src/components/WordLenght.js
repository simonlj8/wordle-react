    const WordLenght = ({ letterSubmit, charsLength, unique }) => {
    return (
        <>
        <div>
        <p>Välj hur många bokstäver och om orden ska ha unika eller tillåta samma bokstav flera gånger</p>    
        </div>
            <form onSubmit={letterSubmit}>
            <label>Välj hur många bokstäver du vill spela med: </label>
            <select
            value={charsLength}>
                
                <option value="4">4</option>
                <option value="5">5</option>                
            </select>
                      
            <br/>
            <br/>

            <div>
            
          <input
            type="radio"
            value=""
            //onChange={() => setIsUnique(false)}
            //checked={!isUnique}
          />
          Tillåt samma bokstäver flera gånger.
          <br />
          <input
            type="radio"
            //value={isUnique}
            //onChange={() => setIsUnique(true)}
            //checked={isUnique}
          />
          Endast unika bokstäver.
        </div>
        <button type="submit">Starta spel!</button>
        
         </form>
            
        </>
    );
}

export default WordLenght;