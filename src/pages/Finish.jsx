import { useLocation, useNavigate } from "react-router";

const Finish = () => {
  const location = useLocation();
  const navigate = useNavigate();
  console.log(location.state);

  return (
    <section className="text-center text-white flex flex-col items-center justify-center h-screen">
      <div
        className={`${location?.state?.score < 4 ? "bg-[#FF5A5A]" : location?.state?.score < 7 ? "bg-[#FFC570]" : "bg-[#67C090]"} w-100 h-100 rounded-full flex items-center justify-center flex-col shadow-lg/20 p-8`}
      >
        <h1 className="text-4xl font-bold mb-4">Your Score is:</h1>
        <h2 className="text-6xl font-bold mb-10">
          {location.state?.score} of {location.state?.question?.length}
        </h2>
        <button
          className="text-white py-2 px-4 rounded-xl hover:underline transition cursor-pointer"
          onClick={() => navigate("/")}
        >
          Play Again
        </button>
      </div>
    </section>
  );
};

export default Finish;
