import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

const Routing = () => {

  return (
    <Routes>
      <Route path="/" />
      <Route path="/tax-deductions" />
    </Routes>
  );
};

export default Routing;
