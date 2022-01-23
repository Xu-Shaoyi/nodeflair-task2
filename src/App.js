import React, { useState } from "react";
import classes from "./App.module.css";
import Button from "./Button";
import PictureDisplay from "./PictureDisplay";
import images from "./data";

const buttons = ["Mountain", "Beaches", "Birds", "Food"];

const App = () => {
  const [imageList, setImageList] = useState(images.Mountain);

  const handleClick = (e) => {
    var value = e.target.outerText;
    setImageList(images[value]);
  };

  return (
    <div>
      <div className={classes.buttons}>
        {buttons.map((button) => (
          <Button name={button} onClick={handleClick} />
        ))}
      </div>
      <PictureDisplay name={imageList.name} imgs={imageList.url} /> 
    </div>
  );
};

export default App;
