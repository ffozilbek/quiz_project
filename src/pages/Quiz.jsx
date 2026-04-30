import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import db from "../../public/db.json";

const Quiz = () => {
  const [question] = useState(db);
  const [usedIndex, setUsedIndex] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [isFinish, setIsFinish] = useState(false);
  const [score, setScore] = useState(0);
  const [isAnswered, setIsAnswered] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  const navigation = useNavigate();

  useEffect(() => {
    if (isFinish) {
      navigation("/finish", { state: { score, question } });
    }
  }, [isFinish]);

  const getRandomQuestion = () => {
    setUsedIndex((prev) => {
      if (prev.length === question.length) {
        setIsFinish(true);
        return prev;
      }

      let randomIndex;
      do {
        randomIndex = Math.floor(Math.random() * question.length);
      } while (prev.includes(randomIndex));

      setCurrentQuestion(question[randomIndex]);

      return [...prev, randomIndex];
    });

    setIsAnswered(false);
    setSelectedOption("");
  };

  const handleAnswer = (option) => {
    if (option === currentQuestion.answer) {
      setScore((prev) => prev + 1);
    }

    setIsAnswered(true);
    setSelectedOption(option);

    setTimeout(() => {
      getRandomQuestion();
    }, 700);
  };

  useEffect(() => {
    getRandomQuestion();
  }, []);

  return (
    <section>
      <h1>Quiz</h1>
      {/* QUESTIONS */}
      <div>
        Question {usedIndex.length} of {question.length}
      </div>
      <div className="mb-8">
        <p>{currentQuestion?.question}</p>
      </div>
      {/* OPTIONS */}
      <ul className="flex flex-col gap-2">
        {currentQuestion?.options.map((option, index) => {
          return (
            <li
              className={`px-1 py-2 transition ${
                !isAnswered
                  ? "bg-sky-200 hover:bg-sky-300"
                  : option === currentQuestion.answer
                    ? "bg-green-500 text-white"
                    : option === selectedOption
                      ? "bg-red-500 text-white"
                      : "bg-sky-200 opacity-50"
              }`}
              key={index}
              onClick={() => !isAnswered && handleAnswer(option)}
            >
              {option}
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Quiz;
