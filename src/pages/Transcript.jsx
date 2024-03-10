import React from "react";
import TranscriptYear from "../layout/TranscriptYear";
import Emoji from "../components/Emoji";

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
      />
      <TranscriptYear
        headerText={
          <>
            <Emoji>🐣</Emoji> Sophomore Year
          </>
        }
      />
      <TranscriptYear
        headerText={
          <>
            <Emoji>🐥</Emoji> Junior Year
          </>
        }
      />
      <TranscriptYear
        headerText={
          <>
            <Emoji>🕊️</Emoji> Senior Year
          </>
        }
      />
    </>
  );
};

export default Transcript;
