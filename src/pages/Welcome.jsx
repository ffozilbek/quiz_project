import { useNavigate } from "react-router";

const Welcome = () => {
  const navigate = useNavigate();

  return (
    <section className="text-center">
      <h1 className="text-5xl mb-2">Welcome to the Quiz</h1>
      <p className="text-2xl mb-4">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident,
        impedit nihil deleniti obcaecati iusto deserunt dicta rerum sapiente
        omnis perspiciatis.
      </p>
      <button
        onClick={() => navigate("/quiz")}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Start Quiz
      </button>
    </section>
  );
};

export default Welcome;
