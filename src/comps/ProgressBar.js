import React, { useEffect } from "react";
import useStorage from "../hooks/useStorage";

function ProgressBar({ file, setFile }) {
  const { url, progress } = useStorage(file);

  useEffect(() => {
    if (url) setFile(null);
  }, [url]);

  //   console.log(`url ${url}`);
  //   if (url) setFile(null);
  return (
    <div
      className="progress-bar"
      initial={{ width: 0 }}
      animate={{ width: progress + "%" }}
    ></div>
  );
}

export default ProgressBar;
