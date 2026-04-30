import { useNavigate } from "react-router";

const Welcome = () => {
  const navigate = useNavigate();

  return (
    <section className="text-center text-white flex flex-col items-center justify-center h-screen">
      <h1 className="text-8xl font-bold">Welcome</h1>
      <h2 className="text-xl text-[#f0c38e]">to the</h2>
      <h3 className="text-6xl font-bold mb-4">Quiz</h3>
      <p className="text-2xl mb-8 text-[#f1aa9b]">
        Test your knowledge with our fun quiz!
      </p>
      <button
        onClick={() => navigate("/quiz")}
        className="px-6 py-3 bg-[#f0c38e] text-[#312c51] font-bold rounded-2xl hover:bg-[#f1aa9b] transition cursor-pointer"
      >
        Start Quiz
      </button>
    </section>
  );
};

export default Welcome;
