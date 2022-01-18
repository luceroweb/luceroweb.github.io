const Nav = () => {

  return(
    <nav className="navbar navbar-expand-lg navbar-dark bg-success flex-wrap h-100 align-content-start">
      <div className="container-fluid">
        <a className="navbar-brand text-light p-lg-2" href="/">
          <span className="fs-3">Juan Lucero</span><br />
          <small>Web By Juan AKA Webby Juan</small>
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainMenu" aria-controls="mainMenu" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse mt-lg-5" id="mainMenu">
          <ul className="navbar-nav flex-column border-light border-top w-100">
            <li className="nav-item border-light border-bottom">
              <a className="nav-link active" aria-current="page" href="/">Profile</a>
            </li>
            <li className="nav-item border-light border-bottom">
              <a className="nav-link" href="career-development.html">Career Development</a>
            </li>
            <li className="nav-item border-light border-bottom">
              <a className="nav-link" href="portfolio.html">Portfolio</a>
            </li>
            <li className="nav-item border-light border-bottom">
              <a className="nav-link" href="proficiencies.html">Proficiencies</a>
            </li>
            <li className="nav-item border-light border-bottom">
              <a className="nav-link" href="education.html">Education</a>
            </li>
            <li className="nav-item border-light border-bottom">
              <a className="nav-link" href="contact.html">Contact Juan</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Nav;