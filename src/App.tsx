import React from "react";

import { Header, Sidebar } from './layouts';

export default function App() {
  return (
    <>
      <Header />
      <div className="h-screen flex flex-row flex-wrap">
        <Sidebar />
        <div className="bg-gray-100 flex-1 p-6 md:mt-16">content here</div>
      </div>
    </>
  );
}
