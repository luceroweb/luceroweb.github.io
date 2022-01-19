import { Link } from 'react-router-dom';

const Nav = ({ currentPage, setCurrentPage}) => {

  const classList = (pageName) => {
    return currentPage === pageName
      ? 'nav-link active'
      : 'nav-link';
  }

  return(
    <nav className="navbar navbar-expand-lg navbar-dark bg-success flex-wrap h-100 align-content-start">
      <div className="container-fluid">
        <Link
          className="navbar-brand text-light p-lg-2"
          to={"/"}
          onClick={() => setCurrentPage('Profile')}
        >
          <span className="fs-3">Juan Lucero</span><br />
          <small>Web By Juan AKA Webby Juan</small>
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainMenu" aria-controls="mainMenu" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse mt-lg-5" id="mainMenu">
          <ul className="navbar-nav flex-column border-light border-top w-100">
            <li className="nav-item border-light border-bottom">
              <Link
                className={classList('Profile')}
                to={"/"}
                onClick={() => setCurrentPage('Profile')}
              >
                Profile
              </Link>
            </li>
            <li className="nav-item border-light border-bottom">
              <Link className={classList('Career')} to={"/career-development"} onClick={() => setCurrentPage('Career')}>Career Development</Link>
            </li>
            <li className="nav-item border-light border-bottom">
              <Link className={classList('Portfolio')} to={"/portfolio"} onClick={() => setCurrentPage('Portfolio')}>Portfolio</Link>
            </li>
            <li className="nav-item border-light border-bottom">
              <Link className={classList('Proficiencies')} to={"/proficiencies"} onClick={() => setCurrentPage('Proficiencies')}>Proficiencies</Link>
            </li>
            <li className="nav-item border-light border-bottom">
              <Link className={classList('Education')} to={"/education"} onClick={() => setCurrentPage('Education')}>Education</Link>
            </li>
            <li className="nav-item border-light border-bottom">
              <Link className={classList('Contact')} to={"/contact"} onClick={() => setCurrentPage('Contact')}>Contact Juan</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Nav;