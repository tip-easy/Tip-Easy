import React from 'react';

import { Link } from 'react-router-dom';

export const BackButton = ({
  to,
  replace = false,
  anchorText,
}) => {
  // The decision to use `anchorText` for the switch() is arbitrary. Using replace would be equally valid.
  switch(anchorText) {
    case (replace && !anchorText):
      return <Link replace to={to} >Back</Link>
      
    case (!replace && anchorText):
      return <Link to={to} >{anchorText}</Link>

    case (replace && anchorText):
      return <Link replace to={to} >{anchorText}</Link>

    default:
      return <Link to={to} >Back</Link>
  }
}



export default BackButton;
