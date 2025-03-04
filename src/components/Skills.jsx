import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import skill1 from '../assets/css-3-svgrepo-com.svg';
import skill2 from '../assets/html-5-svgrepo-com.svg';
import skill3 from '../assets/javascript-svgrepo-com.svg';
import skill4 from '../assets/Microsoft_Azure.svg.png';
import skill5 from '../assets/react-svgrepo-com.svg';
import skill6 from '../assets/openai.svg';
import skill7 from '../assets/sql-svgrepo-com.svg';
import skill8 from '../assets/langchain.png';
import skill9 from '../assets/devops.svg';
import skill10 from '../assets/azure-data-factory.png';
import skill11 from '../assets/rest-api.svg';
import '../styles/Skills.css';


const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 7
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3
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
              <p>Hello! I'm a Data and AI Engineer with nearly two years of experience building AI-driven solutions that allows businesses to unlock the full potential of their data.</p>
              <p>My expertise lies in Azure, Big Data and DevOps Pipelines, but my true passion is in Artificial Intelligence and Machine Learning. I specialise in developing intelligent applications using the LangChain ecosystem and other cutting-edge AI technologies, transforming raw data into actionable insights.</p>
              <p>Whether its automating workflows, enhancing decision-making or creating scalable AI solutions, I thrive when being asked to solve complex challenges with data and AI.</p>
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
                  <img src={skill5} alt="React" />
                  <p> React </p>
                </div>
                <div className="item">
                  <img src={skill4} alt="Azure" />
                  <p> Azure </p>
                </div>
                <div className="item">
                <img src={skill6} alt="OpenAI" />
                <p> OpenAI </p>
                </div>
                <div className="item">
                  <img src={skill7} alt="SQL" />
                  <p>  Azure SQL Database </p>
                </div>
                <div className="item">
                  <img src={skill8} alt="SQL" />
                  <p> LangChain </p>
                </div>
                <div className="item">
                  <img src={skill9} alt="SQL" />
                  <p> DevOps </p>
                </div>
                <div className="item">
                  <img src={skill10} alt="SQL" />
                  <p> Azure Data Factory </p>
                </div>
                <div className="item">
                  <img src={skill11} alt="SQL" />
                  <p> REST APIs </p>
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
