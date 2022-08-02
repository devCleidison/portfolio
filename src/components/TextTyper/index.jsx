import { useEffect, useState } from "react";

export const TextTyper = ({ text, time, duration, loop, delay = 0 }) => {
  const [newText, setNewText] = useState("");

  const handleTyping = () => {
    const intervalTyping = setTimeout(() => {
      const textSplited = text.split("").reverse();

      const typer = setInterval(() => {
        if (!textSplited.length) {
          return clearInterval(typer);
        }

        const nextLetter = textSplited.pop();
        setNewText((actual) => actual + nextLetter);
      }, time);
    }, delay);
  };

  useEffect(() => {
    if (loop === "infinity") {
      handleTyping();

      const intervalLoop = setInterval(() => {
        setNewText("");
        handleTyping();
      }, duration);
    }
  }, []);

  return <>{newText}</>;
};
