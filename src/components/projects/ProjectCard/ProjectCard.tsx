import {
    Card,
    CardBody,
    CardHeader,
    CardText
} from "reactstrap";
import "./ProjectCard.css";
  
  function ProjectPage() {
    return (
      <div>
        <Card className="cardgroup">
          <CardHeader tag="h5"><b>Cordiall.gg</b></CardHeader>
          <CardBody>
            <CardText>
              With supporting text below as a natural lead-in to additional
              content.
            </CardText>
          </CardBody>
        </Card>
      </div>
    );
  }
  
  export default ProjectPage;
  