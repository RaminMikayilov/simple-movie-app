import React from "react";

//import components
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";

import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

// react router
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route index element={<Home />} />
      <Route path="/favorites" element={<Favorites />} />
      {/* <Route path="/movies/:id" element={<SingleMovie />} /> */}
      {/* <Route path="*" element={<Error />} /> */}
    </Route>
  )
);

const App = () => {
  return (
    <div className="bg-cBlue min-h-screen">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
