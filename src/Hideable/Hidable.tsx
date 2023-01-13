import { useState, ReactNode } from "react";

interface HideableProps {
  children: ReactNode;
}

export const Hideable = ({ children }: HideableProps) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div>
      <div>{isVisible && children}</div>
      <button onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? "❌" : "Click here for more details"}
      </button>
    </div>
  );
};
