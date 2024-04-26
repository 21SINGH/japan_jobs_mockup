'use client'
import React, { useState } from 'react';

const Page = () => {
  // const [jobData, setJobData] = useState([]); 

  // const fetchData = async () => {
  //   try {
  //     const response = await fetch('/api/jobFetch');
  //     const data = await response.json();
  //     setJobData(data.jobData.data); 
  //     console.log(data);
  //   } catch (error) {
  //     console.error('Error fetching data:', error);
  //   }
  // };

  return (
    <div>
      {/* <div onClick={fetchData}>Refresh</div>
      <ul>
        {jobData.map((job, index) => (
          <li key={index}>
            <p>{index+1}</p>
            <p>Job Name: {job.title}</p>
            <p>Job Type: {job.type}</p>
            <p>Job Url: {job.url}</p>
            <p>Job Location: {job.location}</p>
            <p>Job Post Date: {job.postDate}</p>
            <p>Job Comopany Name: {job.company.name}</p>
          </li>
        ))}
      </ul> */}
    </div>
  );
};

export default Page;
