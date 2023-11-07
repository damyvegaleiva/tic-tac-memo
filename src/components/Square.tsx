import { useState } from "react";
import Card from "./Card";

type SquareProps = {
  handleClick: (index: number) => boolean;
  index: number;
  board: string[];
  isGameOver: boolean;
  isTied: boolean;
};

const Square: React.FC<SquareProps> = ({
  handleClick,
  index,
  board,
  isGameOver,
  isTied,
}) => {
  const [isActive, setIsActive] = useState<string>("");

  // ----DISPATCH HANDLECLICK AND FLIPS CARD BY SETTING/REMOVING THE ACTIVE CLASS----- //
  const handleAction = () => {
    if (handleClick(index)) {
      setIsActive("active border-[#19C0F5]");

      setTimeout(() => {
        setIsActive("");
      }, 900);

      return;
    }

    // -----SHOWS ALERT FOR CARD ALREADY SELECTED----- //
    setIsActive("md:hover:border-red-500 border-red-500 animate-shake");

    setTimeout(() => {
      setIsActive("");
    }, 400);
  };

  return (
    <div
      className="transition-transform w-[100px] h-[140px] duration-300 md:h-[250px] md:w-[200px] flip-card md:hover:scale-105"
      onClick={() => handleAction()}
    >
      {/* -------------CARD INNER------------- */}

      <Card
        isActive={isActive}
        isGameOver={isGameOver}
        board={board}
        index={index}
        isTied={isTied}
      />
    </div>
  );
};

export default Square;
