import React, { useState } from "react";
import Navbar from "./Navbar/Navbar.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Page from "./Navbar/Page.js";
const data = [
  {
    id: "1",
    name: "shoes",
    gender: "male",
    image:
      "https://images.pexels.com/photos/2562992/pexels-photo-2562992.png?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: "2",
    name: "female shoes",
    gender: "female",
    image:
      "https://images.pexels.com/photos/15788681/pexels-photo-15788681/free-photo-of-pointe-shoes-on-floor.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: "3",
    name: "Lofar",
    gender: "male",
    image:
      "https://media.istockphoto.com/id/654112370/photo/brown-shoes-isolated-on-white-background.jpg?b=1&s=612x612&w=0&k=20&c=E0y-Oe4_06HKKFaYR4ZKxmsm-orIYWtg3NR1kdgGF8s=",
  },
  {
    id: "4",
    name: "womensliper",
    gender: "female",
    image:
      "https://media.istockphoto.com/id/1131576249/photo/women-shopping-for-footwear-at-street-market.jpg?b=1&s=612x612&w=0&k=20&c=AjiN5wCcPFbgRno8S4qaYLhYPPHy_FOsAQYAUDvE9pY=",
  },
  {
    id: "5",
    name: "kid shoes",
    gender: "female",
    image:
      "https://images.pexels.com/photos/10508388/pexels-photo-10508388.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: "6",
    name: "kid shoes",
    gender: "male",
    image:
      "https://images.pexels.com/photos/3074920/pexels-photo-3074920.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
];
const App = () => {
  const [show, setshow] = useState(false);
  const handleclick = () => {
    setshow(!show);
  };
  return (
    <BrowserRouter>
      <Navbar handleclick={handleclick} show={show} />
      <Routes>
        <Route path="/" element={<Page data={data}/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
