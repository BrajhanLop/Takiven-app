"use client";
import { useState } from "react";

const useToggle = (initialState = false) => {
  const [isToggle, setIsToggle] = useState(initialState);

  const toggle = () => {
    setIsToggle((prevValue) => !prevValue);
  };

  const isFalse = () => {
    setIsToggle(false);
  };

  return { isToggle, toggle, isFalse };
};

export default useToggle;
