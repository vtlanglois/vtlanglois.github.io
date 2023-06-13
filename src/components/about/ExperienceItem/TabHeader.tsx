import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card, CardBody, CardHeader, CardText, CardTitle } from "reactstrap";
import "./TabHeader.css"
import "../../../App.css"

function TabHeader(props: any) {
  return (
    <div>
      <Card  className="App-card header">
      <CardBody>
      <h4>
        <CardTitle>
        <FontAwesomeIcon icon={props.icon} className="icon" />
        <b>{props.title}</b>
        </CardTitle>
      </h4>
      </CardBody>
      </Card>
    </div>
  );
}

export default TabHeader;
