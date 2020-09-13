import React from "react";

import { FilterUser } from "./components/filterUser";
import { FilterGroup } from "./components/filterGroup";
import { UserList } from "./components/userList";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="row">
          <FilterUser />
          <FilterGroup />
        </div>
        <div className="row">
          <UserList />
          <UserList />
        </div>
      </header>
    </div>
  );
}

export default App;
