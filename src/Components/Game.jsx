import { PropTypes } from 'prop-types';

const Game = ({
  thumbnail, name, desc, genre,
}) => (

  <div className="cards">
    <div className="card">
      <img src={thumbnail} alt="game pictures" />
      <div className="card-body">
        {name.length > 27 ? (
          <h2>
            {name.substring(0, 27)}
            ...
          </h2>
        ) : (
          <h2>{name}</h2>
        )}
        {desc.length > 70 ? (
          <p>
            {desc.substring(0, 65)}
            ...
          </p>
        ) : (
          <p>{desc}</p>
        )}
        <h5>{genre}</h5>
      </div>
    </div>
  </div>
);

Game.propTypes = {
  thumbnail: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
};

export default Game;
