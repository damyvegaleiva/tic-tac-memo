import { useEffect, useState } from "react";
import Board from "../components/Board";
import WinnerModal from "../components/WinnerModal";

const BoardContainer = () => {
  const [currentPlayer, setCurrentPlayer] = useState<string>("O");
  const [board, setBoard] = useState<string[]>(Array(12).fill(null));
  const [winner, setWinner] = useState<string | null>(null);
  const [isGameOver, setIsGameOver] = useState<boolean>(false);
  const [isTied, setIsTied] = useState<boolean>(false);

  const winnerSquares = [
    [0, 1, 2],
    [0, 5, 10],
    [0, 4, 8],
    [1, 2, 3],
    [1, 5, 9],
    [1, 6, 11],
    [2, 5, 8],
    [2, 6, 10],
    [3, 6, 9],
    [3, 7, 11],
    [4, 5, 6],
    [5, 6, 7],
    [8, 9, 10],
    [9, 10, 11],
  ];

  // --------------useEffect: RUNS CHECK FOR WINNER FUNCTION EVERY NEW MOVE-------------- //
  useEffect(() => {
    const allEqual = () => {
      return board.every((value: string) => value !== null);
    };
    checkForWinner();
    setIsTied(allEqual());
  }, [board]);

  // --------------CHECKS FOR WINNER FUNCTION-------------- //
  const checkForWinner = () => {
    const allEqual = (array: string[]) =>
      array.every((value: string) => value === array[0] && value !== null);

    winnerSquares.map((setOfNumbers) => {
      const squares: string[] = setOfNumbers.map((number) => board[number]);

      if (allEqual(squares)) {
        setIsGameOver(true);
        setWinner(squares[0]);
        return;
      }
    });
  };

  // --------------PLAYER MOVE-------------- //
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

  // --------------RESET GAME-------------- //
  const handleReset = () => {
    setBoard(Array(12).fill(null));
    setCurrentPlayer("O");
    setIsGameOver(false);
    setWinner(null);
  };

  return (
    <main className="flex flex-col gap-5 mt-5 md:gap-4">
      <h2 className="px-3 py-1 m-auto text-lg text-center text-black rounded-md bg-white/90 w-fit md:text-3xl font-RussoOne">
        Turn: <span className="underline">Player</span>{" "}
        <span
          className={
            "bg-clip-text bg-gradient-to-t text-transparent " +
            (currentPlayer === "O"
              ? "from-[#E84757] via-[#8B2635] to-[#F58CA9]"
              : "from-[#19C0F5] via-[#003865] to-[#1DA8DF]")
          }
        >
          {currentPlayer}
        </span>
      </h2>

      <Board
        handleClick={handleClick}
        isGameOver={isGameOver}
        board={board}
        isTied={isTied}
      />

      {winner || isTied ? (
        <WinnerModal
          winner={winner}
          isTied={isTied}
          handleReset={handleReset}
        />
      ) : null}
    </main>
  );
};

export default BoardContainer;
