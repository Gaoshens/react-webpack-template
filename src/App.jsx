import React, { memo, useEffect } from 'react';

const App = (props) => {
  const [count, setCount] = React.useState(0);

  useEffect(() => {
    let timer = setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, [count]);

  return (
    <>
      <h1>app...</h1>
      <p>{count}</p>
      <p>{props.price}</p>
    </>
  );
};

export default memo(App);
