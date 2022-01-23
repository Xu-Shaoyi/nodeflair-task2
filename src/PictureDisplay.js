import React from "react";

import classes from "./PictureDisplay.module.css";

const PictureDisplay = (props) => {
  return (
    <div className={classes.container}>
      <div className={classes.title}>{props.name}</div>
      <div className={classes.imageList}>
        {props.imgs.map(url => 
          <img className={classes.image} src={url} alt={props.name} />
        )}
      </div>
    </div>
  );
};

export default PictureDisplay;
