import React, { useState } from "react";
import Tesseract from "tesseract.js";

const Test = () => {
  const [text, setText] = React.useState("");
  const [img, setImg] = useState();

  const fileInputRef = React.useRef(null);

  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    setImg(file);
  };

  const handleClick = () => {
    Tesseract.recognize(img).then(({ data: { text } }) => {
      setText(text);
    });
  };

  return (
    <div>
      <h1 htmlFor="fileInput">Select a photo:</h1>
      <form>
        <input
          id="fileInput"
          type="file"
          accept="image/*"
          ref={fileInputRef}
          onChange={handleFileSelect}
        />
      </form>
      {img != null ? <img src={img.name} width="400" height="300" /> : <></>}
      <br />
      <button onClick={handleClick}>Extract text</button>
      <br />
      <p>{text}</p>
    </div>
  );
};

export default Test;
