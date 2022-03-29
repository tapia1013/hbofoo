import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import ls from 'local-storage';
import { useMounted } from './Hooks/useMounted';

// Takes another component as an argument
const AuthCheck = (component) => {
  // check to see if user is loggedin
  // const [userLoggedIn, setUserLoggedIn] = useState(false);
  const router = useRouter();
  const { hasMounted } = useMounted();
  let activeUID = ls('activeUID');
  let users = ls('users') !== null ? ls('users') : []

  useEffect(() => {
    // if (users.length >= 1) {
    //   router.push('/login')
    // }
    if (activeUID === null && users.length < 1) {
      router.push('/create')
    }
  }, [])

  if (users.length >= 1 && activeUID !== null) {
    return hasMounted ? (component) : (
      <div className='create-user'>
        <div className='create-user__top'>
          <div className='create-user__logo'></div>
        </div>
      </div>
    )
  } else {
    return (
      <div className='create-user'>
        <div className='create-user__top'>
          <div className='create-user__logo'></div>
        </div>
      </div>
    )
  }

  return component
};

export default AuthCheck;