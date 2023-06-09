import {
  faCakeCandles,
  faEarthAmericas,
  faFaceSmileBeam,
  faGhost,
  faGift,
  faHandPeace,
  faHeart,
  faLeaf,
  faSnowflake,
  faSprout,
  faSun,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./LogoIcon.css";

function LogoIcon() {
  function selectIcon() {
    var currentDate = new Date();
    var currentMonth = currentDate.getMonth() + 1;
    var currentDay = currentDate.getDate();

    if (currentMonth === 1 && currentDay === 1) //new years
      return { title: "gold", icon: faHandPeace };
    else if (currentMonth === 2 && currentDay === 14) //valentines
      return { title: "tomato", icon: faHeart };
    else if (currentMonth === 3 && currentDay === 20) //first day of spring
      return { title: "green", icon: faSprout };
    else if (currentMonth === 4 && currentDay === 22) //earth day
      return { title: "snow", icon: faEarthAmericas };
    else if (currentMonth === 6 && currentDay === 23) //first day of summer
      return { title: "golden", icon: faSun }; 
    else if (currentMonth === 9 && currentDay === 22) //first day of fall
      return { title: "leaf", icon: faLeaf };
    else if (currentMonth === 10 && currentDay === 31) //halloween
      return { title: "ghost", icon: faGhost };
    else if (currentMonth === 12 && currentDay === 15) //b-day
      return { title: "bday", icon: faCakeCandles };
    else if (currentMonth === 12 && currentDay === 21) //first day of winter
      return { title: "snow", icon: faSnowflake };
    else if (currentMonth === 12 && currentDay === 25) //christmas day
      return { title: "tomato", icon: faGift };
    else return { title: "golden", icon: faFaceSmileBeam }; //default smiley
  }

  const results = selectIcon();

  return (
    <>
      <FontAwesomeIcon className={results.title} icon={results.icon} />
    </>
  );
}

export default LogoIcon;
