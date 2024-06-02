import React from "react";
import styles from "../styles/mainarea.module.css"; // CSS modülünü import ettik

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
    <div className={styles.mainArea}>
      {uniqueMains.map((main, index) => (
        <button
          key={index}
          className={`${styles.mainButton} ${
            main === selectedMain ? styles.selected : ""
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
