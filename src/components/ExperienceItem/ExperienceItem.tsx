
import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from "react";
import "./ExperienceItem.css"

interface ExperienceItemProps {
    title: string;
    location?: string;
    startMonth?: string;
    endMonth?: string;
    job?: string;
    details: Array<string>;
    
}

const ExperienceItem = ({title, location, startMonth, endMonth, job, details}: ExperienceItemProps) => {



    return (
        <div>
            <h4><b>{title}</b> {location}</h4>
                    <h5><i>{startMonth}-{endMonth}</i></h5>
                    <h5><i>{job}</i></h5>
                    <ul>
                        {details.map(detail => {
                            return (
                                <li>{detail}</li>
                            )
                        })}
                    </ul>
      </div>
    );
}
export default ExperienceItem;