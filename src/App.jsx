import { useState } from "react";
import "./App.css";
import Description from "./components/Description/Description";
import Feedback from "./components/Feedback/Feedback";
import Options from "./components/Options/Options";


  

  

function App() {

  const [reviews, setReviews]=useState({good: 0,neutral: 0,bad: 0});

  const updateFeedback = (feedbackType) => {
   setReviews({...reviews,[feedbackType]: reviews[feedbackType] +1})
  }

  return (
    <>
      <Description></Description>
      <Options updateFeedback={updateFeedback}></Options>
      <Feedback good={reviews.good} neutral={reviews.neutral} bad={reviews.bad}></Feedback>
    </>
  );
}

export default App;

// const onLeaveFeedback = (option) => {
// 	setValues({
// 		...values,
// 		[option]: values[option] + 1
// 	});
// };