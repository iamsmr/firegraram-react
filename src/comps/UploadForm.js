import React, { useState } from "react";
import ProgressBar from "./ProgressBar";

const UploadForm = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  const type = ["image/png", "image/jpeg"];

  const changeHandler = (e) => {
    let select = e.target.files[0];
    if (select && type.includes(select.type))
      return setError(null), setFile(select);
    setError("please Select an image flie (png or jpeg)");
    setFile(null);
  };
  //hel
  return (
    <form>
      <label>
        <input onChange={changeHandler} type="file" />
        <span>+</span>
      </label>
      <div className="output">
        {error && <div className="error">{error}</div>}
        {file && <div>{file.name}</div>}
        {file && <ProgressBar file={file} setFile={setFile} />}
      </div>
    </form>
  );
};

export default UploadForm;
