import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uniqueId } from 'uuid';
import { useNavigate } from 'react-router-dom';

import LoadingSpinner from '../Components/Loader';
import { fetchGames } from '../Redux/Games/games';
import Game from '../Components/Game';

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { gamesArray, loading } = useSelector((state) => state.games);
  const [searchGame, setSearchGame] = useState('');
  const fetchState = useRef(true);

  useEffect(() => {
    if (fetchState.current) {
      fetchState.current = false;
      dispatch(fetchGames());
    }
  }, []);

  const handleClick = (game) => {
    if (game.id !== undefined) {
      navigate(`details/${game.id}`);
    }
  };

  // filter games array and return different results when a match is found or not
  const filteredGames = gamesArray.filter((game) => {
    if (searchGame === '') {
      return game;
    }
    if (game.title.toLowerCase().includes(searchGame.toLocaleLowerCase())) {
      return game;
    }
    return null;
  });

  // check the search game and return different games depending on it
  const checkQuery = () => {
    if (filteredGames.length === 0) {
      return (
        <div className="error-message">
          <p>No Games found...</p>
        </div>
      );
    }

    return filteredGames.map((game) => (
      <div
        key={uniqueId()}
        aria-hidden="true"
        onClick={() => handleClick(game)}
        className="card-container "
      >
        <Game
          id={game.id}
          thumbnail={game.thumbnail}
          name={game.title}
          desc={game.short_description}
          genre={game.genre}
        />
      </div>
    ));
  };

  return (
    <div className="home-container">
      {loading ? (
        <LoadingSpinner />
      ) : (
        <>
          <div className="search-container">
            <input
              type="text"
              onChange={(e) => setSearchGame(e.target.value)}
              placeholder="search your games..."
              className="search-input"
              value={searchGame}
            />
          </div>
          <div className="games-container flex limit">{checkQuery()}</div>
        </>
      )}
    </div>
  );
};

export default Home;
