import React, { createContext, useContext, useState, useMemo } from "react";
import { BANKS } from "../data/banks";
import { STATE_NAMES } from "../data/regions";

const AppContext = createContext(null);

export function AppProvider({ children }) {
  const [selectedBank, setSelectedBank] = useState(BANKS[4].name); // HDFC Bank default
  const [selectedState, setSelectedState] = useState(STATE_NAMES[0]);
  const [reportOpen, setReportOpen] = useState(false);
  const [navOpen, setNavOpen] = useState(typeof window !== "undefined" ? window.innerWidth >= 1024 : true);

  const value = useMemo(
    () => ({
      selectedBank, setSelectedBank,
      selectedState, setSelectedState,
      reportOpen, setReportOpen,
      navOpen, setNavOpen, toggleNav: () => setNavOpen((v) => !v),
    }),
    [selectedBank, selectedState, reportOpen, navOpen]
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useApp must be used within AppProvider");
  return ctx;
}
