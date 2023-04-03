import { Card, CardBody, CardHeader, CardText, CardTitle } from "reactstrap";
import "./ProjectCard.css";

interface ProjectCardInfo {
    title: string,
    desc: string,
    links?: Array<string>,
    topics: Array<string>
}
function printTopics(topics: string[]) {
    var topicList = "";
    topics.forEach((element: string) => {
        topicList += element + ", "
    });
    return topicList.substring(0, topicList.length-2) //remove the last ", "
}

function ProjectCard(props: ProjectCardInfo) {
  return (
    <div>
      <Card className="cardgroup">
        <CardHeader tag="h4">
          <b>{props.title}</b>
        </CardHeader>
        <CardBody>
          <CardText> {props.desc}
          </CardText>
          <CardText> 
          <b>Topics: </b>{printTopics(props.topics)}
          </CardText>
        </CardBody>
      </Card>
    </div>
  );
}

export default ProjectCard;
