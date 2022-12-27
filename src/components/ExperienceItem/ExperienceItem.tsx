
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
            <h5><b>{title}</b> {location}</h5>
                    <h6><i>{startMonth}-{endMonth}</i></h6>
                    <h6><i>{job}</i></h6>
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