import Head from 'next/head'
import Image from 'next/image'
import { useEffect } from 'react';
import { useStateContext } from '../components/HBOProvider'
import Login from '../components/UI/LogIn/Login'
import { useRouter } from 'next/router';

export default function Home() {
  const globalState = useStateContext()
  // console.log(globalState);

  const Router = useRouter()

  useEffect(() => {
    const loggedIn = false;
    if (loggedIn === false) {
      Router.push('/create')
    }
  }, [])

  return (
    <div>
      <Login />
    </div>
  )
}
