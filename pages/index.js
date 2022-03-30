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
import Placeholder from '../components/UI/Placeholder/Placeholder';



export default function Home() {
  const globalState = useStateContext()
  // console.log(globalState);

  const Router = useRouter()

  // useEffect(() => {
  //   // const loggedIn = false;
  //   // if (loggedIn === false) {
  //   //   Router.push('/create')
  //   // }
  // }, [])

  return AuthCheck(
    <MainLayout>
      <FeaturedMedia
        mediaUrl="https://www.youtube.com/embed/NYH2sLid0Zc?autoplay=1&loop=1&start=16"
        title='Mortal Kombat'
        location='In theaters and on HBO MAX. Streaming throughout May 23.'
        linkUrl='/movies/id'
        type='front'
      />
      <LazyLoad
        offset={-400}
        placeholder={
          <Placeholder type='large-v' title="Movies" />
        }
      >
        <MediaRow
          title="Movies"
          type='large-v'
          endpoint='discover/movie?sort_by=popularity.desc&primary_release_year=2022'
        />
      </LazyLoad>
      <LazyLoad
        offset={-400}
        placeholder={
          <Placeholder type='small-h' title="Series" />
        }
      >
        <MediaRow
          title="Series"
          type='small-h'
          endpoint='discover/tv?primary_release_year=2022'
        />
      </LazyLoad>
      <LazyLoad
        offset={-400}
        placeholder={
          <Placeholder type='small-v' title="Action" />
        }
      >
        <MediaRow
          title="Action"
          type='small-v'
          endpoint='discover/movie?with_genres=28&primary_release_year=2022'
        />
      </LazyLoad>
      <LazyLoad
        offset={-400}
        placeholder={
          <Placeholder type='large-h' title="Horror" />
        }
      >
        <MediaRow
          title="Horror"
          type='large-h'
          endpoint='discover/movie?with_genres=27&primary_release_year=2022'
        />
      </LazyLoad>
      <LazyLoad
        offset={-400}
        placeholder={
          <Placeholder type='large-h' title="Animations" />
        }
      >
        <MediaRow
          title="Animations"
          type='large-h'
          endpoint='discover/movie?with_genres=16&primary_release_year=2022'
        />
      </LazyLoad>
      <LazyLoad
        offset={-400}
        placeholder={
          <Placeholder type='small-v' title="Sci-fi" />
        }
      >
        <MediaRow
          title="Sci-fi"
          type='small-v'
          endpoint='discover/movie?with_genres=878&primary_release_year=2022'
        />
      </LazyLoad>
    </MainLayout>
  )
}
