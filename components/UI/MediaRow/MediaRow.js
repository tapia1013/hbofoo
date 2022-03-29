// check state if data has been loaded to activate skeleton
import { useEffect, useState } from 'react';
import axios from 'axios';

const MediaRow = (props) => {
  const [loadingData, setLoadingData] = useState(true);
  const [movies, setMoviesData] = useState([])

  useEffect(() => {
    axios
      .get('https://api.themoviedb.org/3/discover/movie?with_genres=28&primary_release_year=2022&api_key=c1b0e735ad3ff470f44fa29c9a1e6189')
      .then((response) => {
        setMoviesData(response.data.results)

        setLoadingData(false);

        // console.log('Successful Response For ' + props.title);
        // console.log(response);
      })
      .catch((error) => {
        console.log('Error Response For ' + props.title);
        console.log(error)
      })
  }, [])

  const loopComp = (comp, digit) => {
    let thumbnails = [];
    for (let index = 1; index <= digit; index++) {
      thumbnails.push(comp)
    }

    return thumbnails;
  }

  // for showing thumbnails logic... SIMULATE LOADING
  const showThumbnails = () => {
    // setTimeout(() => setLoadingData(false), 5000);

    return loadingData
      ? (loopComp((<Skeleton />), 10))
      : (movies.map((movie) => {
        return <Thumbnail movieData={movie} />
      }))
  }

  return (
    <div className={`media-row ${props.type}`}>
      <h3 className="media-row__title">{props.title}</h3>
      <div className="media-row__thumbnails">

        {showThumbnails()}

        {/* {loopComp(
          (<Thumbnail />), 10

        )} */}
      </div>
    </div>
  )
}


const Thumbnail = (props) => {
  console.log(props.movieData);
  return (
    <div className="media-row__thumbnail">
      <img src={`https://image.tmdb.org/t/p/original${props.movieData.poster_path}`} />
      <div className="media-row__top-layer">
        <i className="fas fa-play" />
      </div>
    </div>
  )
}



const Skeleton = () => {
  return (
    <div className="media-row__thumbnail-skeleton">
      <div className="media-row__thumbnail-skeleton-img"></div>
    </div>
  )
}


export default MediaRow;


/**
 * 
0: {id: 28, name: 'Action'}
1: {id: 12, name: 'Adventure'}
2: {id: 16, name: 'Animation'}
3: {id: 35, name: 'Comedy'}
4: {id: 80, name: 'Crime'}
5: {id: 99, name: 'Documentary'}
6: {id: 18, name: 'Drama'}
7: {id: 10751, name: 'Family'}
8: {id: 14, name: 'Fantasy'}
9: {id: 36, name: 'History'}
10: {id: 27, name: 'Horror'}
11: {id: 10402, name: 'Music'}
12: {id: 9648, name: 'Mystery'}
13: {id: 10749, name: 'Romance'}
14: {id: 878, name: 'Science Fiction'}
15: {id: 10770, name: 'TV Movie'}
16: {id: 53, name: 'Thriller'}
17: {id: 10752, name: 'War'}
18: {id: 37, name: 'Western'}
 * 
 */