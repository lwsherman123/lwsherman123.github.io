import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import skill1 from '../assets/css-3-svgrepo-com.svg';
import skill2 from '../assets/html-5-svgrepo-com.svg';
import skill3 from '../assets/javascript-svgrepo-com.svg';
import skill4 from '../assets/rails-svgrepo-com.svg';
import skill5 from '../assets/react-svgrepo-com.svg';
import skill6 from '../assets/ruby-svgrepo-com.svg';
import skill7 from '../assets/sql-svgrepo-com.svg';


const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2> About Me </h2>
              <p>A full-stack developer with a passion for crafting seamless web applications. With some experience under my belt, I specialize in using modern technologies to build scalable and user-friendly interfaces.</p>
              <p>As a full-stack developer, I'm equally comfortable working on front-end and back-end technologies. I love tackling complex problems, and I'm always on the lookout for innovative solutions. Whether it's building APIs or using front-end frameworks like React, I'm always eager to take on new challenges.</p>
              <p>What sets me apart is my ability to think creatively and adapt quickly to new technologies. I'm a team player, and I enjoy collaborating with others to bring projects to life. If you're looking for a developer with a passion for building cutting-edge web applications, let's connect!</p>
            </div>
          </Col>
          <Col>
            <div className="skill-bx">
              <h2> My Stack </h2>
              <p> Here are the main features of my stack</p>
              <Carousel responsive={responsive} infinite={true} className="skill-slider" autoPlay={true}>
                <div className="item">
                  <img src={skill1} alt="CSS" />
                  <p> CSS </p>
                </div>
                <div className="item">
                  <img src={skill2} alt="HTML" />
                  <p> HTML5 </p>
                </div>
                <div className="item">
                  <img src={skill3} alt="JS" />
                  <p> JavaScript </p>
                </div>
                <div className="item">
                  <img src={skill4} alt="Rails" />
                  <p> Ruby On Rails </p>
                </div>
                <div className="item">
                  <img src={skill5} alt="React" />
                  <p> React </p>
                </div>
                <div className="item">
                <img src={skill6} alt="Ruby" />
                <p> Ruby </p>
                </div>
                <div className="item">
                  <img src={skill7} alt="SQL" />
                  <p> SQL </p>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Skills
