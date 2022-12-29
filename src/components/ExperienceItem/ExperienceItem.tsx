import {
  ReactElement,
  JSXElementConstructor,
  ReactFragment,
  ReactPortal,
} from "react";
import { Col, Container, Row } from "reactstrap";
import { start } from "repl";
import ExperienceHeader from "./ExperienceHeader";
import "./ExperienceItem.css";

interface ExperienceItemProps {
  title: string;
  location?: string;
  startMonth?: string;
  endMonth?: string;
  job?: string;
  details: Array<string>;
}

const ExperienceItem = ({
  title,
  location,
  startMonth,
  endMonth,
  job,
  details,
}: ExperienceItemProps) => {
  return (
    <div>
      <ExperienceHeader
        title={title}
        location={location}
        job={job}
        startMonth={startMonth}
        endMonth={endMonth}
      />

      <ul>
        {details.map((detail) => {
          return <li>{detail}</li>;
        })}
      </ul>
    </div>
  );
};
export default ExperienceItem;
