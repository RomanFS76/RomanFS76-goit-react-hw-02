import { useState } from "react";
import "./App.css";
import Description from "./components/Description/Description";
import Feedback from "./components/Feedback/Feedback";
import Options from "./components/Options/Options";
import Notification from "./components/Notification/Notification";

function App() {
  const [reviews, setReviews] = useState({ good: 0, neutral: 0, bad: 0 });

  const updateFeedback = (feedbackType) => {
    setReviews({ ...reviews, [feedbackType]: reviews[feedbackType] + 1 });
  };

  let totalFeedback = reviews.good + reviews.neutral + reviews.bad;

  return (
    <>
      <Description></Description>
      <Options updateFeedback={updateFeedback} total={totalFeedback}></Options>
      {totalFeedback >= 1 ? (
        <Feedback
          good={reviews.good}
          neutral={reviews.neutral}
          bad={reviews.bad}
          total={totalFeedback}
        ></Feedback>
      ) : (
        <Notification></Notification>
      )}
    </>
  );
}

export default App;
