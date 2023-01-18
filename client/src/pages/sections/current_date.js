import React, { useEffect, useState } from "react";

const CurrentDate = () => {
  const [dateState, setdateState] = useState(new Date());
  useEffect(() => {
    setInterval(() => {
      setdateState(new Date());
    }, 30000);
  }, []);

  return (
    <p className="text-[0.75rem] pb-8">{`${dateState.toLocaleDateString(
      "en-GB",
      { month: "short", day: "numeric" }
    )}, ${dateState.toLocaleString("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: false,
    })} UTC. Disclaimer`}</p>
  );
};

export default CurrentDate;
