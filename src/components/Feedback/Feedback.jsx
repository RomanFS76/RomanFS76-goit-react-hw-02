const Feedback = (good,neutral,bad) => {
  return (
    <>
      <p>Good</p><span>{good}</span>
      <p>Neutral</p><span>{neutral}</span>
      <p>Bad</p><span>{bad}</span>
    </>
  );
};

export default Feedback;
