import { Signup, Login, Home, News, Comment, Footer} from "./component"
import { Routes, BrowserRouter, Route } from "react-router-dom";
import { Confirmation } from "./component/Confirmation";
function App(){
    return(
       <div className="App">
         <BrowserRouter>
          <div>
            <section>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/news" element={<News />} />
                <Route path="/comment" element={<Comment />} />
                <Route path="/confirmation" element={<Confirmation />} />
              </Routes>
            </section>
          </div>
        </BrowserRouter> 
        
       
      </div>
    )
}
export default App;