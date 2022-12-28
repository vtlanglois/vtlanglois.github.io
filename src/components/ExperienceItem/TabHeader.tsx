import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function TabHeader(props: any) {
  return (
    <div>
      <h4>
        <FontAwesomeIcon icon={props.icon} className="icon" />
        <b>{props.title}</b>
      </h4>
      <hr></hr>
    </div>
  );
}

export default TabHeader;
