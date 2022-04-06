    const WordLenght = ({ letterSubmit, charsLength, unique }) => {
    return (
        <>
        <div>
        <p>Välj hur många bokstäver och om orden ska ha unika eller tillåta samma bokstav flera gånger</p>    
        </div>
            <form onSubmit={letterSubmit}>
            <select value={charsLength}>
                <option value="">Välj hur många bokstäver du vill spela med</option>
                <option value="4">Spela med 4 bokstäver</option>
                <option value="5">Spela med 5 bokstäver</option>                
            </select>            
            <br></br>
            <select value={unique}>
            <option value="">Upprepa bokstäver?</option>
            <option value="yes">Ja</option>
            <option value="no">Nej</option>
            </select>
            <button type="submit">Ok!</button>
            </form>
        </>
    );
}

export default WordLenght;