import { useEffect, useState } from "react";
import GameTitle from "../components/GameTitle";
import Board from "../components/Board";
import ResetButton from "../components/ResetButton";
import Winner from "../components/Winner";

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

  // --------------useEffect: RUNS CHECK FOR WINNER FUNCTION EVERY NEW MOVE-------------- //
  useEffect(() => {
    checkForWinner();
  }, [board]);

  // --------------CHECKS FOR WINNER FUNCTION-------------- //
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
    setBoard(Array(9).fill(null));
    setCurrentPlayer("O");
    setIsGameOver(true);
    setWinner(null);

    setTimeout(() => setIsGameOver(false), 700);
  };

  return (
    <main className="flex flex-col gap-10 md:gap-8">
      <GameTitle />

      {winner ? (
        <Winner winner={winner} />
      ) : (
        <Board
          handleClick={handleClick}
          isGameOver={isGameOver}
          board={board}
        />
      )}

      <ResetButton handleReset={handleReset} />
    </main>
  );
};

export default BoardContainer;
