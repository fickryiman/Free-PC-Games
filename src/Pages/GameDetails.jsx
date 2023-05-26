import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import DOMPurify from 'dompurify';

import LoadingSpinner from '../Components/Loader';
import { fetchGameDetails } from '../Redux/GameDetails/details';

const Details = () => {
  const dispatch = useDispatch();
  const { gameId } = useParams();
  const { gameDetails, loading } = useSelector((state) => state.details);

  useEffect(() => {
    dispatch(fetchGameDetails(gameId));
  }, []);

  return (
    <div className="details-container limit">
      {loading ? (
        <LoadingSpinner />
      ) : (
        <div className="header-game">
          {/* <h1 className="details-header">{` ${gameDetails.title.toUpperCase()}`}</h1> */}
          <img
            className="details-image"
            src={gameDetails.thumbnail}
            alt="games thumbnail"
          />
          <div className="screenshots">
            <img
              className="screenshots-image"
              src={gameDetails.screenshots[0].image}
              alt="game screenshot 1"
            />
            <img
              className="screenshots-image"
              src={gameDetails.screenshots[1].image}
              alt="game screenshot 2"
            />
            <img
              className="screenshots-image"
              src={gameDetails.screenshots[2].image}
              alt="game screenshot 3"
            />
          </div>
          <h2
            className="details-description"
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(gameDetails.short_description),
            }}
          />
          <div className="details-container">
            <ul className="details-list">
              <li className="details-list-item">
                <h3>Game Name :</h3>
                <h2>{`${gameDetails.title}`}</h2>
              </li>
              <li className="details-list-item">
                <h3>Game Genre :</h3>
                <h2>{`${gameDetails.genre}`}</h2>
              </li>
              <li className="details-list-item">
                <h3>Game Publisher :</h3>
                <h2>{`${gameDetails.publisher}`}</h2>
              </li>
              <li className="details-list-item">
                <h3>Game Developer :</h3>
                <h2>{`${gameDetails.developer}`}</h2>
              </li>
              <li className="details-list-item">
                <h3>Game Release Date :</h3>
                <h2>{`${gameDetails.release_date}`}</h2>
              </li>
              <li className="details-list-item">
                <h3>Game Official Website :</h3>
                <h2>{`${gameDetails.game_url}`}</h2>
              </li>
            </ul>
            <br />
            <br />
            <br />
            <br />
          </div>
        </div>
      )}
    </div>
  );
};

export default Details;
