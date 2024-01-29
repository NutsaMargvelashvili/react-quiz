import { useQuiz } from "../context/QuizContext";

function FinishScreen() {
  const { points, maxPossiblePoints, highscore, dispatch } = useQuiz();
  const percentage = (points / maxPossiblePoints) * 100;

  let emoji;
  if (percentage === 100) emoji = "🏅";
  else if (percentage >= 80) emoji = "🥈";
  else if (percentage >= 50) emoji = "🥉";
  else if (percentage >= 10) emoji = "🤔";
  else emoji = "🤦";
  return (
    <>
      <p className={"result"}>
        <span>{emoji}</span>You scored <strong>{points}</strong> out of{" "}
        {maxPossiblePoints} ({Math.round(percentage)}%)
      </p>
      <p className={"highscore"}>(Highscore: {highscore} points)</p>
      <button
        onClick={() => dispatch({ type: "restart" })}
        className={"btn btn-ui"}
      >
        Restart quiz
      </button>
    </>
  );
}

export default FinishScreen;
