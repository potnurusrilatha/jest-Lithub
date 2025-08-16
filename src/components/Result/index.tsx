import React, { useEffect, useState } from "react";

interface ResultProps {
  message: string | null;
  duration?: number; 
}

const Result = ({ message, duration = 3000 }:ResultProps) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (message) {
      setVisible(true);
    const timer = setTimeout(() => {
        setVisible(false);
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [message, duration]);

  if (!message) return null;

  return (
    <div
      className={`mt-4 px-6 py-3 rounded-lg shadow-lg transition-opacity duration-400 ${
        visible ? "opacity-100" : "opacity-0"
      } bg-yellow-500 text-black font-semibold text-center`}
      role="alert"
    >
      {message}
    </div>
  );
};

export default Result;
