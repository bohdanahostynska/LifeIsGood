import React, { useEffect, useState, createContext } from "react";
export const CardsContext = createContext();

export const DataContext = (props) => {
  return (
    <CardsContext.Provider value={{}}>{props.children}</CardsContext.Provider>
  );
};
