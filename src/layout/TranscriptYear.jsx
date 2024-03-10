import React from 'react';
import SectionHeader from '../components/SectionHeader';
import SemesterTable from './SemesterTable';
import Emoji from '../components/Emoji';

const TranscriptYear = ({headerText}) => {
  return (
    <section className='container'>
      <SectionHeader>{headerText} </SectionHeader>
      <div className="row">
        <SemesterTable semester={[1,2,3]} headerText={<><Emoji>🍁</Emoji> Fall Semester</>}/>
        <SemesterTable semester={[1,2,3]} headerText={<><Emoji>🌸</Emoji> Spring Semester</>}/>
      </div>
    </section>
  );
}

export default TranscriptYear;
