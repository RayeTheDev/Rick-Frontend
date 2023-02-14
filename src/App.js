import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { DataProvider } from "./controllers/context/Data.Provider";
import { Header } from "./controllers/Header";
import { Home } from "./controllers/Home";
import { Menu } from "./controllers/Menu";
import { useEffect } from "react";

function App() {
  return (
    <BrowserRouter>
      {/* <DataProvider> */}
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
        </Routes>
      {/* </DataProvider> */}
    </BrowserRouter>
  );
}

export default App;
