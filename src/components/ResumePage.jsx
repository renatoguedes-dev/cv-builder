import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import ResumePersonalInfo from "./ResumePersonalInfo";
import ResumeEducationFields from "./ResumeEducationFields";

/**
 * ResumePage Component
 * @param {object} personalDetails - State containing personal details
 */

const ResumePage = ({ personalDetails, educationDetails }) => {
  return (
    <div className="resume-container">
      <ResumePersonalInfo personalDetails={personalDetails} />
      <div className="other-info">
        <ResumeEducationFields educationDetails={educationDetails} />
      </div>
    </div>
  );
};

export default ResumePage;
