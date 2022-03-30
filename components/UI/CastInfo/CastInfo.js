import { useState, useEffect } from 'react';
import axios from 'axios';

const CastInfo = (props) => {
  const [loadingData, setLoadingData] = useState(true);
  const [credits, setCredits] = useState([])

  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/movie/${props.mediaID}/credits?api_key=c1b0e735ad3ff470f44fa29c9a1e6189`)
      .then((response) => {
        setCredits(response.data)
        setLoadingData(false);
      })
      .catch((error) => {
        console.log('Error Response For cast and crew');
        console.log(error)
      })
  }, []);


  const showCast = () => {
    if (loadingData !== true) {
      return credits.cast.map((item) => (
        <ul className='cast-info__crew'>
          <li>
            {item.character}
          </li>
          <li>
            {item.name}
          </li>
        </ul>
      ))
    } else {
      return (<div className=''>Loading Cast</div>)
    }
  }


  const showCrew = () => {
    if (loadingData !== true) {
      return credits.crew.map((item) => (
        <ul className='cast-info__crew'>
          <li>
            {item.job}
          </li>
          <li>
            {item.name}
          </li>
        </ul>
      ))
    } else {
      return (<div className=''>Loading Crew</div>)
    }

  }



  return (
    <div className="cast-info">
      <div className="cast-info__group-title">
        Cast
      </div>
      <div className="cast-info__list">
        {showCast()}
      </div>
      <div className="cast-info__group-title">
        Crew
      </div>
      <div className="cast-info__list">
        {showCrew()}
      </div>
    </div>
  )
}

export default CastInfo;