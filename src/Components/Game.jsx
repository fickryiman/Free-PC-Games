import { PropTypes } from 'prop-types';

const Game = ({
  thumbnail,
  name,
  desc,
  url,
  genre,
  publisher,
  developer,
  release,
}) => (
  <div className="game-card flex">
    <img src={thumbnail} alt="game brand" />
    <div className="game-details">
      <p className="game-name">{name}</p>
      <p className="game-description">{desc}</p>
      <p className="game-url">{url}</p>
      <p className="game-url">{genre}</p>
      <p className="game-url">{publisher}</p>
      <p className="game-url">{developer}</p>
      <p className="game-url">{release}</p>
    </div>
  </div>
);

Game.propTypes = {
  thumbnail: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  publisher: PropTypes.string.isRequired,
  developer: PropTypes.string.isRequired,
  release: PropTypes.string.isRequired,
};

export default Game;
