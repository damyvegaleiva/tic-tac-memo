type WinnerProps = {
  winner: string;
};

const Winner: React.FC<WinnerProps> = ({ winner }) => {
  return (
    <h1 className="text-center text-[3.5rem] text-white my-20">
      Player {winner} Wins
    </h1>
  );
};

export default Winner;
