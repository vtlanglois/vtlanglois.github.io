import React from "react";
import Emoji from "../components/Emoji";

const holidays = {
  "1-1": {
    startEmoji: "🎆",
    text: "Happy New Years!",
    endEmoji: "🎇",
  },
  "2-14": {
    startEmoji: "💘",
    text: "Happy Valentine's Day!",
    endEmoji: "💝",
  },
  "3-17": {
    startEmoji: "🍀",
    text: "Happy St. Patrick's Day!",
    endEmoji: "🍀",
  },
  "4-1": {
    startEmoji: "🤡",
    text: "April Fools!!!",
    endEmoji: "🤡",
  },
  "4-22": {
    startEmoji: "🌎",
    text: "Happy Earth Day!",
    endEmoji: "🌍",
  },
  "10-31": {
    startEmoji: "🎃",
    text: "Happy Halloween!",
    endEmoji: "👻",
  },
  "10-31": {
    startEmoji: "🎄",
    text: "Merry Christmas!",
    endEmoji: "🎅",
  },
  "12-31": {
    startEmoji: "🥂",
    text: "Happy New Years Eve!",
    endEmoji: "🍾",
  },
};

const Celebration = () => {
  var currentDate = new Date();
  var currentMonth = currentDate.getMonth() + 1;
  var currentDay = currentDate.getDate();
  var holidayKey = `${currentMonth}-${currentDay}`;
  var holiday = holidays[holidayKey];
  if (holiday) {
    return (
      <section>
        <div className="container my-lg-4">
          <div className="row text-center">
            <div className="col-12">
              <CelebrationText
                startEmoji={holiday.startEmoji}
                endEmoji={holiday.endEmoji}
              >
                {holiday.text}
              </CelebrationText>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return <></>;
};

const CelebrationText = ({ startEmoji, endEmoji, children }) => {
  return (
    <p className="h1">
      <Emoji>{startEmoji}</Emoji>
      <b>
        <u>{children}</u>
      </b>
      <Emoji className="ms-1">{endEmoji}</Emoji>
    </p>
  );
};

export default Celebration;
