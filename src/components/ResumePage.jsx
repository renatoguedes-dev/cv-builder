import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import ResumePersonalInfo from "./ResumePersonalInfo";
import ResumeEducationFields from "./ResumeEducationFields";
import ResumeExperienceFields from "./ResumeExperienceFields";

/**
 * ResumePage Component
 * @param {object} personalDetails - State containing personal details
 */

const ResumePage = ({ personalDetails, educationDetails, workDetails }) => {
  return (
    <div className="resume-container">
      <ResumePersonalInfo personalDetails={personalDetails} />
      <div className="other-info">
        <ResumeEducationFields educationDetails={educationDetails} />
        <ResumeExperienceFields workDetails={workDetails}/>
      </div>
    </div>
  );
};

export default ResumePage;
