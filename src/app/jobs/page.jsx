"use client";
import { useEffect, useState } from "react";
import styles from "./page.module.scss";
import JobCard from "@/components/JobCard";
import Spinner from "@/components/Spinner";
import AuroraHero from "@/components/AuroHero";

const Jobs = () => {
  const [jobData, setJobData] = useState([]);
  const [selectedJobTypes, setSelectedJobTypes] = useState(["All Types"]);
  const [selectedLocations, setSelectedLocations] = useState(["All Locations"]);
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [visibleJobs, setVisibleJobs] = useState(8);
  const [jobDropdwon, setJobDropdwon] = useState(false);
  const [locaDropdwon, setLocaDropdwon] = useState(false);
  const [filter, setFilter] = useState(false);

  useEffect(() => {
    const storedJobData = JSON.parse(localStorage.getItem("jobData"));
    if (storedJobData && storedJobData.length > 0) {
      setJobData(storedJobData);
    } else {
      fetchData();
    }
  }, []);

  const fetchData = async () => {
    setIsLoading(true); // Set loading to true when fetching data
    try {
      const response = await fetch("/api/jobFetch");
      const data = await response.json();
      setJobData(data.jobData.data);
      localStorage.setItem("jobData", JSON.stringify(data.jobData.data));
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setIsLoading(false); // Set loading to false when data fetching is done
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

  const handleShowMore = () => {
    setVisibleJobs((prevVisibleJobs) => prevVisibleJobs + 8); // Increase the number of visible jobs by 8
  };
  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredJobs = jobData.filter((job) => {
    const typeMatch =
      selectedJobTypes.includes("All Types") ||
      selectedJobTypes.includes(job.type);

    const locationMatch =
      selectedLocations.includes("All Locations") ||
      selectedLocations.includes(job.location);

    const titleMatch = job.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const companyMatch = job.company.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return typeMatch && locationMatch && (titleMatch || companyMatch);
  });

  const renderFilteredJobs = () => {
    // Only render visibleJobs number of jobs
    const visibleJobList = filteredJobs.slice(0, visibleJobs);
    if (visibleJobList.length === 0) {
      return (
        <div className={styles.noJobs}>
          <p>No such job available for this combination of filters. </p>
          <p>Set to All Types.</p>
        </div>
      );
    } else {
      return visibleJobList.map((job, index) => (
        <div key={index}>
          <JobCard job={job} />
        </div>
      ));
    }
  };

  return (
    <div className={styles.main}>
      <AuroraHero />
      <div className={styles.top}>
        <div className={styles.center}>
          <div className={styles.heading}>
            <div >Search Developer Jobs in Japan</div>
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
              className={`${styles.inputClicked} ${styles.searchInput}`}
              type="text"
              placeholder="Search Company or Job Name"
              value={searchQuery}
              onChange={handleSearchInputChange}
            />
          </div>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.right}>
          <div onClick={() => setFilter(!filter)} className={styles.title}>
            <p> FILTERS</p>
            <div className={styles.svg1}>
              <svg
                height="20"
                viewBox="0 0 48 48"
                width="20"
                xmlns="http://www.w3.org/2000/svg"
                style={{
                  transform: filter
                    ? "rotate(0deg) translateZ(0px)"
                    : "rotate(-90deg) translateZ(0px)",
                }}
              >
                <path d="M14.83 16.42l9.17 9.17 9.17-9.17 2.83 2.83-12 12-12-12z" />
              </svg>
            </div>
          </div>
          {filter && (
            <>
              <div className={styles.data}>
                <div
                  onClick={() => setJobDropdwon(!jobDropdwon)}
                  className={styles.title}
                >
                  <p>Job Type</p>
                  <div className={styles.svg}>
                    <svg
                      height="20"
                      viewBox="0 0 48 48"
                      width="20"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{
                        transform: jobDropdwon
                          ? "rotate(0deg) translateZ(0px)"
                          : "rotate(-90deg) translateZ(0px)",
                      }}
                    >
                      <path d="M14.83 16.42l9.17 9.17 9.17-9.17 2.83 2.83-12 12-12-12z" />
                    </svg>
                  </div>
                </div>
                <div className={styles.container}>
                  <div
                    className={`${styles.el1} ${
                      selectedJobTypes.includes("All Types")
                        ? styles.active
                        : ""
                    }`}
                    onClick={() => handleJobTypeClick("All Types")}
                  >
                    All Types
                  </div>
                  {jobDropdwon &&
                    Array.from(new Set(jobData.map((job) => job.type))).map(
                      (jobType, index) => (
                        <div
                          key={index}
                          className={`${styles.el} ${
                            selectedJobTypes.includes(jobType)
                              ? styles.active
                              : ""
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
                <div
                  onClick={() => setLocaDropdwon(!locaDropdwon)}
                  className={styles.title}
                >
                  <p>Location</p>
                  <div className={styles.svg}>
                    <svg
                      height="20"
                      viewBox="0 0 48 48"
                      width="20"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{
                        transform: locaDropdwon
                          ? "rotate(0deg) translateZ(0px)"
                          : "rotate(-90deg) translateZ(0px)",
                      }}
                    >
                      <path d="M14.83 16.42l9.17 9.17 9.17-9.17 2.83 2.83-12 12-12-12z" />
                    </svg>
                  </div>
                </div>
                <div className={styles.container}>
                  <div
                    className={`${styles.el1} ${
                      selectedLocations.includes("All Locations")
                        ? styles.active
                        : ""
                    }`}
                    onClick={() => handleLocationClick("All Locations")}
                  >
                    All Location
                  </div>
                  {locaDropdwon &&
                    Array.from(new Set(jobData.map((job) => job.location))).map(
                      (jobLocation, index) => (
                        <div
                          key={index}
                          className={`${styles.el1} ${
                            selectedLocations.includes(jobLocation)
                              ? styles.active
                              : ""
                          }`}
                          onClick={() => handleLocationClick(jobLocation)}
                        >
                          {jobLocation}
                        </div>
                      )
                    )}
                </div>
              </div>
            </>
          )}
        </div>
        <div className={styles.left}>
          <div className={styles.refresh} onClick={handleRefresh}>
            <div className={styles.el}>⟳</div>
          </div>
          {isLoading ? <Spinner /> : renderFilteredJobs()}
          {/* Show More button */}
          {visibleJobs < filteredJobs.length && (
            <div className={styles.showMoreBtnContainer}>
              <div onClick={handleShowMore} className={styles.btn}>
                Show More
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Jobs;
