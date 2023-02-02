// import React from "react";
// import { Clock } from "grommet";

// function Timer() {
//   return <Clock type="digital" />;
// }

// export default Timer;

import React, { useState, useEffect } from "react";

const Clock = ({ timezone }) => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date(Date.now() + timezone * 60 * 60 * 1000));
    }, 1000);
    return () => clearInterval(intervalId);
  }, [timezone]);

  return <div>{time.toLocaleString()}</div>;
};

export default Clock;
