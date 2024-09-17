import { useNavigate } from "react-router-dom";

const HomeContainer: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col justify-center w-[95%] sm:w-[50%] max-w-[400px] gap-5 m-auto mt-10 border-2 p-8 home-container">
      <h1 className="text-[2.25rem] text-white text-center">HOW TO PLAY</h1>

      <div className="text-center text-white rules-container">
        <h2 className="mb-5 text-4xl underline">Rules:</h2>

        <ul className="md:text-[1.5rem] flex flex-col gap-10 mb-10">
          <li>- Cards will flip back after you make your selection.</li>
          <li>- First player to get 3 in a row is the winner.</li>
          <li>- Remember where you place your marks.</li>
        </ul>

        <button
          className="p-5 mt-10 text-3xl rounded-lg hover:opacity-100 "
          onClick={() => navigate("game")}
        >
          START GAME
        </button>
      </div>
    </div>
  );
};

export default HomeContainer;
