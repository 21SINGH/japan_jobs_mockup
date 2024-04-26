'use client'
import { useEffect, useState } from "react";
import styles from "./page.module.scss";
import JobCard from "@/components/JobCard";

const Jobs = () => {
  const [jobData, setJobData] = useState([]);
  const [selectedJobTypes, setSelectedJobTypes] = useState(["All Types"]);
  const [selectedLocations, setSelectedLocations] = useState(["All Locations"]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const storedJobData = JSON.parse(localStorage.getItem("jobData"));
    if (storedJobData && storedJobData.length > 0) {
      setJobData(storedJobData);
    } else {
      fetchData();
    }
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("/api/jobFetch");
      const data = await response.json();
      setJobData(data.jobData.data);
      localStorage.setItem("jobData", JSON.stringify(data.jobData.data));
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleRefresh = () => {
    localStorage.removeItem("jobData");
    fetchData();
  };

  const handleJobTypeClick = (jobType) => {
    if (jobType === "All Types") {
      setSelectedJobTypes(["All Types"]);
    } else if (selectedJobTypes.includes("All Types")) {
      setSelectedJobTypes([jobType]);
    } else {
      setSelectedJobTypes((prevSelectedJobTypes) => {
        if (prevSelectedJobTypes.includes(jobType)) {
          return prevSelectedJobTypes.filter((type) => type !== jobType);
        } else {
          return [...prevSelectedJobTypes, jobType];
        }
      });
    }
  };
  

  const handleLocationClick = (location) => {
    if (location === "All Locations") {
      setSelectedLocations(["All Locations"]);
    } else if (selectedLocations.includes("All Locations")) {
      setSelectedLocations([location]);
    } else {
      setSelectedLocations((prevSelectedLocations) => {
        if (prevSelectedLocations.includes(location)) {
          return prevSelectedLocations.filter((loc) => loc !== location);
        } else {
          return [...prevSelectedLocations, location];
        }
      });
    }
  };
  

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredJobs = jobData.filter((job) => {
    const typeMatch =
    selectedJobTypes.includes("All Types") || selectedJobTypes.includes(job.type);
  
    const locationMatch =
    selectedLocations.includes("All Locations") || selectedLocations.includes(job.location);
  
    const titleMatch = job.title.toLowerCase().includes(searchQuery.toLowerCase());
    const companyMatch = job.company.name.toLowerCase().includes(searchQuery.toLowerCase());
    return typeMatch && locationMatch && (titleMatch || companyMatch);
  });

  const renderFilteredJobs = () => {
    if (filteredJobs.length === 0) {
      return (
        <div className={styles.noJobs}>
          <p>No such job available for this combination of filters. </p>
          <p>Set to All Types.</p>
        </div>
      );
    } else {
      return filteredJobs.map((job, index) => (
        <div key={index}>
          <JobCard job={job} />
        </div>
      ));
    }
  };

  return (
    <div className={styles.main}>
      <div className={styles.top}>
        <div className={styles.center}>
          <div className={styles.heading}>
            <h1>Search Developer Jobs in Japan</h1>
          </div>
          <div className={styles.subHeading}>
            <p>
              🔍 No Japanese required. Apply from overseas. Top companies only.
            </p>
            <p>
              Explore our hand-picked list of the {jobData.length} best software
              developer & tech jobs in Japan.
            </p>
          </div>
          <div className={styles.search}>
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={handleSearchInputChange}
            />
          </div>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.right}>
          <div className={styles.data}>
            <p>Job Type</p>
            <div className={styles.container}>
              <div
                className={`${styles.el1} ${
                  selectedJobTypes.includes("All Types") ? styles.active : ""
                }`}
                onClick={() => handleJobTypeClick("All Types")}
              >
                All Types
              </div>
              {Array.from(new Set(jobData.map((job) => job.type))).map(
                (jobType, index) => (
                  <div
                    key={index}
                    className={`${styles.el} ${
                      selectedJobTypes.includes(jobType) ? styles.active : ""
                    }`}
                    onClick={() => handleJobTypeClick(jobType)}
                  >
                    {jobType}
                  </div>
                )
              )}
            </div>
          </div>
          <div className={styles.data}>
            <p>Location</p>
            <div className={styles.container}>
              <div
                className={`${styles.el1} ${
                  selectedLocations.includes("All Locations") ? styles.active : ""
                }`}
                onClick={() => handleLocationClick("All Locations")}
              >
                All Location
              </div>
              {Array.from(new Set(jobData.map((job) => job.location))).map(
                (jobLocation, index) => (
                  <div
                    key={index}
                    className={`${styles.el1} ${
                      selectedLocations.includes(jobLocation) ? styles.active : ""
                    }`}
                    onClick={() => handleLocationClick(jobLocation)}
                  >
                    {jobLocation}
                  </div>
                )
              )}
            </div>
          </div>
        </div>
        <div className={styles.left}>
           {renderFilteredJobs()}
        </div>
      </div>
    </div>
  );
};

export default Jobs;
