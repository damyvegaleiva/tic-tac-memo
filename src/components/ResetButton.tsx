type ResetButtonProps = {
  handleReset: () => void;
};

const ResetButton: React.FC<ResetButtonProps> = ({ handleReset }) => {
  return (
    <button
      className="w-[125px] animate-bounce text-black h-[40px] md:w-[150px] mb-4 md:h-[48px] border-2 rounded-md border-black m-auto transition duration-1000 text- bg-[#19c0f5] font-bold"
      onClick={handleReset}
    >
      RESET GAME
    </button>
  );
};

export default ResetButton;
