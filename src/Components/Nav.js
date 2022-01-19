import { Link } from 'react-router-dom';

const Nav = ({ currentPage, setCurrentPage }) => {

  return(
    <nav className="navbar navbar-expand-lg navbar-dark bg-success flex-wrap h-100 align-content-start">
      <div className="container-fluid">
        <Link className="navbar-brand text-light p-lg-2" to={"/"}>
          <span className="fs-3">Juan Lucero</span><br />
          <small>Web By Juan AKA Webby Juan</small>
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainMenu" aria-controls="mainMenu" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse mt-lg-5" id="mainMenu">
          <ul className="navbar-nav flex-column border-light border-top w-100">
            <li className="nav-item border-light border-bottom">
              <Link className="nav-link active" aria-current="page" to={"/"}>Profile</Link>
            </li>
            <li className="nav-item border-light border-bottom">
              <Link className="nav-link" to={"/career-development"}>Career Development</Link>
            </li>
            <li className="nav-item border-light border-bottom">
              <Link className="nav-link" to={"/portfolio"}>Portfolio</Link>
            </li>
            <li className="nav-item border-light border-bottom">
              <Link className="nav-link" to={"/proficiencies"}>Proficiencies</Link>
            </li>
            <li className="nav-item border-light border-bottom">
              <Link className="nav-link" to={"/education"}>Education</Link>
            </li>
            <li className="nav-item border-light border-bottom">
              <Link className="nav-link" to={"/contact"}>Contact Juan</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Nav;