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


  return AuthCheck(
    <MainLayout>
      <FeaturedMedia
        title={props.query.mediaType === 'movie' ? props.mediaData.title : props.mediaData.name}
        mediaUrl={`https://image.tmdb.org/t/p/w1280${props.mediaData.backdrop_path}`}
        location='In theaters and on HBO MAX. Streaming throughout May 23.'
        linkUrl='/movies/id'
        type='single'
        mediaType={props.query.mediaType}
        mediaId={props.query.id}
      />
      <LazyLoad
        offset={-400}
        placeholder={
          <Placeholder type='small-v' title="Movies" />
        }
      >
        <MediaRow
          updateData={props.query.id}
          title="Similar To This"
          type='small-v'
          mediaType={props.query.mediaType}
          endpoint={`${props.query.mediaType === 'movie' ? 'movie' : 'tv'}/${props.query.id}/similar?`}
        />
      </LazyLoad>
      <CastInfo mediaID={props.query.id} mediaType={props.query.mediaType} updateData={props.query.id} />
    </MainLayout>
  )
}



export async function getServerSideProps(context) {
  let mediaData;

  try {
    mediaData = await axios.get(`https://api.themoviedb.org/3/${context.query.mediaType}/${context.query.id}?api_key=c1b0e735ad3ff470f44fa29c9a1e6189`)
  } catch (error) {
    console.log(error);
  }

  return {
    props: {
      mediaData: mediaData.data,
      query: context.query
    }
  }
}