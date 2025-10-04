import React from "react";
import NavButtons from "@/app/components/buttons/NavButtons";

const page = () => {
  return (
    <div>
      <p>Home page</p>
      <NavButtons name="Return Button" routing="/../.." />
    </div>
  );
};

export default page;
