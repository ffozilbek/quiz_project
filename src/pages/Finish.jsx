import { useLocation } from "react-router";

const Finish = () => {
  const location = useLocation();
  console.log(location.state);

  return (
    <section>
      Finish {location.state?.score} / {location.state?.question?.length}
    </section>
  );
};

export default Finish;
