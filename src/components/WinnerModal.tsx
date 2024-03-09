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
      <div className=" m-auto rounded-lg bg-white/5 border-2 backdrop-blur-md w-[300px] md:w-[600px] flex-col flex border-[#003865]">
        <h2 className="text-center text-[1.75rem] md:text-[3rem] text-white mb-20 winner-title">
          {isTied ? "Tied" : `Winner Player ${winner}`}
        </h2>

        <ResetButton handleReset={handleReset} />
      </div>
    </section>
  );
};

export default WinnerModal;
