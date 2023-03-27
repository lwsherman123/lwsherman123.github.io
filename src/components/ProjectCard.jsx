import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function ProjectCard(props) {  
    
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        <Button className="viewbtn" variant="primary" href={props.ghLink} target="_blank">Go To Project</Button>
      </Card.Body>
    </Card>
  );
}

export default ProjectCard;