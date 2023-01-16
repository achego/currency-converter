import React from "react";
import { IconNotification } from "../utils/app_icons";

const AppBar = () => {
  return (
    <nav className="flex justify-between py-5 items-center px-5 w-full sticky top-0 bg-sprim-100 z-10 mb-4">
      <div></div>
      <h2 className="font-semibold tracking-wide">Curencify</h2>
      <IconNotification />
    </nav>
  );
};

export default AppBar;
