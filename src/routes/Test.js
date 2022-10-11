import React, { useState, useEffect } from "react";

export default function Test() {
  let [count, setCount] = useState(0);
  let [age, setAge] = useState(20);

  useEffect(() => {
    if (count !== 0 && count < 3) {
      setAge(age + 1);
    }
  }, [count]);
  const onClick = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <div>안녕하십니까 전 {age}</div>
      <button onClick={() => onClick()}>누르면한살먹기 {count}</button>
    </div>
  );
}
