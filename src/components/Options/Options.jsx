const Options = (updateFeedback) => {
  return (
    <>
      <button onClick={updateFeedback}>Good</button>
      <button onClick={updateFeedback}>Bad</button>
      <button onClick={updateFeedback}>Neutral</button>
    </>
  );
};

export default Options;
