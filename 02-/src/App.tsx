import React from 'react';

import { RouterProvider } from 'react-router-dom';
import { Routes } from './components/router/Routes';
 
function App() {
  return (
    <RouterProvider router={Routes} />
  );
}

export default App;
