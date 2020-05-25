import React from 'react';

const Like = (props) => {
  let classes = "fa fa-heart";
  if (!props.liked) classes += "-o";
  return (
      <i
        onClick={props.onClick}
        style={{ cursor: "pointer" },{padding: 20}}
        className={classes}
        aria-hidden="true"
      ></i>
  );
}

export default Like;
