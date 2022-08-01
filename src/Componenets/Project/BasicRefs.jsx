import { useEffect, useRef } from "react";

const BasicRefs = () => {
  const refContainer = useRef(null);
  const divContainer = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(refContainer.current.value);
  };

  useEffect(() => {
    refContainer.current.focus();
  });

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" ref={refContainer} />
        <button type="submit">Click Me</button>
      </form>
      <div>
        <h1 ref={divContainer}>Hello</h1>
      </div>
    </div>
  );
};

export default BasicRefs;
