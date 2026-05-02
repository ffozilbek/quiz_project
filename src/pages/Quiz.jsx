import { useCallback, useEffect, useReducer } from "react";
import { useNavigate } from "react-router";
import db from "../../public/db.json";

const initialState = {
  usedIndex: [],
  currentQuestion: null,
  isFinish: false,
  score: 0,
  isAnswered: false,
  selectedOption: "",
  timer: 10,
};

const quizReducer = (state, action) => {
  switch (action.type) {
    case "SET_QUESTION": {
      const { question, index } = action.payload;
      return {
        ...state,
        currentQuestion: question,
        usedIndex: [...state.usedIndex, index],
        isAnswered: false,
        selectedOption: "",
        timer: 10,
      };
    }
    case "SET_ANSWERED": {
      const isCorrect = action.payload === state.currentQuestion.answer;
      return {
        ...state,
        isAnswered: true,
        selectedOption: action.payload,
        score: isCorrect ? state.score + 1 : state.score,
      };
    }
    case "SET_TIMEOUT": {
      return {
        ...state,
        isAnswered: true,
        selectedOption: "",
        timer: 0,
      };
    }
    case "TICK": {
      return {
        ...state,
        timer: state.timer - 1,
      };
    }
    case "SET_FINISH": {
      return {
        ...state,
        isFinish: true,
      };
    }

    default:
      return state;
  }
};

const Quiz = () => {
  const [state, dispatch] = useReducer(quizReducer, initialState);
  const {
    usedIndex,
    currentQuestion,
    isFinish,
    score,
    isAnswered,
    selectedOption,
    timer,
  } = state;

  const question = db;
  const navigation = useNavigate();

  useEffect(() => {
    if (isFinish) {
      navigation("/finish", { state: { score, question } });
    }
  }, [isFinish, navigation, score, question]);

  const getRandomQuestion = useCallback(() => {
    if (usedIndex.length === question.length) {
      dispatch({ type: "SET_FINISH" });
      return;
    }

    let randomIndex;

    do {
      randomIndex = Math.floor(Math.random() * question.length);
    } while (usedIndex.includes(randomIndex));

    dispatch({
      type: "SET_QUESTION",
      payload: { question: question[randomIndex], index: randomIndex },
    });
  }, [usedIndex, question]);

  const handleAnswer = (option) => {
    if (isAnswered) return;
    dispatch({ type: "SET_ANSWERED", payload: option });
    setTimeout(() => {
      getRandomQuestion();
    }, 700);
  };

  useEffect(() => {
    if (!currentQuestion || isAnswered) return;

    const interval = setInterval(() => {
      if (timer <= 1) {
        clearInterval(interval);
        dispatch({ type: "SET_TIMEOUT" });
        setTimeout(() => {
          getRandomQuestion();
        }, 700);
        return;
      }
      dispatch({ type: "TICK" });
    }, 1000);

    return () => clearInterval(interval);
  }, [timer, isAnswered, currentQuestion, getRandomQuestion]);

  useEffect(() => {
    getRandomQuestion();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="my-8">
      <h1 className="text-4xl font-bold text-center mb-8 text-white">Quiz</h1>
      {/* QUESTIONS */}
      <div className="bg-white rounded-2xl shadow-lg/20 p-8">
        <div className="flex justify-between items-center">
          <div className="mb-4">
            Question {usedIndex.length} of {question.length}
          </div>
          <div>
            Timer:{" "}
            <span
              className={`${timer < 4 ? "text-red-500" : timer < 7 ? "text-yellow-500" : ""} font-semibold`}
            >
              {timer}
            </span>
          </div>
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
