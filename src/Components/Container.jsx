import React from "react";

function Container({ children }) {
  return (
    <div className="bg-gray/20 min-h-screen h-fit pt-12 overflow-x-hidden">
      <div className="md:w-2/3 lg:w-1/2 min-w-min max-w-5xl mx-auto px-3 py-10 flex flex-col gap-3">
        {children}
      </div>
    </div>
  );
}

export default Container;
