import React from "react";

interface MainAreaProps {
  mainItems: { main: string }[];
  onMainClick: (main: string) => void;
  selectedMain: string | null;
}

const MainArea: React.FC<MainAreaProps> = ({
  mainItems,
  onMainClick,
  selectedMain,
}) => {
  const uniqueMains = [
    ...new Set(mainItems.map((item) => item.main)),
  ];

  return (
    <div className="main-area">
      {uniqueMains.map((main, index) => (
        <button
          key={index}
          className={`main-button ${
            main === selectedMain ? "selected" : ""
          }`}
          onClick={() => onMainClick(main)}
        >
          {main}
        </button>
      ))}
    </div>
  );
};

export default MainArea;
