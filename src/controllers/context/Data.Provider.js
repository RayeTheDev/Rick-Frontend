import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { client } from "../../client/Instance";

export const DataContext = createContext();

export const DataProvider = (props) => {
    const [menu, setMenu] = useState(true);
    const [data, setData] = useState(null)
    useEffect(() => {
        client
          .get("/articles")
          .then((res) => {
            const arr=[...res.data]
            const arr2=[]
            for(let i=arr.length-1;i>=0;i--){
              arr2.push(arr[i])
    
            }
            setData(arr2);
          })
          .catch((err) => {
            console.log(err);
          });
      }, []);
    

    const HiMenu = () => {
        setMenu(menu);
        console.log(menu);
    }

    return (
        <DataContext.Provider value={{ menu, setMenu, HiMenu, data}}>
            {props.children}
        </DataContext.Provider>
    )
}