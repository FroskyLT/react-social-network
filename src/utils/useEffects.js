import { useEffect, useRef } from "react";

export const useClickOutside = (handler) => {
  const domNode = useRef();

  useEffect(() => {
    const outsideHandle = (event) => {
      if (domNode.current && !domNode.current.contains(event.target)) {
        handler();
      }
    };

    document.addEventListener("mousedown", outsideHandle);

    return () => {
      document.removeEventListener("mousedown", outsideHandle);
    };
  });

  return domNode;
};
