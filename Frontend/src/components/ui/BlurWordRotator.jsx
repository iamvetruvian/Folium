import { useEffect, useState } from "react";

export default function BlurWordRotator({
  words = ["Productivity", "Efficiency", "Discipline"],
  interval = 2000,
}) {
  const [index, setIndex] = useState(0);
  const [animate, setAnimate] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setAnimate(false);

      setTimeout(() => {
        setIndex((prev) => (prev + 1) % words.length);
        setAnimate(true);
      }, 300);
    }, interval);

    return () => clearInterval(timer);
  }, [words.length, interval]);

  return (
    <span
      style={{
        display: "inline-block",
        transition: "all 0.3s ease",
        filter: animate ? "blur(0px)" : "blur(8px)",
        opacity: animate ? 1 : 0,
      }}
    >
      {words[index]}
    </span>
  );
}