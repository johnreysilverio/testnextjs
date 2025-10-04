import React from "react";

const NavButtons = ({ name, routing, styling }) => {
  return (
    <a
      className={`bg-[#b76e79] text-2xl m-2 p-2 rounded-2xl ${styling}`}
      href={routing}
    >
      {name}
    </a>
  );
};

export default NavButtons;
