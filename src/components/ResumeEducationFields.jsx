import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus } from "@fortawesome/free-solid-svg-icons";

const ResumeEducationFields = ({ educationDetails }) => {
  return (
    <div className="education-section">
      {educationDetails.length !== 0 && <h2>Education</h2>}
      {educationDetails.map((education) => (
        <div key={education.id} className="education-info">
          <div className="graduation-info">
            <div className="university-name">{education.university}</div>
            <div className="degree-details">{education.degree}</div>
          </div>
          <div className="dates-location-info">
            <div className="start-end-dates">
              <span className="start-date-details">{education.startDate} </span>
              {education.startDate && (
                <FontAwesomeIcon icon={faMinus} className="minus-icon" />
              )}
              <span className="end-date-details"> {education.endDate}</span>
            </div>
            <div className="location-info">
              <span>{education.location}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ResumeEducationFields;
