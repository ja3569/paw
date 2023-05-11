import { Link } from 'react-router-dom';

const Navbar = ({ user, signOut }) => {
  return (
    <header>
      <div className="header-container">
        <nav className="navbar">
          <ul>
            <li><Link to="/">About</Link></li>
            <li><Link to="/articles">Articles</Link></li>
            <li><Link to="/request">Request</Link></li>
            <li><Link to="/adopt">Adopt</Link></li>
            <li><Link to="/livechat">Livechat</Link></li>
          </ul>
        </nav>
        {user && (
          <div>
            <h1>{user.username}</h1>
            <button onClick={signOut}>Sign out</button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
