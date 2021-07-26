import React from "react";

export const Tile = ({tile}) => {
  return (
    <div className="tile-container">
      {/* Object.values - generate an array of the object’s values */}
      {Object.values(tile).map((value,index)=>(
        <p key={index} className={ `${index === 0 ? "tile-title" : ""} tile` }>
          {value}
        </p>
      ))}
    </div>
  );
};

// Give a className of "tile-title" to the first <p> element
// Give a className of "tile" to all other <p> elements

