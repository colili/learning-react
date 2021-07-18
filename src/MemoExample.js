import React, { useMemo, useState } from "react";

export default function MemoExample() {
  const [count, setCount] = useState(0);
  const text = useMemo(
    () => {
      console.log("run memo");
      return `This is a memorized text ${Date.now()}`;
    },
    [
      /* Math.floor(count/10) */
    ]
  );

  return (
    <div>
      <p>Memorized text: {text}</p>
      <p>{count}</p>
      <button
        onClick={() => {
          setCount((x) => x + 1);
        }}
      >
        Add count
      </button>
    </div>
  );
}
