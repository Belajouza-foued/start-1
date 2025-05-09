import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import ReactDOM from 'react-dom/client';
import Navbar from "./composants/navbar/Navbar";

 function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Navbar/>}>
     

  </Route>
    </Routes>
    </BrowserRouter>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>)