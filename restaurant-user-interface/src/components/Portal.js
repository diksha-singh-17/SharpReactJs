import { useEffect } from "react";
import { createPortal } from "react-dom";

const Portal = ({ children, containerId }) => {
  const mountNode = document.getElementById(containerId);

  return createPortal(children, mountNode);
};

export default Portal;
