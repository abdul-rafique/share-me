import React from "react";
import Navbar from "./Components/Navbar";

import Container from "./Components/Container";
import { Outlet } from "react-router-dom";

function Layout({ isUser }) {
  return (
    <div>
      <Navbar isUser={isUser} />
      <Container>
        <Outlet />
      </Container>
    </div>
  );
}

export default Layout;
