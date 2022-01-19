import RemoteLive1 from '../Images/portfolio/remotelive1.jpg';
import RemoteLive2 from '../Images/portfolio/remotelive2.jpg';
import RemoteLive3 from '../Images/portfolio/remotelive3.jpg';
import RemoteLive4 from '../Images/portfolio/remotelive4.jpg';

export default function Portfolio() {

  return(
    <div>
      <h1>Portfolio</h1>

      <div id="remoteLiveCaptions" className="carousel carousel-dark slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#remoteLiveCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="RemoteLive Slide 1"></button>
          <button type="button" data-bs-target="#remoteLiveCaptions" data-bs-slide-to="1" aria-label="RemoteLive Slide 2"></button>
          <button type="button" data-bs-target="#remoteLiveCaptions" data-bs-slide-to="2" aria-label="RemoteLive Slide 3"></button>
          <button type="button" data-bs-target="#remoteLiveCaptions" data-bs-slide-to="3" aria-label="RemoteLive Slide 4"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={RemoteLive1} className="d-block w-100" alt="" />
            <div className="carousel-caption p-2 d-none d-md-block bg-dark opacity-75 text-light">
              <p>RemoteLive upcoming event page with promo poster, RemoteLive twitter feed, and upcoming events calendar.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={RemoteLive2} className="d-block w-100" alt="" />
            <div className="carousel-caption p-2 d-none d-md-block bg-dark opacity-75 text-light">
              <p>An example of a RemoteLive performance from the receiving Yamaha Grand Piano as it reproduces the live event in sync with the RemoteLive video feed.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={RemoteLive3} className="d-block w-100" alt="" />
            <div className="carousel-caption p-2 d-none d-md-block bg-dark opacity-75 text-light">
              <p>RemoteLive upcoming event page with event banner, rich text promo instead of a poster, RemoteLive twitter feed, and upcoming events calendar.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={RemoteLive4} className="d-block w-100" alt="" />
            <div className="carousel-caption p-2 d-none d-md-block bg-dark opacity-75 text-light">
              <p>This is an end slide showing the event banner promotion and a rich text message thanking the viewer for watching the performance.</p>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#remoteLiveCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#remoteLiveCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <h2>“Remote Live” Technology for Yamaha Disklavier Instruments</h2>

      <p>Status: Previous Site Design</p>

      <p>The first iteration of a simple yet feature-rich page to display the revolutionary “Remote Live” technology. When connected to the audio feed, live performances are reproduced on the user's Disklavier. We are using similar functionality on the Junior Original Concert (annual event) and <a href="https://www.yamaha.com/yasi/multimedia.html?CNTID=7090468" target="_blank">Yamaha Artist Services, Inc.</a> live video pages.</p>

      <h3>Challenges</h3>

      <ul>
        <li>Created a ASP/jQuery event schedule to automate the Flash/HMTL5 video feed.</li>
        <li>Integrated a mobile optimized remote control to override video feed from the shoot.</li>
        <li>Real time Twitter feed, event calendar, chat, map of connected Disklaviers, etc.</li>
        <li>Information is easy to understand so that any inexperienced Disklavier owner can enjoy effortlessly.</li>
        <li>We standardized a company-wide event utility that controls this page and others like it.</li>
      </ul>

      <h2><a href="http://www.yamaha.com/usa/remotelive" target="_blank">RemoteLive</a> (version 2)</h2>

      <p>Status: Live</p>

      <h3>Challenges</h3>

      <ul>
        <li>This site contains an events engine that stores and displays our live performance and rebroadcast schedule</li>
        <li>I constructed the first version of this site myself using simple ASP arrays and functions. That site provided the basis for the current version which our team here at Yamaha constructed in .NET along with my HTML/CSS/jQuery assistance.</li>
        <li>The final jQuery scripts we wrote update the events list in real time</li>
        <li>Just prior to a performance, the jquery invites the viewer to join the broadcast</li>
        <li>Broadcasts are currently presented in Flash video format only (restriction of our 3rd party streaming service)</li>
        <li>Since our jQuery regularly polls the database for changes, we can update event data in real time without requiring the user to reload the page.</li>
        <li>We are recently redesigning this site to incorporate On Demand video and streamlined connection instructions, intro video, etc.</li>
      </ul>

    </div>
  )
}