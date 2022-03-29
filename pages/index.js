import Head from 'next/head'
import Image from 'next/image'
import { useEffect } from 'react';
import { useStateContext } from '../components/HBOProvider'
import { useRouter } from 'next/router';
import MainLayout from '../components/Layouts/MainLayout'
import FeaturedMedia from '../components/UI/FeaturedMedia/FeaturedMedia';
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
      <MediaRow
        title="Movies"
        type='large-v'
        endpoint='api/movies/234'
      />
      <MediaRow
        title="Series"
        type='small-h'
        endpoint='api/movies/234'
      />
      <MediaRow
        title="Action"
        type='small-v'
        endpoint='api/movies/234'
      />
      <MediaRow
        title="Horror"
        type='large-h'
        endpoint='api/movies/234'
      />
      <MediaRow
        title="Animations"
        type='large-h'
        endpoint='api/movies/234'
      />
      <MediaRow
        title="Sci-fi"
        type='small-v'
        endpoint='api/movies/234'
      />
    </MainLayout>
  )
}
