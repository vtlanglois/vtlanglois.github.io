import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container } from "reactstrap";


/**@TODO find a better way to do remove underline */
function TabHeader(props: any) {
  return (
    <div>
      {!props.removeUnderline && <hr />}
      <h4>
        <FontAwesomeIcon icon={props.icon} className="icon" />
        <b>{props.title}</b>
      </h4>
      {!props.removeUnderline && <hr />}
    </div>
  );
}

export default TabHeader;
