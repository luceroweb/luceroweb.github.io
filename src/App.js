import './App.css';
import Nav from './Components/Nav';
import Footer from './Components/Footer';
import Home from './Components/Home';

function App() {
  return (
    <div className="App">
      <div className="container">

        <div className="row g-lg-0">

          <div className="col-lg-4">
            
            <Nav />

          </div>

          <div className="col-lg-8">

            <div className="bg-white m-3 p-3 border rounded-3 clearfix">

              <Home />

            </div>

          </div>
        </div>

        <Footer />
        
      </div>

    </div>
  );
}

export default App;
