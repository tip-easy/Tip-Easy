import React from 'react';

import { Link } from 'react-router-dom';

export const BackButton = ({
  to = "/",
  replace = false,
  anchorText,
}) => {

  // `to` is a required property, hence why it's used in the switch()
    if (replace && !anchorText) {
      return <Link replace to={to} >Back</Link>
    }
    else if (!replace && anchorText) {
      return <Link to={to} >{anchorText}</Link>
    }
    else if (replace && anchorText) {
      return <Link replace to={to} >{anchorText}</Link>
    }
    else {
      return <Link to={to} >Back</Link>
    }
}



export default BackButton;
