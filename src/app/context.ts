import React, { useContext, createContext } from "react";
import { ATTRIBUTES_DEFAULT } from './consts';

export const CharacterContext = createContext(ATTRIBUTES_DEFAULT);

export const useCharacter = () => {
  return useContext(CharacterContext);
};
