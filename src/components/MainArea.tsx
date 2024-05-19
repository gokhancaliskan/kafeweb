import React from "react";

interface MainAreaProps {
  mainItems: { main: string }[];
  onMainClick: (main: string) => void;
}

const MainArea: React.FC<MainAreaProps> = ({
  mainItems,
  onMainClick,
}) => {
  const uniqueMains = [
    ...new Set(mainItems.map((item) => item.main)),
  ];

  return (
    <div className="main-area">
      {uniqueMains.map((main, index) => (
        <button
          key={index}
          className="main-button"
          onClick={() => onMainClick(main)}
        >
          {main}
        </button>
      ))}
    </div>
  );
};

export default MainArea;
