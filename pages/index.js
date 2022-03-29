import Head from 'next/head'
import Image from 'next/image'
import { useEffect } from 'react';
import { useStateContext } from '../components/HBOProvider'
import { useRouter } from 'next/router';
import MainLayout from '../components/Layouts/MainLayout'
import FeaturedMedia from '../components/UI/FeaturedMedia/FeaturedMedia';
import MediaRow from '../components/UI/MediaRow/MediaRow'
import AuthCheck from '../components/AuthCheck';
import LazyLoad from 'react-lazyload';



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
      <LazyLoad height={680} offset={-200} placeholder={<h1>Loading</h1>}>
        <MediaRow
          title="Movies"
          type='large-v'
          endpoint='discover/movie?sort_by=popularity.desc&primary_release_year=2022'
        />
      </LazyLoad>
      <LazyLoad height={333} offset={-200}>
        <MediaRow
          title="Series"
          type='small-h'
          endpoint='discover/tv?primary_release_year=2022'
        />
      </LazyLoad>
      <LazyLoad height={440} offset={-200}>
        <MediaRow
          title="Action"
          type='small-v'
          endpoint='discover/movie?with_genres=28&primary_release_year=2022'
        />
      </LazyLoad>
      <LazyLoad height={200}>
        <MediaRow
          title="Horror"
          type='large-h'
          endpoint='discover/movie?with_genres=27&primary_release_year=2022'
        />
      </LazyLoad>
      <LazyLoad height={200}>
        <MediaRow
          title="Animations"
          type='large-h'
          endpoint='discover/movie?with_genres=16&primary_release_year=2022'
        />
      </LazyLoad>
      <LazyLoad height={200}>
        <MediaRow
          title="Sci-fi"
          type='small-v'
          endpoint='discover/movie?with_genres=878&primary_release_year=2022'
        />
      </LazyLoad>
    </MainLayout>
  )
}
