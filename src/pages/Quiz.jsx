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
    <section className="my-8">
      <h1 className="text-4xl font-bold text-center mb-8 text-white">Quiz</h1>
      {/* QUESTIONS */}
      <div className="bg-white rounded-2xl shadow-lg/20 p-8">
        <div className="mb-4">
          Question {usedIndex.length} of {question.length}
        </div>
        <div className="mb-8 text-center text-2xl font-bold text-[#312c51]">
          <p>{currentQuestion?.question}</p>
        </div>
        {/* OPTIONS */}
        <ul className="grid md:grid-cols-2 grid-cols-1 gap-2">
          {currentQuestion?.options.map((option, index) => {
            return (
              <li
                className={`px-4 py-2 transition rounded-xl text-[#312c51] cursor-pointer ${
                  !isAnswered
                    ? "bg-[#EFD2B0] hover:bg-[#FFC570]"
                    : option === currentQuestion.answer
                      ? "bg-[#67C090] text-white"
                      : option === selectedOption
                        ? "bg-[#FF5A5A] text-white"
                        : "bg-[#EFD2B0] opacity-50"
                }`}
                key={index}
                onClick={() => !isAnswered && handleAnswer(option)}
              >
                {option}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Quiz;
