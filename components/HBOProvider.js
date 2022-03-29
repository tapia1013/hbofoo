import React, { useContext, useState, createContext } from "react";

export const StateContext = createContext();

export function useStateContext() {
  return useContext(StateContext)
}

export function HBOProvider({ children }) {
  const [user, setUser] = useState('');

  const defaultUserImg = 'https://www.dogbreedslist.info/uploads/dog-pictures/maltese-1.jpg';

  const createUserAction = (e) => {
    setUser(e.target.value)
    console.log(user);
  };

  const [sideNavOpen, setSideNavOpenAction] = useState(false);
  const [accountModalOpen, setAccountModalOpenAction] = useState(false);
  const [searchOpen, setSearchOpenAction] = useState(false)


  return (
    <StateContext.Provider value={{
      user,
      createUserAction,
      defaultUserImg,
      sideNavOpen,
      setSideNavOpenAction,
      accountModalOpen,
      setAccountModalOpenAction,
      searchOpen,
      setSearchOpenAction,
    }}>
      {children}
    </StateContext.Provider>
  )
}
