import { useState } from "react";
import { sculptureList } from "./data.js"



function App() {

  const [index , setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);


  function handleNextClick(){
    if (index < sculptureList.length -1) {
      setIndex(index+1);
    }
    else{
      setIndex(0);
    }
  }

  function handlePreviousClick(){
    if (index > 0) {
      setIndex(index-1);
    }
    else{
      setIndex(sculptureList.length-1);
    }
  }

  function handlMoreClick(){
    setShowMore(!showMore)
  }

  let sculpture = sculptureList[index];
  return(
    <>
    <button onClick={ handlePreviousClick }>Previous</button>
    <button onClick={ handleNextClick }>Next</button>
    

    <h2>
      <i> {sculpture.name}</i> by {sculpture.artist}
    </h2>
    <h3>
      ({index + 1} of {sculptureList.length})
    </h3>
    <button onClick={handlMoreClick}>{showMore ? "Hide" : "Show"} Details</button>
    <br />
    <img src={sculpture.url} alt={sculpture.alt} />
    {showMore && <p>{sculpture.description}</p>}
   </>
   
  );
}

export default App
