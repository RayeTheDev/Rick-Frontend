import { createContext, useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { client } from "../../client/Instance";

export const DataContext = createContext();

export const DataProvider = (props) => {
  const [menu, setMenu] = useState(true);
  const [data, setData] = useState()
  const [headerTheme, setHeaderTheme] = useState()
  const [none, setNone] = useState(false)
  const [bg, setBg] = useState(false);
  const [user, setUser] = useState()
  const Navigate = useNavigate()

  const location = useLocation()


  function setFix() {
    console.log(menu)
    if (!menu) {
      if (window.scrollY <= 0) {
        if (location.pathname.slice(0, 5) == "/news") {

          setHeaderTheme('black')
        } else {
          setHeaderTheme('white')
        }

        setBg(false);
      } else {
        setHeaderTheme('black')
        setBg(true);
      }
    }

  }
  window.addEventListener("scroll", setFix);

  useEffect(() => {
    if (localStorage.USER_TOKEN) {
      client.get("/user/" + localStorage.USER_TOKEN)
        .then((res) => {
          setUser(res.data)
          console.log(res.data)
        })
        .catch((err) => {
          console.log(err)
        })
    }

  }, [localStorage.USER_TOKEN])

  const signOut = () => {
    setUser(null)
    localStorage.removeItem("USER_TOKEN")
    Navigate('/')
  }
  useEffect(() => {
    client
      .get("/articles")
      .then((res) => {
        const arr = [...res.data]
        const arr2 = []
        for (let i = arr.length - 1; i >= 0; i--) {
          arr2.push(arr[i])
        }
        setData(arr2);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log(data)

  useEffect(() => {
    if (location.pathname.slice(0, 5) == "/news") {
      setHeaderTheme('black')
    } else {
      setHeaderTheme('white')
    }

    if (location.pathname == '/create' || location.pathname == "/login" || location.pathname == "/Signup") {
      setNone(true)
    } else {
      setNone(false)
    }
  }, [location])

  const HiMenu = () => {
    setMenu(menu);
    console.log(menu);
  }

  return (
    <DataContext.Provider value={{ menu, user, signOut, setMenu, HiMenu, data, headerTheme, bg, none, setNone }}>
      {props.children}
    </DataContext.Provider>
  )
}