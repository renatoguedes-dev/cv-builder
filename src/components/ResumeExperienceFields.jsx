import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faCircle } from "@fortawesome/free-solid-svg-icons";

const ResumeExperienceFields = ({ workDetails }) => {
  return (
    <div className="header-section">
      {workDetails.length !== 0 && <h2>Professional Experience</h2>}
      {workDetails.map((company) => (
        <div key={company.id} className="general-info">
          <div className="job-info">
            <div className="company-position-div">
              <div className="company-name">{company.companyName}</div>
              <FontAwesomeIcon icon={faMinus} className="minus-icon" />
              <div className="position-details">{company.positionTitle}</div>
            </div>
            <div className="job-description-details">
              {company.jobDescription}
            </div>
          </div>
          <div className="dates-location-info">
            <div className="start-end-dates">
              <span className="start-date-details">{company.startDate} </span>
              {company.startDate && (
                <FontAwesomeIcon icon={faMinus} className="minus-icon" />
              )}
              <span className="end-date-details"> {company.endDate}</span>
            </div>
            <div className="location-info">
              <span>{company.location}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ResumeExperienceFields;
