import { Signup, Login, Home, Footer, Comment} from "./component"
import { Routes, BrowserRouter, Route } from "react-router-dom";
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
                <Route path="/comment" element={<Comment />} />
              </Routes>
            </section>
          </div>
        </BrowserRouter> 
        
       
      </div>
    )
}
export default App;