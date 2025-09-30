import React, { createContext, useContext, useState } from "react";

const NoteContext = createContext();
export const NoteProvider = () => {
  return useContext(NoteContext);
};
const StateProvider = ({ children }) => {
  const [showNav, setShowNav] = useState(false);
  const [dashboardSidebar, setDashboardSidebar] = useState(false);

  const value = {
    showNav,
    setShowNav,
    dashboardSidebar, setDashboardSidebar
  };
  return (
    <>
      <NoteContext.Provider value={value}>{children}</NoteContext.Provider>
    </>
  );
};

export default StateProvider;
