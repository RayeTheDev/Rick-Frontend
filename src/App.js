import { Signup, Login, Home, News, Comment} from "./component"
import { Routes, BrowserRouter, Route } from "react-router-dom";
import { Confirmation } from "./component/Confirmation";
import { Carousell } from "./component/Carousel";
function App(){
    return(
       <div className="App">
         <BrowserRouter>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/carousel" element={<Carousell />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/news"  >
                <Route path=":id"element={<News />}></Route>
                </Route>
                <Route path="/comment" element={<Comment />} />
                <Route path="/confirmation" element={<Confirmation />} />
              </Routes>
        </BrowserRouter> 
        
       
      </div>
    )
}
export default App;