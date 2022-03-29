import Head from 'next/head'
import Image from 'next/image'
import { useEffect } from 'react';
import { useStateContext } from '../components/HBOProvider'
import { useRouter } from 'next/router';
import MainLayout from '../components/Layouts/MainLayout'
import FeaturedMedia from '../components/UI/FeaturedMedia/FeaturedMedia';
import ForYouList from '../components/UI/ForYouList/ForYouList'
import JustAdded from '../components/UI/JustAdded/JustAdded'
import PosterView from '../components/UI/PosterView/PosterView'
import MediaRow from '../components/UI/MediaRow/MediaRow'
import AuthCheck from '../components/AuthCheck';


export default function Home() {
  const globalState = useStateContext()
  // console.log(globalState);

  const Router = useRouter()

  useEffect(() => {
    // const loggedIn = false;
    // if (loggedIn === false) {
    //   Router.push('/create')
    // }
  }, [])

  return AuthCheck(
    <MainLayout>
      <FeaturedMedia />
      <MediaRow />
      <ForYouList />
      <JustAdded />
      <PosterView />
    </MainLayout>
  )
}
