import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const DataContext = createContext();

export const DataProvider = (props) => {
    const [menu, setMenu] = useState(false);

    const HiMenu = () => {
        setMenu(menu);
        console.log(menu);
    }

    return (
        <DataContext value={{ menu, setMenu, HiMenu}}>
            {props.children}
        </DataContext>
    )
}