import React from 'react';
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import UserDetails from './UserDetails';
import Users from './Users';
import About from './About';

const Demo = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/users" element={<Users />}>
            {/* Nested routes for UserDetails */}
            <Route path=":id" element={<UserDetails />} />
          </Route>
          {/* Route for About */}
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
      {/* Link to navigate to Users */}
      <Link className="button" to="/users">Users</Link>
    </>
  );
};

export default Demo;
