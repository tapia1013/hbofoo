import React, { useContext, useState, createContext } from "react";
import ls from 'local-storage';


export const StateContext = createContext();

export function useStateContext() {
  return useContext(StateContext)
}


export function HBOProvider({ children }) {
  const [user, setUser] = useState('');

  const defaultUserImg = 'https://www.dogbreedslist.info/uploads/dog-pictures/maltese-1.jpg';

  const createUserAction = (e) => {
    setUser(e.target.value)
    // console.log(user);
  };

  const [sideNavOpen, setSideNavOpenAction] = useState(false);
  const [accountModalOpen, setAccountModalOpenAction] = useState(false);
  const [searchOpen, setSearchOpenAction] = useState(false);
  const [watchList, setWatchList] = useState(ls.get('myList'))


  // function to add to myList
  const addToList = (video) => {
    let myList;

    // If not empty then there's something in LS
    if (ls('myList') !== null) {
      // get whatever is in the LS and set to myList
      myList = ls.get('myList')

      // Push the video param into myList
      myList.push(video)

      // Set pushed myList to LS 'myList' to save
      ls.set('myList', myList)

      // Set state to myList
      setWatchList(myList)
    } else {
      ls.set('myList', [video])
    }
  }



  // Remove from myList
  const removeFromList = (videoId) => {
    let myList = ls.get('myList')

    myList = myList.filter((item) => item.mediaId !== videoId)

    ls.set('myList', myList)

    setWatchList(myList)
  }



  const thumbTypes = ['large-v', 'small-v', 'large-h', 'small-h']


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
      thumbTypes,
      removeFromList,
      addToList,
      watchList
    }}>
      {children}
    </StateContext.Provider>
  )
}
