import React from "react";
import NavButtons from "@/app/components/buttons/NavButtons";

const page = () => {
  return (
    <div>
      <p>This is About page</p>
      <NavButtons name="Return Button" routing="/../.." />
    </div>
  );
};

export default page;
