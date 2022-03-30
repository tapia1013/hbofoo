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
import axios from 'axios';
import { shuffleArray } from '../../components/utilities';



export default function MediaTypePage(props) {
  const globalState = useStateContext()
  // console.log(globalState);

  const Router = useRouter()


  return AuthCheck(
    <MainLayout>
      <FeaturedMedia
        mediaUrl={`https://image.tmdb.org/t/p/w1280${props.featuredData.backdrop_path}`}
        title={props.query.mediaType === 'movie' ? props.featuredData.title : props.featuredData.name}
        linkUrl={`/${props.query.mediaType}/${props.featuredData.id}`}
        type='single'
      />
      <GenreNav mediaType={props.query.mediaType} genresData={props.genresData} />
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


// GETS SOME TYPE OF DATA BEFORE THE PAGE LOADS THEN WE CAN PASS IN THAT DATA TO THE PROPS OF THIS PAGE
export async function getServerSideProps(context) {
  let genresData;
  let featuredData;

  try {
    genresData = await axios.get(`https://api.themoviedb.org/3/genre/${context.query.mediaType}/list?api_key=c1b0e735ad3ff470f44fa29c9a1e6189`);

    featuredData = await axios.get(`https://api.themoviedb.org/3/discover/${context.query.mediaType}?primary_release_year=2022&api_key=c1b0e735ad3ff470f44fa29c9a1e6189`)


  } catch (error) {
    console.log(error);
  }

  return {
    props: {
      genresData: genresData.data.genres,
      featuredData: shuffleArray(featuredData.data.results)[0],
      query: context.query
    }
  }
}