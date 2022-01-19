import { Link } from 'react-router-dom';

const Footer = () => {

  return(
    <footer className="d-flex flex-column flex-md-row align-items-center justify-content-evenly w-100 bg-success p-3 text-center">
      <div className="text-light">
          1428 W. Gettysburg Ave, Fresno, CA 93705
      </div>
      <div className="text-light">
        (559) 273-5007
      </div>
      <div className="text-light">
        <Link to={"contact"}  className="btn btn-success">luceroweb@gmail.com</Link>
      </div>
    </footer>
  )
}

export default Footer;