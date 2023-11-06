import { useState } from "react";
import "./Square.scss";

type SquareProps = {
  handleClick: (index: number) => boolean;
  index: number;
  board: string[];
  isGameOver: boolean;
};

const Square: React.FC<SquareProps> = ({
  handleClick,
  index,
  board,
  isGameOver,
}) => {
  const [isActive, setIsActive] = useState<string>("");

  // ----DISPATCH HANDLECLICK AND FLIPS CARD BY SETTING/REMOVING THE ACTIVE CLASS----- //
  const handleAction = () => {
    if (handleClick(index)) {
      setIsActive("active");
      setTimeout(() => setIsActive(""), 900);
    }
  };

  return (
    <div
      className="transition-transform w-[100px] h-[140px] duration-300 md:h-[250px] md:w-[200px] flip-card md:hover:scale-105"
      onClick={() => handleAction()}
    >
      {/* -------------CARD INNER------------- */}
      <div
        className={`flip-card-inner ${isActive} ${
          isGameOver && "active"
        } md:hover:border-2 md:hover:border-[#19C0F5]`}
      >
        {/* -------------CARD FRONT------------- */}
        <div className="flip-card-front bg-gradient-to-b from-[#2980B9] from-25% via-[#6DD5FA] via-75% to-[#ffffff] to-100%">
          <p className="absolute text-[.70rem] top-1 z-10 md:text-[1.5rem] md:top-2 text-white">
            TIC-TAC-MEMO
          </p>
          <p className="md:text-[8rem] z-10 text-[3.5rem] bg-clip-text bg-gradient-to-t text-transparent from-[#19C0F5] via-[#003865] to-[#1DA8DF]">
            {board[index]}
          </p>
          <p className="absolute z-0 md:text-[2.7rem] text-[1.1rem] bottom-0 md:-bottom-2">
            🧠
          </p>
        </div>

        {/* -------------CARD BACK------------- */}
        <div className="flip-card-back">
          <p className="absolute text-[.70rem] bottom-4 z-10 md:text-[1.5rem] font-normal md:bottom-6 text-white">
            TIC-TAC-MEMO
          </p>
          <p className="absolute z-0 md:text-[7rem] text-[2.5rem] top-0 md:-top-3">
            🧠
          </p>
        </div>
      </div>
    </div>
  );
};

export default Square;
