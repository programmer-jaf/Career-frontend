import React from 'react'
import {Route, Routes} from "react-router-dom";
import PublicRoute from "./routes/PublicRoute.jsx";
import {MainLayout} from "./layout/MainLayout.jsx";

const App = () => {
  return (
      <Routes>
        <Route path="/" element={<MainLayout />}>
      {/*  Public Routes*/}
        {
          PublicRoute.map((route, index) => (
              <Route path={route.path} key={index} element={route.element}/>
          ))
        }
      {/*  Private Routes*/}
        </Route>
      </Routes>
  )
}

export default App