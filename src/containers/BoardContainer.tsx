import { useEffect, useState } from "react";
import Square from "../components/Square";

const BoardContainer = () => {
  const [currentPlayer, setCurrentPlayer] = useState<string>("O");
  const [board, setBoard] = useState<string[]>(Array(9).fill(null));
  const [winner, setWinner] = useState<string | null>(null);
  const [isGameOver, setIsGameOver] = useState<boolean>(false);

  const winnerSquares = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
  ];

  useEffect(() => {
    checkForWinner();
  }, [board]);

  const checkForWinner = () => {
    const allEqual = (array: string[]) =>
      array.every((value) => value === array[0] && value !== null);

    winnerSquares.map((setOfNumbers) => {
      const squares: string[] = setOfNumbers.map((number) => board[number]);

      if (allEqual(squares)) {
        setIsGameOver(true);
        setTimeout(() => setWinner(squares[0]), 1200);

        return;
      }
    });
  };

  const handleClick = (index: number) => {
    if (board[index] === null) {
      setBoard((prev) => {
        const newBoard = [...prev];
        newBoard[index] = currentPlayer;

        return newBoard;
      });

      setCurrentPlayer(currentPlayer === "O" ? "X" : "O");

      return true;
    }

    return false;
  };

  const handleReset = () => {
    setBoard(Array(9).fill(null));
    setCurrentPlayer("O");
    setIsGameOver(true);
    setWinner(null);

    setTimeout(() => setIsGameOver(false), 800);
  };

  return (
    <main className="flex flex-col gap-14 md:gap-4">
      <h1 className="text-[2.3rem] md:text-[3.2rem] border-b-2 w-fit m-auto mb-5 text-center text-white">
        TIC-TAC-MEMO 🧠
      </h1>

      {winner ? (
        <h1 className="text-center text-[3.5rem] text-white my-20">
          Player {winner} Wins
        </h1>
      ) : (
        <div className="board-container w-[300px] h-[300px] md:w-[700px] gap-3 md:h-[700px] flex flex-row flex-wrap justify-around items-center m-auto mb-5">
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
      )}

      <button
        className="w-[150px] h-[50px] border-2 rounded-md border-white m-auto transition duration-1000 text-white hover:bg-white hover:text-black"
        onClick={handleReset}
      >
        RESET GAME
      </button>
    </main>
  );
};

export default BoardContainer;
