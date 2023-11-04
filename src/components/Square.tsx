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

  const handleAction = () => {
    if (handleClick(index)) {
      setIsActive("active");
      setTimeout(() => setIsActive(""), 900);
    }
  };

  return (
    <div
      className="transition-transform duration-300 flip-card hover:scale-105"
      onClick={() => handleAction()}
    >
      <div className={`flip-card-inner ${isActive} ${isGameOver && "active"}`}>
        <div className="flip-card-front bg-gradient-to-b from-[#2980B9] from-25% via-[#6DD5FA] via-75% to-[#ffffff] to-100%">
          <p className="text-[6rem] bg-clip-text bg-gradient-to-b text-transparent from-[#e66465] to-[#9198e5]">
            {board[index]}
          </p>
        </div>
        <div className="flip-card-back bg-gradient-to-b from-[#2980B9] from-25% via-[#6DD5FA] via-75% to-[#ffffff] to-100%">
          <p className="absolute z-10 text-[1rem] font-medium  bottom-6">
            TIC-TAC-MEMO
          </p>
          <p className="absolute z-0 text-[5rem] -top-3">🧠</p>
        </div>
      </div>
    </div>
  );
};

export default Square;
