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
  const [isCooldown, setIsCooldown] = useState<boolean>(false);

  const handleAction = () => {
    if (isCooldown) return;

    setIsCooldown(true);
    setTimeout(() => setIsCooldown(false), 1500);

    const actionSuccess = handleClick(index);
    const activeClass = actionSuccess
      ? "active border-[#19C0F5]"
      : "md:hover:border-red-500 border-red-500 animate-shake";

    setIsActive(activeClass);

    const timeOutDuration = actionSuccess ? 900 : 400;

    setTimeout(() => setIsActive(""), timeOutDuration);
  };

  return (
    <div
      className="transition-transform w-[85px] h-[135px] duration-300 md:w-[175px] md:h-[250px] lg:h-[250px] lg:w-[190px] md:hover:scale-105 flip-card"
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
