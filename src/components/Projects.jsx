
import { Col, Container, Row} from 'react-bootstrap';
import ProjectCard from './ProjectCard';

const Projects = () => {
  return (
    <section className="project" id="projects">
      <Container>
        <Row>
            <div className="projectdesc">
              <h2> Projects </h2>
              <p> My completed projects. More to come soon!</p>
            </div>
          <Col>
            <div className="projectholder">
              <ProjectCard
                title="Footsteps"
                description="I created a project for hikers to be able to meet new people by adding hikes and requesting to join hikes. This was done firstly with a detailed schema viewing all the models and relationships then moving on to implementing Mapbox API and Cloudinary to allow image upload. I was also able to use further javascript and stimulus to allow users to plot routes which saved, showed the route and calculated the distance of the hike. There is also an intergrated chat feature to allow users to message eachother in real time to plan events."
                ghLink="https://www.footsteps.world/"
              />
              <ProjectCard
                title="AirBnB Clone"
                description="I created a simple AirBnb clone where you were able to list/delete/edit items using CRUD functions in order to practise my Rails capabilities. I worked in a team by firstly creating a schema, planning a user journey and using github to deploy the app so fellow teammates were able to work on the project collaboratively. I was able to learn a significant amount in the project allowing me to add new features to the final project of my bootcamp, Footsteps."
                ghLink="https://sharkbait-hey24.herokuapp.com/"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Projects
