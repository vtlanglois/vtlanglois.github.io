import React from "react";
import Emoji from "../components/Emoji";

const holidays = {
  "11": {
    startEmoji: "🎆",
    text: "Happy New Years!",
    endEmoji: "🎇",
  },
  "214": {
    startEmoji: "💘",
    text: "Happy Valentines Day!",
    endEmoji: "💝",
  },
  "317": {
    startEmoji: "🍀",
    text: "Happy St. Patrick's Day!",
    endEmoji: "🍀",
  },
  "41": {
    startEmoji: "🤡",
    text: "April Fools!!!",
    endEmoji: "🤡",
  },
  "422": {
    startEmoji: "🌎",
    text: "Happy Earth Day!",
    endEmoji: "🌍",
  },
};

const Celebration = () => {
  var currentDate = new Date();
  var currentMonth = currentDate.getMonth() + 1;
  var currentDay = currentDate.getDate();
  var holidayKey = currentMonth.toString() + currentDay.toString();
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
