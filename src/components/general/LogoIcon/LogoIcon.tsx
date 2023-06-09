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

    if (currentMonth === 1 && currentDay === 1)
      return { title: "gold", icon: faHandPeace };
    else if (currentMonth === 2 && currentDay === 14)
      return { title: "tomato", icon: faHeart };
    else if (currentMonth === 3 && currentDay === 20)
      return { title: "green", icon: faSprout };
    else if (currentMonth === 4 && currentDay === 22)
      return { title: "snow", icon: faEarthAmericas };
    else if (currentMonth === 6 && currentDay === 23)
      return { title: "golden", icon: faSun };
    else if (currentMonth === 9 && currentDay === 22)
      return { title: "leaf", icon: faLeaf };
    else if (currentMonth === 10 && currentDay === 31)
      return { title: "ghost", icon: faGhost };
    else if (currentMonth === 12 && currentDay === 15)
      return { title: "bday", icon: faCakeCandles };
    else if (currentMonth === 12 && currentDay === 21)
      return { title: "snow", icon: faSnowflake };
    else if (currentMonth === 12 && currentDay === 25)
      return { title: "tomato", icon: faGift };
    else return { title: "golden", icon: faFaceSmileBeam };
  }

  const results = selectIcon();

  return (
    <>
      <FontAwesomeIcon className={results.title} icon={results.icon} />
    </>
  );
}

export default LogoIcon;
