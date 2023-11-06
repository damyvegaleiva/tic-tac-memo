import Square from "./Square";

type BoardProps = {
  board: string[];
  handleClick: (index: number) => boolean;
  isGameOver: boolean;
};

const Board: React.FC<BoardProps> = ({ board, handleClick, isGameOver }) => {
  return (
    <div className=" w-[320px] md:w-[650px] gap-2 md:gap-y-5 flex flex-row flex-wrap justify-around items-center m-auto ">
      {board.map((_, index) => (
        <Square
          key={index}
          handleClick={handleClick}
          index={index}
          board={board}
          isGameOver={isGameOver}
        />
      ))}
    </div>
  );
};

export default Board;
