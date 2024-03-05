import React from "react";

const Spinner = ({ width, height }) => {
  return (
    <img
      src="https://i.gifer.com/origin/34/34338d26023e5515f6cc8969aa027bca.gif"
      width={width || null}
      height={height || null}
      alt="Loading..."
    />
  );
};

export default Spinner;
