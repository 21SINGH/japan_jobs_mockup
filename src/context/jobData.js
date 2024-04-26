'use client'
import React, { createContext, useState } from "react";

export const JobDataContext = createContext();

export const JobDataProvider = ({ children }) => {
  const [jobData, setJobData] = useState([]);

  const updateJobData = (data) => {
    setJobData(data);
  };

  return (
    <JobDataContext.Provider value={{ jobData, updateJobData }}>
      {children}
    </JobDataContext.Provider>
  );
};
