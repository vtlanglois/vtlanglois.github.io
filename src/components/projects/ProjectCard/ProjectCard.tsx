import { faFigma, faGithub, faItchIo } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, ButtonToolbar, Card, CardBody, CardFooter, CardHeader, CardText } from "reactstrap";
import "./ProjectCard.css";
import "../../../App.css"

export interface ProjectCardInfo {
    title: string,
    desc: string,
    links: Array<string>,
    topics: Array<string>
}
function printTopics(topics: string[]) {
    var topicList = "";
    topics.forEach((element: string) => {
        topicList += element + ", "
    });
    return topicList.substring(0, topicList.length-2) //remove the last ", "
}

function handleClick() {
  console.log("card clicked!");
}

function ProjectCard(props: ProjectCardInfo) {
  return (
    <div>
      <Card className="App-card">
        <CardHeader tag="h4"  onClick={handleClick}>
          <b>{props.title}</b>
        </CardHeader>
        <CardBody  onClick={handleClick}>
          <CardText> {props.desc}
          </CardText>
          <CardText> 
          <b>Topics: </b>{printTopics(props.topics)}
          </CardText>
          </CardBody>
          <CardFooter> 
          <ButtonToolbar>
            {props.links.map((link) => {
              if (link.includes("github")) {
                return (<a href={link} ><Button className="github-link me-2"><FontAwesomeIcon icon={faGithub}/> See on GitHub</Button></a>)
              } else if (link.includes("figma")) {
                return (<a href={link} ><Button className="figma-link me-2"><FontAwesomeIcon icon={faFigma}/> View on Figma</Button></a>)
              } else if (link.includes("itch.io")) {
                return (<a href={link} ><Button className="itch-link me-2"><FontAwesomeIcon icon={faItchIo}/> Play on itch.io</Button></a>)
              }
            })}
          </ButtonToolbar>
          </CardFooter>
      </Card>
    </div>
  );
}

export default ProjectCard;
