import ResetButton from "./ResetButton";

type WinnerModalProps = {
  winner: string | null;
  handleReset: () => void;
  isTied: boolean;
};

const WinnerModal: React.FC<WinnerModalProps> = ({
  winner,
  handleReset,
  isTied,
}) => {
  return (
    <section className="absolute flex justify-center w-full h-full m-auto bg-black-clear">
      {/* --------------------------MODAL-------------------------- */}
      <div className=" m-auto rounded-lg bg-white/5 border-2 backdrop-blur-md w-[300px] md:w-[600px] flex-col flex border-[#003865] gap-10">
        <h2 className="text-center text-[1.75rem] md:text-[3rem] text-[#19c0f5] winner-title">
          {isTied ? "Game Tied" : `Winner`}
        </h2>

        {!isTied && (
          <p className="text-center text-[1.75rem] md:text-[3rem] text-white winner-title">
            Player{" "}
            <span
              className={`bg-clip-text bg-gradient-to-t text-transparent ${
                winner === "O"
                  ? "from-[#E84757] via-[#8B2635] to-[#F58CA9]"
                  : "from-[#19C0F5] via-[#003865] to-[#1DA8DF]"
              }`}
            >
              {winner}
            </span>
          </p>
        )}

        <ResetButton handleReset={handleReset} />
      </div>
    </section>
  );
};

export default WinnerModal;
