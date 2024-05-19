import clsx from "clsx";
import css from "./Options.module.css";

const Options = ({ updateFeedback, total }) => {
  return (
    <>
      <div className={clsx(css.flex, css.wrapperFeedback)}>
        <button className={css.feedbackBtn} onClick={() => updateFeedback("good")}>Good</button>
        <button className={css.feedbackBtn} onClick={() => updateFeedback("bad")}>Bad</button>
        <button className={css.feedbackBtn} onClick={() => updateFeedback("neutral")}>Neutral</button>
        {total > 0 && (
          <button className={clsx(css.feedbackBtn, css.reset) } onClick={() => updateFeedback("reset")}>Reset</button>
        )}
      </div>
    </>
  );
};

export default Options;
