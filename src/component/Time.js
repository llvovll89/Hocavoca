import React, { useState, useEffect } from "react";
import Styles from "./Time.module.css";

export default function Time() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const id = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className={Styles.time_container}>
        <div className={Styles.time_content}>
      <h1>Time</h1>
      <span>{time.toLocaleTimeString()}</span>
        </div>
    </div>
  );
}
