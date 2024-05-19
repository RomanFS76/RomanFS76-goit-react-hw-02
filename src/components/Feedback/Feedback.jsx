

const Feedback = ({ good, neutral, bad, total, positive }) => {
  return (
    <>
      <p>Good:&nbsp;{good}</p>
      <p>Bad:&nbsp;{bad}</p>
      <p>Neutral:&nbsp;{neutral}</p>
      <p>Total:&nbsp;{total}</p>
      <p>Positive:&nbsp;{positive + "%"}</p>
    </>
  );
};

export default Feedback;


