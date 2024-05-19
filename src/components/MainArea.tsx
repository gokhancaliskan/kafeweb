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
    <div className="mains">
      <div className="btn">
        {uniqueMains.map((main, index) => (
          <button
            key={index}
            className="btn-main"
            onClick={() => onMainClick(main)}
          >
            {main}
          </button>
        ))}
      </div>
    </div>
  );
};

export default MainArea;
