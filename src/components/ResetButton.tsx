type ResetButtonProps = {
  handleReset: () => void;
};

const ResetButton: React.FC<ResetButtonProps> = ({ handleReset }) => {
  return (
    <button
      className="w-[125px] h-[42px] md:w-[150px] mb-4 md:h-[48px] border-2 rounded-md border-white m-auto transition duration-1000 text-white hover:bg-white hover:text-black"
      onClick={handleReset}
    >
      RESET GAME
    </button>
  );
};

export default ResetButton;
