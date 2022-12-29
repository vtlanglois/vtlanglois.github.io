import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container } from "reactstrap";

function TabHeader(props: any) {
  return (
    <div>
      <Container>
      <h4>
        <FontAwesomeIcon icon={props.icon} className="icon" />
        <b>{props.title}</b>
      </h4>
      <hr></hr>
      </Container>
    </div>
  );
}

export default TabHeader;
