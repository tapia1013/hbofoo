import Head from 'next/head'
import Image from 'next/image'
import { useEffect } from 'react';
import { useStateContext } from '../../components/HBOProvider'
import { useRouter } from 'next/router';
import MainLayout from '../../components/Layouts/MainLayout'
import FeaturedMedia from '../../components/UI/FeaturedMedia/FeaturedMedia';
import MediaRow from '../../components/UI/MediaRow/MediaRow'
import AuthCheck from '../../components/AuthCheck';
import LazyLoad from 'react-lazyload';
import Placeholder from '../../components/UI/Placeholder/Placeholder';
import GenreNav from '../../components/UI/GenreNav/GenreNav';



export default function Home() {
  const globalState = useStateContext()
  // console.log(globalState);

  const Router = useRouter()


  return AuthCheck(
    <MainLayout>
      {/* <FeaturedMedia
        mediaUrl="https://www.youtube.com/embed/NYH2sLid0Zc?autoplay=1&loop=1&start=16"
        title='Mortal Kombat'
        location='In theaters and on HBO MAX. Streaming throughout May 23.'
        linkUrl='/movie/460465'
        type='front'
      /> */}
      <GenreNav />
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

    </MainLayout>
  )
}
