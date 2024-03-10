import React from 'react';
import SectionHeader from '../components/SectionHeader';
import SemesterTable from './SemesterTable';

const TranscriptYear = ({headerText}) => {
  return (
    <section className='container'>
      <SectionHeader>{headerText} </SectionHeader>
      <div className="row">
        <SemesterTable />
        <SemesterTable />
      </div>
    </section>
  );
}

export default TranscriptYear;
