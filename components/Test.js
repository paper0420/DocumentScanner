import React, { useState } from "react";
import Tesseract from "tesseract.js";

const Test = () => {
  const [text, setText] = React.useState("");
  const [imageSrc, setImageSrc] = useState();

  const fileInputRef = React.useRef(null);

  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      setImageSrc(e.target.result);
    };
    reader.readAsDataURL(file);
  };

  const handleClick = () => {
    Tesseract.recognize(imageSrc).then(({ data: { text } }) => {
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
      {imageSrc != null ? (
        <img src={imageSrc} width="400" height="300" />
      ) : (
        <></>
      )}
      <br />
      <button onClick={handleClick}>Extract text</button>
      <br />
      <p>{text}</p>
    </div>
  );
};

export default Test;
