import Square from "./Square";

type BoardProps = {
  board: string[];
  handleClick: (index: number) => boolean;
  isGameOver: boolean;
  isTied: boolean;
};

const Board: React.FC<BoardProps> = ({
  board,
  handleClick,
  isGameOver,
  isTied,
}) => {
  return (
    <article className=" w-[360px] md:w-[750px] lg:w-[800px] gap-1.5 md:gap-y-4 md:gap-x-3 flex flex-row flex-wrap justify-around items-center m-auto ">
      {board.map((_, index) => (
        <Square
          key={index}
          handleClick={handleClick}
          index={index}
          board={board}
          isGameOver={isGameOver}
          isTied={isTied}
        />
      ))}
    </article>
  );
};

export default Board;
