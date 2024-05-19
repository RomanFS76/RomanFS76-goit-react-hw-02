const Feedback = ({good,neutral,bad,total}) => {
  return (
    <>
      <p>Good</p><span>{good}</span>      
      <p>Bad</p><span>{bad}</span>
      <p>Neutral</p><span>{neutral}</span>
      <p>Total</p><span>{total}</span>
    </>
  );
};

export default Feedback;
