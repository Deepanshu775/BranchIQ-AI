import React from "react";
import { Outlet } from "react-router-dom";
import { useApp } from "../../context/AppContext";
import Sidebar from "./Sidebar";
import Header from "./Header";
import ExecutiveReport from "../ExecutiveReport";

export default function Layout() {
  const { navOpen, setNavOpen } = useApp();
  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <Sidebar />
      {navOpen && (
        <div className="fixed inset-0 z-30 bg-black/40 lg:hidden" onClick={() => setNavOpen(false)} data-testid="nav-backdrop" />
      )}
      <div className={`min-h-screen flex flex-col bq-grid-bg transition-all duration-300 ${navOpen ? "lg:pl-64" : "pl-0"}`}>
        <Header />
        <main className="flex-1 px-4 lg:px-6 py-6 max-w-[1600px] w-full mx-auto">
          <Outlet />
        </main>
      </div>
      <ExecutiveReport />
    </div>
  );
}
