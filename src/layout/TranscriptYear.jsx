import React from 'react';
import SectionHeader from '../components/SectionHeader';
import SemesterTable from './SemesterTable';
import Emoji from '../components/Emoji';

const TranscriptYear = ({headerText, fallSemester, springSemester}) => {
  return (
    <section className='container'>
      <SectionHeader>{headerText} </SectionHeader>
      <div className="row">
        <SemesterTable semester={fallSemester} headerText={<>Fall Semester</>}/>
        <SemesterTable semester={springSemester} headerText={<>Spring Semester</>}/>
      </div>
    </section>
  );
}

export default TranscriptYear;
