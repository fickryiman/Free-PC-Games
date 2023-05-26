import { CiSettings } from 'react-icons/ci';
import { IoChevronBackSharp } from 'react-icons/io5';
import { useNavigate, Link } from 'react-router-dom';
import icon from '../assets/icon.png';

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className="header limit">
      <div
        className="back-arrow header-icon"
        onClick={() => navigate('/')}
        aria-hidden="true"
      >
        <IoChevronBackSharp />
      </div>
      <h6 className="more-header-text">
        <Link className="logo flex" to="/aboutme">
          About Me
        </Link>
      </h6>
      <p className="header-text">
        <Link className="logo flex" to="/">
          <img src={`${icon}`} alt="application logo" />
          &nbsp;&nbsp;Free-To-Play Games PC
        </Link>
      </p>
      <h6 className="more-header-text">
        <Link className="logo flex" to="/references">
          References
        </Link>
      </h6>
      <p className="setting-icon header-icon">
        <CiSettings />
      </p>
    </div>
  );
};

export default Navbar;
