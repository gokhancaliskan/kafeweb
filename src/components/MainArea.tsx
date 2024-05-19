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
    <div className="flex flex-wrap justify-center p-4 gap-4">
      {uniqueMains.map((main, index) => (
        <button
          key={index}
          className="btn"
          onClick={() => onMainClick(main)}
        >
          {main}
        </button>
      ))}
    </div>
  );
};

export default MainArea;
