import React, { useState } from "react";

export const useOpenSidebar = () => {
  const [isShown, setIsShown] = useState(false);
  setIsShown(!isShown);
};
