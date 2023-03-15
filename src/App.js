// import { Footer } from "@mantine/core";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Carousell } from "./controllers/Carousel";
import { Confirmation } from "./controllers/Confirmation";
import { DataProvider } from "./controllers/context/Data.Provider";
import { Editor } from "./controllers/editor";
import { Header } from "./controllers/Header";
import { Footer } from './controllers/Footer'
import { Home } from "./controllers/Home";
import { Login } from "./controllers/Login";
import { Menu } from "./controllers/Menu";
import { News } from "./controllers/News";
import { Signup } from "./controllers/Signup";

function App() {
  return (
    <BrowserRouter>
      <DataProvider>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/confirmation" element={<Confirmation />} />
          <Route path="/create" element={<Editor />} />
          <Route path="/news">
            <Route path=":id" element={<News />}></Route>
          </Route>
        </Routes>

      </DataProvider>
    </BrowserRouter>
  );
}

export default App;