import React from "react";

type MainLayoutProps = {
  children: React.ReactNode;
};

const Mainlayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="max-w-xl p-2 md:p-0 mx-auto">
      <h1 className="text-center text-2xl font-semibold mt-2">Zustand Todo</h1>
      {children}
    </div>
  );
};

export default Mainlayout;
