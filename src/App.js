import React from "react";

import { Filter } from "./components/filter";
import { UserList } from "./components/userList";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Filter></Filter>
        <UserList />
      </header>
    </div>
  );
}

export default App;
