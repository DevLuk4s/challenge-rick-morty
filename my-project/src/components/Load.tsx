import React from "react";

type LoadMoreButtonProps = {
  onClick: () => void;
};

const Load: React.FC<LoadMoreButtonProps> = ({ onClick }) => {
  return (
    <div className="w-full flex justify-center p-3">
      <button
        onClick={onClick}
        className="bg-white text-green-700 border border-green-500 font-bold py-2 px-4 rounded"
      >
        Carregar Mais
      </button>
    </div>
  );
};

export default Load;
