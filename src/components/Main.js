import React from "react";

import Message from "./Message";
import Map from "./Map";
import Sidebar from "./Sidebar";

const Main = () => {
  return (
    <main className="main">
      <aside className="main__sidebar main__sidebar_card">
        <Sidebar />
      </aside>
      <article className="main__content">
        <Message />
        <Map />
      </article>
    </main>
  );
}

export default Main;