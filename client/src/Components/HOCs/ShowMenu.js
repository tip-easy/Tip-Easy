import React from "react";

export const ShowMenu = WrappedComponent => {

  const HOCComponent = props => {
    return (
      <>
        <p>MENU</p>
        <WrappedComponent />
      </>
    )
  };

  return HOCComponent;
};

export default ShowMenu;