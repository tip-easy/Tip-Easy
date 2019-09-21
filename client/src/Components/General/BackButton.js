import React from 'react';

import { Link } from 'react-router';

export const BackButton = ({
  to,
  replace = false
}) => {
  return (
    replace ? 
      <Link replace to={to} >Back</Link>
    :
      <Link to={to} >Back</Link>
  );
}



export default BackButton;
