import React, { useEffect, useState } from "react";

export const App: React.FC = (props) => {
  const [message, setMessage] = useState("");
  const [counter, setCounter] = useState(props?.counter || 0);

  useEffect(() => {
    setMessage(props?.message || "Hello From React");
  });

  return (
    <>
      <h2>SSR Content</h2>
      Hello
      <hr />
      <h2>Client side message</h2>
      {message}
      <hr />
      <h3>Counter</h3>
      Value: {counter}
      <div>
        <button onClick={() => setCounter((prevCount) => prevCount - 1)}>
          -1
        </button>
        <button onClick={() => setCounter((prevCount) => prevCount + 1)}>
          +1
        </button>
      </div>
    </>
  );
};
