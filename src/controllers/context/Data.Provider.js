import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const DataContext = createContext();

export const DataProvider = (props) => {
  const [menu, setMenu] = useState(true);

  const HiMenu = () => {
    setMenu(menu);
    console.log(menu);
  };

  return (
    <DataContext.Provider value={{ menu, setMenu, HiMenu }}>
      {props.children}
    </DataContext.Provider>
  );
};
