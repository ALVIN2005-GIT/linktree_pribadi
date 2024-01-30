// import { useState } from 'react'
// IMPORT THE FILE COMPONENTS
import Profile from "./components/molecules/profile/profile";
import Links from "./components/molecules/link/links";
import "./App.css";

// RENDER IT ALL FROM HERE
function App() {
  return (
    <main className="min-h-screen bg-gradient-to-t from-indigo-950 via-blue-700 to-cyan-700 flex justify-center items-center">
      <section className="px-[1.5rem] md:min-w-[70%] md:h-[50rem] lg:min-w-[30%] lg:min-h-[70%]  bg-sky-600 flex justify-center items-center rounded-xl  ">
        <div className=" lg:min-w-[85%] md:min-w-[85%]">
          <Profile />
          <Links />
        </div>
      </section>
    </main>
  );
}

// EXPORT THE MAIN COMPONENT
export default App;
