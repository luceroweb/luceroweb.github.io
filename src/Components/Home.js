import Juan from '../Images/juan.jpg';

export default function Home() {
  
  return(
    <div>
      <h1>Profile</h1>
  
      <img src={Juan} alt="" className="float-md-start me-md-3 mb-md-3 w-100 d-md-none" />
      <img src={Juan} alt="" className="float-md-start me-md-3 mb-md-3 w-50 d-none d-md-block" />

      <p>I have extensive experience in web site structure and layout. I have developed web sites, print advertisements, financial reports, and data management solutions for higher education, non-profit, high-tech, manufacturing and small business.</p>
      <p><strong>Effective Team Player</strong> – I am known for my enthusiasm for complex projects, ability to turn constructive criticism into elegant solutions, intuitive ability to sense and facilitate client's needs, and finds joy in working with both clients and coworkers. A former manager noted: “Juan is indispensable. I rely on his ability to see problems from multiple points of view, and convert that into client solutions.” – Candace Egan, Former Web Manager, Fresno State.</p>
      <p><strong>UI Philosophies</strong> – I believe that simple, semantic structure can be easily optimized to work well in all browsers, on all devices, and will allow for excellent SEO. Through mutual respect and camaraderie with my coworkers, we can analyze and define clear job requirements. This results in well formed and well organized finished products.</p>
    </div>
  )
}