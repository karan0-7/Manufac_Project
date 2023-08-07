import React from 'react';
import ReactDOM from 'react-dom/client';

import Tables from './Tables';
import { createBrowserRouter, Route, RouterProvider, createRoutesFromElements } from 'react-router-dom';


const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Tables />} >
      
  </Route>
))

function App() {
  return (
    <RouterProvider router={router} />
  )
}



ReactDOM.createRoot(document.getElementById("root")).render(<App />)


