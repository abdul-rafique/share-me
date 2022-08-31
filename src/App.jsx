import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Layout from "./Layout";
import NewsFeed from "./Routes/NewsFeed";

function App() {
  const isUser = true;
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route
            index
            element={isUser ? <NewsFeed /> : <Navigate to="/login" />}
          />
          <Route path="user" element={<h1>user</h1>} />
        </Route>

        <Route path="/login" element={<h1>Login</h1>} />
        <Route path="/signup" element={<h1>Login</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
