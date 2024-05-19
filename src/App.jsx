import { useEffect, useState } from "react";
import "./App.css";
import Description from "./components/Description/Description";
import Feedback from "./components/Feedback/Feedback";
import Options from "./components/Options/Options";
import Notification from "./components/Notification/Notification";

function App() {
  const [reviews, setReviews] = useState(()=>{
    const localReviews = localStorage.getItem(reviews);
    if (localReviews) {
        return  JSON.parse(localReviews);
        }
        return { good: 0, bad: 0, neutral: 0 }
  }); 
    
    




  useEffect(() => {
    localStorage.setItem("reviews", JSON.stringify(reviews));
  }, [reviews]);

  const updateFeedback = (feedbackType) => {
    if (feedbackType === "reset") {
      setReviews({ good: 0, neutral: 0, bad: 0 });
      return;
    }
    setReviews({ ...reviews, [feedbackType]: reviews[feedbackType] + 1 });
  };

  let totalFeedback = reviews.good + reviews.neutral + reviews.bad;
  let positive = Math.round((reviews.good / totalFeedback) * 100);

  return (
    <>
      <Description></Description>
      <Options updateFeedback={updateFeedback} total={totalFeedback}></Options>
      {totalFeedback > 0 ? (
        <Feedback
          good={reviews.good}
          neutral={reviews.neutral}
          bad={reviews.bad}
          total={totalFeedback}
          positive={positive}
        ></Feedback>
      ) : (
        <Notification></Notification>
      )}
    </>
  );
}

export default App;
