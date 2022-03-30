import Head from 'next/head'
import { useEffect, useState } from 'react';
import MainLayout from "../../components/Layouts/MainLayout";
import CastInfo from '../../components/UI/CastInfo/CastInfo';
import MediaRow from "../../components/UI/MediaRow/MediaRow";
import FeaturedMedia from "../../components/UI/FeaturedMedia/FeaturedMedia";
import AuthCheck from '../../components/AuthCheck';
import { useRouter } from 'next/router';
import axios from 'axios';
import Placeholder from '../../components/UI/Placeholder/Placeholder';
import LazyLoad from 'react-lazyload';



export default function SingleMediaPage(props) {
  const router = useRouter();
  const [mediaData, setMediaData] = useState(false)
  // for getting params in url
  // const { id } = router.query

  console.log(props);

  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/movie/${props.query.id}?api_key=c1b0e735ad3ff470f44fa29c9a1e6189`)
      .then((response) => {
        console.log(response);
        setMediaData(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  return AuthCheck(
    <MainLayout>
      <FeaturedMedia
        title={mediaData.title}
        mediaUrl={`https://image.tmdb.org/t/p/w1280${mediaData.backdrop_path}`}
        location='In theaters and on HBO MAX. Streaming throughout May 23.'
        linkUrl='/movies/id'
        type='single'
      />
      <LazyLoad
        offset={-400}
        placeholder={
          <Placeholder type='small-v' title="Movies" />
        }
      >
        <MediaRow
          title="Similar To This"
          type='small-v'
          endpoint={`movie/${props.query.id}/similar?`}
        />
      </LazyLoad>
      <CastInfo />
    </MainLayout>
  )
}

export async function getServerSideProps(context) {
  return {
    props: { query: context.query }
  }
}