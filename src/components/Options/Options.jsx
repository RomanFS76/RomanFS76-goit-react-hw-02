const Options = ({ updateFeedback,total }) => {
  return (
    <>
      <button onClick={() => updateFeedback("good")}>Good</button>
      <button onClick={() => updateFeedback("bad")}>Bad</button>
      <button onClick={() => updateFeedback("neutral")}>Neutral</button>
      {total>=1 && <button onClick={() => {total=0}}>Reset</button>}
      
    </>
  );
};

export default Options;
