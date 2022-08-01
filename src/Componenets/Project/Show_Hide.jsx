import React, { useState, useEffect } from "react";

const Show_Hide = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <div>Show_Hide</div>
      <button onClick={() => setShow(!show)}>Show/Hide</button>
      {show && <Item />}
    </>
  );
};

const Item = () => {
  const [size, setSize] = useState(window.innerWidth);

  const checkSize = () => {
    setSize(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", checkSize);
    return () => {
      window.removeEventListener("resize", checkSize);
    };
  }, []);

  return (
    <div>
      <h1>window</h1>
      <h2>Size: {size} </h2>
    </div>
  );
};

export default Show_Hide;
