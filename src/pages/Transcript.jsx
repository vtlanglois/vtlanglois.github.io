import React from "react";
import Emoji from "../components/Emoji";
import {
  fall2019Semester,
  fall2020Semester,
  fall2021Semester,
  fall2022Semester,
  spring2020Semester,
  spring2021Semester,
  spring2022Semester,
  spring2023Semester,
} from "../data/DetailedYears";
import TranscriptYear from "../layout/TranscriptYear";

const Transcript = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <h1 className="col-12">Transcript</h1>
        </div>
      </div>
      <TranscriptYear
        headerText={
          <>
            <Emoji>🥚</Emoji> Freshman Year
          </>
        }
        fallSemester={fall2019Semester.classes}
        springSemester={spring2020Semester.classes}
      />
      <TranscriptYear
        headerText={
          <>
            <Emoji>🐣</Emoji> Sophomore Year
          </>
        }
        fallSemester={fall2020Semester.classes}
        springSemester={spring2021Semester.classes}
      />
      <TranscriptYear
        headerText={
          <>
            <Emoji>🐥</Emoji> Junior Year
          </>
        }
        fallSemester={fall2021Semester.classes}
        springSemester={spring2022Semester.classes}
      />
      <TranscriptYear
        headerText={
          <>
            <Emoji>🕊️</Emoji> Senior Year
          </>
        }
        fallSemester={fall2022Semester.classes}
        springSemester={spring2023Semester.classes}
      />
    </>
  );
};

export default Transcript;
