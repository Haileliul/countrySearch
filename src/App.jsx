import React from "react";
import "./App.css";
import Com from "./components";

function App() {
  return (
    <div className="bg-Back_LightGray min-h-screen text-Text_DarkGray  py-8">
      <header className="fixed top-0 left-0 w-full z-10">
        <Com.header />
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col w-[100%]  ">
        <Com.landing />

        <Com.search />
      </main>
    </div>
  );
}

export default App;
