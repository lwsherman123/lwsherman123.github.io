
import { Col, Container, Row, Image} from 'react-bootstrap';
import '../styles/Projects.css'
import Footsteps from '../assets/footsteps-gif.gif'
import Sharkbait from '../assets/sharkbait-gif.gif'
import Link from '../assets/link-white.png'
import Github from '../assets/github-white.png'
import SpaceX from '../assets/Apr-13-2023 17-25-11.gif'
import Weather from '../assets/Locations..gif'

const Projects = () => {
  return (
    <section id="project" className="projects">
      <Container>
        <div className="projectdesc">
          <h2>My Projects</h2>
        </div>
        <Row style={{padding:50}}>
          <Col md={6}>
            <Image src={Footsteps} alt="Project image" fluid class="project-img" width={250}/>
          </Col>
          <Col md={6}>
            <h2 className="project-title">Footsteps</h2>
            <div className="project-skills">
                <p className="project-skill">Ruby on Rails</p>
                <p className="project-skill">JavaScript</p>
                <p className="project-skill">RestAPIs</p>
                <p className="project-skill">SCSS</p>
                <p className="project-skill">Heroku</p>
            </div>
            <p className="project-description">Footsteps is a Full-Stack Web application aimed to connect hikers, primarily across the UK, so hikers are able to find hikes, meet other hikers, live-chat with them and book/confirm a date.
            <br /> <br /> Built using Ruby on Rails users are able to signup/login, add a hike or find hikes with the integrated MapBox API. The app includes route plotting and live-chat as features
            (See README.md on github for examples).
            <br /> <br /> Inspect in Mobile View for optimal use!
            </p>
            <div className="project-links">
              <a href="https://www.footsteps.world/" target="_blank" rel="noreferrer">
                <img src={Link} alt="linkicon" />
              </a>
              <a href="https://github.com/hey24/footsteps" target="_blank" rel="noreferrer">
                <img src={Github} alt="github" />
              </a>
            </div>
          </Col>
        </Row>
        <Row style={{padding:50}} >
          <Col md={6}>
            <h2 className="project-title">SharkBait</h2>
            <div className="project-skills">
                <p className="project-skill">Ruby on Rails</p>
                <p className="project-skill">JavaScript</p>
                <p className="project-skill">SCSS</p>
                <p className="project-skill">Heroku</p>
            </div>
            <p className="project-description"> Sharkbait is a simple AirBnB/Shopify application that uses the Rails CRUD actions. It acts as an online marketplace for selling and uploading sharks.
            <br /> <br /> This project was built as part of a team on our journey to create a Full-Stack Web Applicaiton: Footsteps. </p>
            <div className="project-links">
              <a href="https://sharkbait-hey24.herokuapp.com/">
                <img src={Link} alt="" />
              </a>
              <a href="https://github.com/hey24/SharkBait">
                <img src={Github} alt="" />
              </a>
            </div>
          </Col>
          <Col md={6}>
            <Image src={Sharkbait} alt="Project image" fluid />
          </Col>
        </Row>
        <Row style={{padding:50}}>
          <Col md={6}>
          <Image src={SpaceX} alt="Project image" fluid class="project-img" width={700}/>
          </Col>
          <Col md={6}>
            <h2 className="project-title">SpaceX Clone</h2>
            <div className="project-skills">
                <p className="project-skill">HTML</p>
                <p className="project-skill">CSS</p>
                <p className="project-skill">JavaScript</p>
            </div>
            <p className="project-description"> This small project is to show my ability in being able to follow a given set of instructions to a satisfactory standard. I was using the SpaceX website as my instructions and was able to create a carbon copy of the home page.
            <br /> <br />  This also developed my HTML & CSS skills to improve my animations, hover and popout effects for future clients.
            </p>
            <div className="project-links">
              <a href="https://github.com/lwsherman123/SpaceX-Clone" target="_blank" rel="noreferrer">
                <img src={Github} alt="github" />
              </a>
            </div>
          </Col>
        </Row>
        <Row style={{padding:50}}>
          <Col md={6}>
            <h2 className="project-title">Weather App</h2>
            <div className="project-skills">
                <p className="project-skill">HTML</p>
                <p className="project-skill">JavaScript</p>
                <p className="project-skill">CSS</p>
                <p className="project-skill">RESTful API</p>
            </div>
            <p className="project-description"> This Weather App was made to show the intergration of an API into an application with real-time updates of the weather at a chosen city/country.
           </p>
            <div className="project-links">
              <a href="https://github.com/lwsherman123/Weather-App">
                <img src={Github} alt="" />
              </a>
            </div>
          </Col>
          <Col md={6}>
            <Image src={Weather} alt="Project image" fluid width={400}/>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Projects
