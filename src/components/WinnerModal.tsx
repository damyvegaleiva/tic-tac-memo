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
    <div className="absolute z-20 flex justify-center w-screen h-screen m-auto md:bottom-0 md:left-0 md:right-0 md:top-0 bg-black-clear">
      {/* --------------------------MODAL-------------------------- */}
      <div className=" mb-auto mt-[180px] md:m-auto rounded-lg bg-white/5 border-2 backdrop-blur-md w-[300px] md:w-[700px] flex-col flex border-[#003865]">
        <h2 className="text-center text-[2rem] md:text-[3rem] text-white mb-20 winner-title">
          {isTied ? "Tied" : `Winner Player ${winner}`}
        </h2>

        <ResetButton handleReset={handleReset} />
      </div>
    </div>
  );
};

export default WinnerModal;
