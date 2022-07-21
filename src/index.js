import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Club from "./pages/Club";
import Event from "./pages/Event";
import Student from "./pages/Student";
import Competition from "./pages/Competition";
import Faq from "./pages/Faq";
import NoPage from "./pages/NoPage";
import React from "react";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="club" element={<Club />} />
          <Route path="event" element={<Event />} />
          <Route path="competition" element={<Competition />} />
          <Route path="student" element={<Student />} />
          <Route path="faq" element={<Faq />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);