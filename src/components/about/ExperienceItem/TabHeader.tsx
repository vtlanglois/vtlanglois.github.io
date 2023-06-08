import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card, CardBody, CardHeader, CardText, CardTitle } from "reactstrap";
import "./TabHeader.css"

/**@TODO #12 find a better way to do remove underline */
function TabHeader(props: any) {
  return (
    <div>
      <Card  className="header">
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
