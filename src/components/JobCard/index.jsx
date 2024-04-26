import styles from "./style.module.scss";
const JobCard = ({ job }) => {
  return (
    <div className={styles.box}>
      <div className={styles.top}>
        <div className={styles.right}>
          <div className={styles.imgContainer}>
            <img src={job.company.logo} alt="icon" />
          </div>
          <div className={styles.info}>{job.company.name}</div>
        </div>
        <div className={styles.left}>
          <a href={job.company.url} target="blank">
            {" "}
            <svg
              height="800px"
              width="800px"
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 310 310"
            >
              <g id="XMLID_801_">
                <path
                  id="XMLID_802_"
                  d="M72.16,99.73H9.927c-2.762,0-5,2.239-5,5v199.928c0,2.762,2.238,5,5,5H72.16c2.762,0,5-2.238,5-5V104.73
		C77.16,101.969,74.922,99.73,72.16,99.73z"
                />
                <path
                  id="XMLID_803_"
                  d="M41.066,0.341C18.422,0.341,0,18.743,0,41.362C0,63.991,18.422,82.4,41.066,82.4
		c22.626,0,41.033-18.41,41.033-41.038C82.1,18.743,63.692,0.341,41.066,0.341z"
                />
                <path
                  id="XMLID_804_"
                  d="M230.454,94.761c-24.995,0-43.472,10.745-54.679,22.954V104.73c0-2.761-2.238-5-5-5h-59.599
		c-2.762,0-5,2.239-5,5v199.928c0,2.762,2.238,5,5,5h62.097c2.762,0,5-2.238,5-5v-98.918c0-33.333,9.054-46.319,32.29-46.319
		c25.306,0,27.317,20.818,27.317,48.034v97.204c0,2.762,2.238,5,5,5H305c2.762,0,5-2.238,5-5V194.995
		C310,145.43,300.549,94.761,230.454,94.761z"
                />
              </g>
            </svg>
          </a>
        </div>
      </div>
      <div className={styles.title}>{job.title}</div>
      <div className={styles.el}>{job.type}</div>
      <div className={styles.location}>{job.location}</div>
      <div className={styles.end}>
        <div className={styles.date}>{job.postDate}</div>
        <a href={job.url} target="blank">
        <div className={styles.apply}>
          Apply{" "}
          <svg
            width="9"
            height="8"
            viewBox="0 0 9 8"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M8.49966 1.01851C8.50988 0.742553 8.29446 0.510563 8.01851 0.500342L3.52159 0.33379C3.24564 0.32357 3.01365 0.538989 3.00343 0.814942C2.99321 1.09089 3.20862 1.32288 3.48458 1.33311L7.48184 1.48115L7.33379 5.47841C7.32357 5.75436 7.53899 5.98635 7.81494 5.99657C8.09089 6.0068 8.32288 5.79138 8.3331 5.51542L8.49966 1.01851ZM1.34023 7.8664L8.34023 1.3664L7.65977 0.633603L0.659774 7.1336L1.34023 7.8664Z"></path>
          </svg>
        </div>
        </a>
      </div>
    </div>
  );
};

export default JobCard;

{
  /* <p>Job Name: {job.title}</p>
            <p>Job Type: {job.type}</p>
            <p>Job Url: {job.url}</p>
            <p>Job Location: {job.location}</p>
            <p>Job Post Date: {job.postDate}</p>
            <p>Job Company Name: {job.company.name}</p> */
}
